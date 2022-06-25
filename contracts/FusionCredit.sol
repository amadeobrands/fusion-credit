// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

interface IVerifier {
    struct Proof {
        uint[8] data;
    }
    function verify(uint[] memory input, Proof memory proof) external view returns (uint);
}

contract FusionCredit {
    IVerifier public verifier;
    mapping(address => ScoreData) public scores;

    struct ScoreData {
        uint16 score;
        uint16 version;
        uint48 timestamp;
    }

    constructor(IVerifier _verifier) {
        verifier = _verifier;
    }

    function setVerifier(IVerifier _verifier) public {
        verifier = _verifier;
    }

    function getScore(address _addr) public view returns(uint score, uint version, uint timestamp) {
        ScoreData memory scoreData = scores[_addr];
        return (scoreData.score, scoreData.version, scoreData.timestamp);
    }

    function setScore(uint score, uint version, uint timestamp, uint[8] memory proof) public {
        require(verifier != IVerifier(address(0)), "Verifier not set");

        ScoreData memory scoreData = scores[msg.sender];
        require(version >= scoreData.version, "Can't use earlier version");
        require(timestamp > scoreData.timestamp, "Can't use earlier timestamp");
        require(timestamp <= block.timestamp, "Can't use future timestamp");

        // uint[] memory input = new uint[](3);
        // input[0] = timestamp;
        // input[1] = version;
        // input[2] = score;
        // require(verifier.verify(input, IVerifier.Proof(proof)) == 0, "Proof not valid");

        scores[msg.sender] = ScoreData(uint16(score), uint16(version), uint48(timestamp));
    }
}
