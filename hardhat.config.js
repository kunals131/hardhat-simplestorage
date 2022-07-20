require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require('@nomiclabs/hardhat-etherscan');
require('./tasks/blockNumber');
require('solidity-coverage');
require('hardhat-gas-reporter');
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
//we require rpc url and  a private key for network
const RINKBY_RPC_URL = process.env.RINKBY_RPC_URL || "https://eth-rinkbey"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xKey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "Key"
const COINMARKETCAP_API_KEY=process.env.COINMARKETCAP_API_KEY || "Key";
module.exports = {
  solidity: "0.8.7",
  networks : {
    rinkby : {
      url : RINKBY_RPC_URL,
      accounts : [PRIVATE_KEY],
      chainId : 4,
    },
    localhost : {
      url : 'http://127.0.0.1:8545/',
      //accounts are placed by hardhat
      chainId : 31337
    }
  },
  defaultNetwork : 'hardhat',
  etherscan : {
    apiKey : ETHERSCAN_API_KEY
  },
  gasReporter : {
    enabled : true,
    outputFile : 'gas-report.txt',
    noColors : true,
    currency : 'INR',
    coinmarketcap : COINMARKETCAP_API_KEY,
    token : "MATIC" //for polygon
  }
};
 