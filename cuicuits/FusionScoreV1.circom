pragma circom 2.0.3;

// Template parameter indicate number of accounts that can be combined
template FusionScoreV1(n) {
    assert(n<=20);

    signal input evalTime; // Time when score is calculated
    signal input creationTime[n]; // Timestamp of account creation
    signal input transactionCount[n]; // Number of transaction in last year
    signal input balanceAmount[n]; // Account balance

    signal output version; // Fusion Score Version
    signal output score; // Calculated Fusion Score

    version <== 1;
    score <== 0;
}

component main {public [evalTime]} = FusionScoreV1();
