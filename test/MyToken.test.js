const Token = artifacts.require("MyToken");

const chai = require("./setupchai.js");
const BN = web3.utils.BN;
const expect = chai.expect;

contract("Test Token", async accounts  => {

    const [deployerAccount, recipient, antherAccount] = accounts;

    beforeEach(async() => {
        this.myToken = await Token.new(process.env.INITIAL_TOKENS);
    })

    it("All tokens should be in my account", async() => {
        let instance = this.myToken;
        let totalSupply = await instance.totalSupply();
        expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(totalSupply);
    })

    it("It should not be possible to send more tokens than total", async() => {
        let instance = this.myToken;
        let balanceOfDeployer = await instance.balanceOf(deployerAccount);
        expect(instance.transfer(recipient, new BN(balanceOfDeployer+10))).to.eventually.be.rejected;
    })

    it("It should be possible to send tokens between accounts", async() => {
        const sendTokens = 1;
        let instance = this.myToken;
        let totalSupply = await instance.totalSupply();
        expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(totalSupply);
        expect(instance.transfer(recipient, sendTokens)).to.eventually.be.fulfilled;
        expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(totalSupply.sub(new BN(sendTokens)));
        expect(instance.balanceOf(recipient)).to.eventually.be.a.bignumber.equal(new BN(sendTokens));
    })

    

});