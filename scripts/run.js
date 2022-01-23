const main = async () => {
  const [owner, randomPerson, randomPerson2] = await hre.ethers.getSigners();
  const shillContractFactory = await hre.ethers.getContractFactory("ShillPortal");
  const shillContract = await shillContractFactory.deploy();
  await shillContract.deployed();

  console.log("Contract deployed to:", shillContract.address);
  console.log("Contract deployed by:", owner.address);

  await shillContract.getTotalShills();

  let txn;
  txn = await shillContract.addShill("dcts", "holotoken");
  await txn.wait();
  txn = await shillContract.connect(randomPerson).addShill("mersad", "olympus-dao");
  await txn.wait();
  txn = await shillContract.connect(randomPerson2).addShill("david", "ethereum");
  await txn.wait();
  txn = await shillContract.connect(randomPerson2).addShill("david", "bitcoin");

  await shillContract.getTotalShills();
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
