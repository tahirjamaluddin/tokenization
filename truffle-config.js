const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config({path: "./.env"});

const AccountIndex = 0;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      port: 7545,
      host: "127.0.0.1",
      network_id: 5777
    },
    ganache_local: {
      provider: function() {
        return new HDWalletProvider(process.env.PRIVATE_KEY_METAMASK, "http://127.0.0.1:7545", AccountIndex)
      },
      network_id: 5777
    },
    goerli_infura: {
      provider: function() {
        return new HDWalletProvider(process.env.PRIVATE_KEY_METAMASK, "https://goerli.infura.io/v3/9a83dd23fd3649a8a62996bce2f49b1c")
      },
      network_id: 5
    },
    mainnet_infura: {
      provider: function() {
        return new HDWalletProvider(process.env.PRIVATE_KEY_METAMASK, "https://mainnet.infura.io/v3/9a83dd23fd3649a8a62996bce2f49b1c")
      },
      network_id: 1
    },
    ropsten_infura: {
      provider: function() {
        return new HDWalletProvider(process.env.PRIVATE_KEY_METAMASK, "https://ropsten.infura.io/v3/9a83dd23fd3649a8a62996bce2f49b1c")
      },
      network_id: 3
    }
  },
  compilers: {
    solc: {
      version: "0.8.4"
    }
  }
};
