// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract FusionCredit {
    address public verifier;

    constructor(address _verifier) {
        verifier = _verifier;
    }

    function getScore(address _addr) public view returns(uint score, uint version, uint timestamp) {
        return (500, 1, 1656125345);
    }

    function setScore(uint score, uint version, uint timestamp, uint[8] memory proof) public {
    }
}
