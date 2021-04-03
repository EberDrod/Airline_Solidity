module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: "*",
      gas: 5000000 // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "0.4.24" //(Default: Truffle's installed    solc)
    }
   }
};