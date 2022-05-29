require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone strike crawl oven puppy hunt kangaroo army gaze'; 
let testAccounts = [
"0x37b863146f0d9931553e91c66d98e5b79e1ee47a17f469511a44b7b9330a90c0",
"0x48d9831f23938d5249bfa8f73171e5f21575c16f7ad88de6d191d21683b812d0",
"0x823dc3aac2f74b9ccec560b1395ac8ae07940b7e0339485b53c8a49088fc0510",
"0xd868ffa4a6efab45868d27f8316a6145fd782ea0996de88210382a81646775be",
"0x38cec04924fb9e748567ba1628d4dc939dd6f97c9ab09114dbe1b3efaace5d41",
"0x8e930309acad5fb17350ad34b8ab4c78cba89dbd14d01483971213bf5fd52879",
"0xe065f136194e2995a392c1c50123e14e1a98d7e5981f6fce1f9ba75715f3755f",
"0x6d3df9352dd2755e8bd9cf3d7624d40653be8a14df6c6f3e900701de15302136",
"0x417c3292cc0afd9153cadf6cdc00f6d993a52990acb4fcb176272240e69e1a40",
"0x67c9e2573c8c0b7ffcb0614a5aba96333b2dd5f1221a389a57fd9e2e83f096d8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


