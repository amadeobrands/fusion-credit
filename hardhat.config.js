require("@nomiclabs/hardhat-waffle")
require("dotenv").config()

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    "harmony-testnet": {
      url: `https://api.s0.b.hmny.io`,
      accounts: [process.env.DEPLOYER_ADDRESS]
    },
    "harmony-mainnet": {
      url: `https://api.harmony.one`,
      accounts: [process.env.DEPLOYER_ADDRESS]
    },
    "optimism-kovan": {
      url: "https://kovan.optimism.io",
      accounts: [process.env.DEPLOYER_ADDRESS],
    },
    "optimism-mainnet": {
      url: "https://mainnet.optimism.io",
      accounts: [process.env.DEPLOYER_ADDRESS],
    },
    "polygon-mumbai": {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.DEPLOYER_ADDRESS]
    },
    "polygon-mainnet": {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [process.env.DEPLOYER_ADDRESS]
    },       
  }
};
