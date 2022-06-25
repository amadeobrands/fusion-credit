#!/bin/bash
CIRCUIT=FusionScoreV1
SRC_DIR=circuits
OUT_DIR=circuits/artifacts
CONTRACT_DIR=contracts
POWERS_OF_TAU=13

if [ ! -z $1 ]; then
    CIRCUIT=$1
fi
if [ ! -f $SRC_DIR/$CIRCUIT.circom ]; then
    tput setaf 1 #Set red color
    echo "Input file $SRC_DIR/$CIRCUIT.circom not found!"
    exit
fi

mkdir -p $OUT_DIR
if [ ! -f $OUT_DIR/ptau$POWERS_OF_TAU.ptau ]; then
    echo "Downloading powers of tau file"
    curl -L https://hermez.s3-eu-west-1.amazonaws.com/powersOfTau28_hez_final_$POWERS_OF_TAU.ptau -o $OUT_DIR/ptau$POWERS_OF_TAU.ptau
fi

circom --r1cs --wasm --sym -o $OUT_DIR $SRC_DIR/$CIRCUIT.circom
snarkjs groth16 setup $OUT_DIR/$CIRCUIT.r1cs $OUT_DIR/ptau$POWERS_OF_TAU.ptau $OUT_DIR/${CIRCUIT}_0000.zkey
snarkjs zkey contribute $OUT_DIR/${CIRCUIT}_0000.zkey $OUT_DIR/${CIRCUIT}_final.zkey -v -e="FusionScoreContribution"
snarkjs zkey export verificationkey $OUT_DIR/${CIRCUIT}_final.zkey $OUT_DIR/${CIRCUIT}_key.json
snarkjs zkey export solidityverifier $OUT_DIR/${CIRCUIT}_final.zkey $CONTRACT_DIR/${CIRCUIT}Verifier.sol
sed -i "" "s/contract Verifier/contract ${CIRCUIT}Verifier/g" $CONTRACT_DIR/${CIRCUIT}Verifier.sol
sed -i "" "s/solidity ^0.6.11/solidity ^0.8.0/g" $CONTRACT_DIR/${CIRCUIT}Verifier.sol

echo -e "\nCircuit Info:"
snarkjs info $OUT_DIR/$CIRCUIT.r1cs
