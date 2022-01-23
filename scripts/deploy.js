const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with address: %s", deployer.address);
  console.log("Account Balance: %s", accountBalance.toString());

  const shillContractFactory = await hre.ethers.getContractFactory("ShillPortal");
  const shillContract = await shillContractFactory.deploy();
  await shillContract.deployed();

  console.log("shill contract address:", shillContract.address);
  console.log("Account Balance: %s", accountBalance.toString());
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
