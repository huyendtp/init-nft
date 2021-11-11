const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const contract = await hre.ethers.getContractFactory("NFTToken");
  const NFTToken = await contract.deploy("nfttoken", "nft");
  await NFTToken.deployed();
  console.log("token deployed to:", NFTToken.address);

  let config = `export const NFTToken = "${NFTToken.address}"`

  let data = JSON.stringify(config)
  fs.writeFileSync('config_erc20.js', JSON.parse(data))
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });