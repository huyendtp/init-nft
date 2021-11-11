# NFT DEMO WITH RINKEBY
## Installation
1. Install Node JS and NPM: [here](https://nodejs.org/en/download)
2. Install Harthat & dependencies
    - `npm install --save-dev hardhat @nomiclabs/hardhat-waffle 'ethereum-waffle@^3.0.0' @nomiclabs/hardhat-ethers 'ethers@^5.0.0' @nomiclabs/hardhat-etherscan @openzeppelin/hardhat-upgrades chai dotenv @openzeppelin/contracts-upgradeable fs`
3. Install metamask extension
4. Create account with `Mạng thử nghiệm Rinkeby` on metamask
5. Get rinkeby network info to config in hardhat.config.js with privateKey get from account from step 4
    ```
    networks: {
        rinkeby: {
        chainId: 4,
        url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        accounts: [privateKey]
        }
    },
    ```
6. Get eth to test from [faucet.rinkeby](https://faucet.rinkeby.io)
7. Get APIKey to config ethescan in hardhat.config.js follow doc at [here](https://docs.etherscan.io/getting-started/viewing-api-usage-statistics)
## Implement
1. Define contracts in folder `contracts`
    - Token
    - Market
    - NFT
2. Define scripts to deploy in folder `scripts`
3. Compile contracts: `npx hardhat compile`
4. Starts a JSON-RPC server on top of Hardhat Network: `npx hardhat node`
5. Runs a user-defined script after compiling the project
    - Token: `npx hardhat run --network localhost scripts/deploy-token.js`
    - NFT & Market: `npx hardhat run --network rinkeby scripts/deploy-nft.js`

## Result
1. Token: [here](https://rinkeby.etherscan.io/address/0xF76952bF82C53Ab16a88B35ffDf310C1C9A2f7cd)
2. Market: [here](https://rinkeby.etherscan.io/address/0xb793e9cd66FBfb2C5eB3A853D757F9705E0427E1)
3. NFT: [here](https://rinkeby.etherscan.io/address/0x57886c2b7Cd6A4f95dbE7d79eCDbB23c15774f6C)


