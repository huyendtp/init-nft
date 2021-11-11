require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const privateKey = "c0addbc79767e6beffd801c00de8b343841e1951433c0db2721857d779a02ce5"
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      chainId: 1337
    },
    // Register and create project on infura.io
    // When run to testnet or main net, please go to Metamask: Settings > Networks > Rinkeby Network to get URL
    rinkeby: {
      chainId: 4,
      url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "UAU5AXAZIX66YSHSNDXJAJJH6J167IXQ8Q"
  }
};
