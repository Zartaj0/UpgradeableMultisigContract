
const hre = require("hardhat");

async function main() {
  
  let arrayOfOwners =["0x69A0d70271fb5C402a73125D95fadA17C55aD89A","0x1af9C19A1513B9D05a7E5CaAd9F9239EF54fE2b1","0xD6E5C56b74841d333938860F7949faa8F991d88D"];


  const Version1 = await hre.ethers.getContractFactory("MultiSigV1");
  const version1 = await upgrades.deployProxy(Version1,[arrayOfOwners,3]);

  await version1.deployed();

  console.log(
    ` deployed to ${version1.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
