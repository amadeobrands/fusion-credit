const hre = require('hardhat')

async function deploy(contractName, ...args) {
  const Factory = await hre.ethers.getContractFactory(contractName)
  const instance = await Factory.deploy(...args)
  const result = await instance.deployed()
  
  console.log(contractName + ' deployed at: ' + result.address)

  return result
}

async function main() {
  const verifier = await deploy('FusionScoreV1Verifier')
  const fusionCredit = await deploy('FusionCredit', verifier.address)

  return fusionCredit
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
