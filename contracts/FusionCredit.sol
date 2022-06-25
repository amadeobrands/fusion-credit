// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

interface IVerifier {
    function verifyProof(uint[2] memory a, uint[2][2] memory b, uint[2] memory c, 
        uint[3] memory input) external view returns (bool r);
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

        uint[3] memory input = [score, version, timestamp];
        uint[2] memory a = [proof[0], proof[1]];
        uint[2][2] memory b = [[proof[2], proof[3]], [proof[4], proof[5]]];
        uint[2] memory c = [proof[6], proof[7]];
        require(verifier.verifyProof(a, b, c, input), "Proof not valid");

        scores[msg.sender] = ScoreData(uint16(score), uint16(version), uint48(timestamp));
    }
}
