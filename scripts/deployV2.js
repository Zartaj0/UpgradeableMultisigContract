
const hre = require("hardhat");

async function main() {
  
  let arrayOfOwners =["0x69A0d70271fb5C402a73125D95fadA17C55aD89A","0x1af9C19A1513B9D05a7E5CaAd9F9239EF54fE2b1","0xD6E5C56b74841d333938860F7949faa8F991d88D"];


  const Version2 = await hre.ethers.getContractFactory("MultiSigV2");
  const version2 = await upgrades.upgradeProxy("0xbAc792D56dC4213356CCC8deb7d8bF07Bc873A92",Version2);

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
