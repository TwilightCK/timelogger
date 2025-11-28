import { ethers } from "hardhat";

async function main() {
  const TimeLogger = await ethers.getContractFactory("TimeLogger");
  const tl = await TimeLogger.deploy();
  console.log("Deployed at:", await tl.getAddress());
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
