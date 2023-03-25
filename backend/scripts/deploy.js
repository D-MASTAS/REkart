// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const ethers = hre.ethers;

const { items } = require("../utils/item.json")

function tokens(n) {
  return ethers.utils.parseEther(n.toString());
}


async function main() {
  const [deployer] = await ethers.getSigners();

  const Rekart = await hre.ethers.getContractFactory("Rekart");
  const rekart = await Rekart.deploy();
  await rekart.deployed();
  
  for (let i = 0; i < items.length; i++) {
    const transcation = await rekart.connect(deployer).list(
      items[i].id,
      items[i].name,
      items[i].category,
      items[i].image,
      items[i].carbonfootprint,
      tokens(items[i].price),
      items[i].stock,
    )
     await transcation.wait();
  }
  console.log("Rekart deployed to:", rekart.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
