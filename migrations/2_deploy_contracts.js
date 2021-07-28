var MyToken = artifacts.require("MyToken");
var MyTokenSale = artifacts.require("MyTokenSale");
var KycContract = artifacts.require("KycContract");
require("dotenv").config({path: "../.env"});

module.exports = async function(deployer) {
    let addr = await web3.eth.getAccounts();
    
    await deployer.deploy(MyToken, process.env.INITIAL_TOKENS, {gas: 3012388, overwrite: false});
    await deployer.deploy(KycContract, {gas: 2012388, overwrite: false});
    await deployer.deploy(MyTokenSale, 1, addr[0], MyToken.address, KycContract.address, {gas: 6012388, overwrite: false});
    let instance = await MyToken.deployed();
    await instance.transfer(MyTokenSale.address, process.env.INITIAL_TOKENS);
   
    console.log("*********************************** SM Account Owner address: " +addr[0]);
    console.log("*********************************** ARL Token address:        " +MyToken.address);
    console.log("*********************************** Crowdsale address:        " +MyTokenSale.address);
}