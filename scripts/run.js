const main = async () => {
  const shillContractFactory = await hre.ethers.getContractFactory("ShillPortal");
  const shillContract = await shillContractFactory.deploy();
  await shillContract.deployed();
  console.log("Contract deployed to:", shillContract.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();
