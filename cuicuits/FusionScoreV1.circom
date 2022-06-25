pragma circom 2.0.3;

include "../node_modules/circomlib/circuits/comparators.circom";

// Return input if it is less than max, otherwise return max
template LimitMax(max) {
    assert(max<1024); // need to increase bits for LessThan for larger "max" value

    signal input in;
    signal output out;

    component lt = LessThan(11);
    lt.in[0] <== in;
    lt.in[1] <== max;

    out <== max + (in - max) * lt.out;
}

// Combine scores into accumulator by multiplying if account is valid (non zero score)
// Also tracks the scale to be adjusted at the end if account is valid
// If account is not valid, previous accumulator and scale is returned
template CombineScore() {
    signal input score; // account credit score in range [0, 1000]
    signal input accumulator;
    signal input scale;

    signal output accumulator_out;
    signal output scale_out;

    var score_mapped = 1000 + (1000 - score); // mapping score to [1000, 2000] in reverse
    signal accumulator_new <== accumulator * score_mapped / 1000; // use signal for quadratic limitation
    var scale_new = scale * 2;

    component iz = IsZero();
    iz.in <== score;

    accumulator_out <== accumulator_new + (accumulator - accumulator_new) * iz.out;
    scale_out <== scale_new + (scale - scale_new) * iz.out;
}

// Template parameter indicate number of accounts that can be combined
template FusionScoreV1(n) {
    assert(n<=20);

    signal input evalTime; // Time when score is calculated
    signal input creationTime[n]; // Timestamp of account creation
    signal input transactionCount[n]; // Number of transaction in last year
    signal input balanceAmount[n]; // Account balance

    signal output version; // Fusion Score Version
    signal output score; // Calculated Fusion Score

    component longevity[n];
    component activity[n];
    component equity[n];
    signal accountScore[n];
    component combine[n];

    for (var i=0; i<n; i++) {
        longevity[i] = LimitMax(300);
        longevity[i].in <== (evalTime - creationTime[i]) / 2;

        activity[i] = LimitMax(300);
        activity[i].in <== transactionCount[i];

        equity[i] = LimitMax(300);
        equity[i].in <== balanceAmount[i] / 512;

        accountScore[i] <== longevity[i].out + activity[i].out + equity[i].out;

        combine[i] = CombineScore();
        if (i == 0) {
            assert(accountScore[i] > 0); // Must have at least one valid account

            combine[i].score <== accountScore[i];
            combine[i].accumulator <== 1;
            combine[i].scale <== 1;
        } else {
            combine[i].score <== accountScore[i];
            combine[i].accumulator <== combine[i-1].accumulator_out;
            combine[i].scale <== combine[i-1].scale_out;
        }
    }

    version <== 1; // hard coded for version 1

    var factor = combine[n-1].scale_out - 1;
    var mapped = combine[n-1].accumulator_out - 1000;
    score <-- 1000 - mapped / factor;
    score * factor === 1000 * factor - mapped;
}

component main {public [evalTime]} = FusionScoreV1(20);
