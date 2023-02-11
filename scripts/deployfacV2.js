
const hre = require("hardhat");

async function main() {
  


  const Version2 = await hre.ethers.getContractFactory("ZarFactoryV2");
  const version2 = await upgrades.upgradeProxy("0x4d941fc75f55eeFF203039EEf6280940aBEa153A",Version2);


  await version2.deployed();

  console.log(
    ` deployed to ${version2.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
