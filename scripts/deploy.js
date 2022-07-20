//imports
const {ethers, run, network} = require('hardhat');

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
  
  console.log('Deploying contract...');
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  //What's private key and rpc?
  console.log(`✨Deployed contract to ${simpleStorage.address}`);

  //what happens when we deploy to a hardhat do we require to verify?
  //we dont want to call verify on testnet
  if (network.config.chainId===4 && process.env.ETHERSCAN_API_KEY) {
    await simpleStorage.deployTransaction.wait(6);
    await verify(simpleStorage.address, []);
    console.log('VERIFIED...');
  }


  //Working with contract after deployment;
  const currentValue = await simpleStorage.retrieve();
  console.log(`✅ Current value is ${currentValue}`);
  const transactionResponse = await simpleStorage.store(7);
  await transactionResponse.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log(`✅ Updated value is ${updatedValue}`);

}

async function verify(contractAddress, args) {
  console.log('VERIFYING CONTRACT...');
  try {
  await run("verify:verify", {
    address : contractAddress,
    constructorArguments : args,
  });
  }catch(err) {
    if (err.message.toLowerCase() .includes("already verified")) {console.log("💀 Already verified")} else console.log(err);
  }  
}



main().then(()=>process.exit(0))
.catch((error)=>{
  console.log(error);
  process.exit(1);
})