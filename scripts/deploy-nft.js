const { ethers, upgrades } = require("hardhat");
const { getImplementationAddress } = require("@openzeppelin/upgrades-core");
const fs = require('fs');

// upgradeable deploy
async function main() {
  const tokenAddress = "0xF76952bF82C53Ab16a88B35ffDf310C1C9A2f7cd";
  const Market = await ethers.getContractFactory("NFTMarket");
  const market = await upgrades.deployProxy(Market, [tokenAddress]);
  await market.deployed();
  console.log("nftMarket deployed to:", market.address);

  const nftMarketImplAddress = await getImplementationAddress(
    market.provider,
    market.address
  );
    
  await hre.run("verify:verify", { address: nftMarketImplAddress });
  console.log("nftMarket verify:", nftMarketImplAddress);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await upgrades.deployProxy(NFT, [market.address]);
  await nft.deployed();
  console.log("nft deployed to:", nft.address);

  const nftImplAddress = await getImplementationAddress(
    nft.provider,
    nft.address
  );
    
  await hre.run("verify:verify", { address: nftImplAddress });
  console.log("nft verify:", nftImplAddress);

  let config = `
  export const nftmarketaddress = "${market.address}"
  export const nftaddress = "${nft.address}"
  `

  let data = JSON.stringify(config)
  fs.writeFileSync('config.js', JSON.parse(data))

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });