#!/bin/bash
NETWORK=optimism-kovan

if [ ! -z $1 ]; then
    NETWORK=$1
fi

npx hardhat run scripts/deploy_contract.js --network $NETWORK
