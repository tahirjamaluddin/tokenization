/**const TokenSale = artifacts.require("MyTokenSale");
const Token = artifacts.require("MyToken");

const chai = require("./setupchai.js");
const BN = web3.utils.BN;
const expect = chai.expect;

contract("Test Tokensale", async accounts  => {

    const [deployerAccount, recipient, antherAccount] = accounts;

    it("It should not have any tokens in my deployerAccountss", async() => {
        let instance = Token.deployed;
        return expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(new BN(0));
    })

});*/