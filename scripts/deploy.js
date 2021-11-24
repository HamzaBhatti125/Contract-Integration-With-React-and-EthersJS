const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");
  await greeter.deployed();
  console.log("Greeter deployed to:", greeter.address);

  // We get the Token contract to deploy
  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy();
  await token.deployed();
  console.log("Token deployed to:", token.address);

  //HBtoken Deployment
  const HBToken = await hre.ethers.getContractFactory("HBToken");
  const hbtoken = await HBToken.deploy("Hamza Bhatti Token", "HBT");
  await hbtoken.deployed();
  console.log("HBToken deployed to:", hbtoken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
