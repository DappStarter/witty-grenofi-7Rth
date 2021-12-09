require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stool rice noble social grid end army general'; 
let testAccounts = [
"0xd04ed61d7397b8d69192a607aab447406552926a8f455a791457b9f58b995d86",
"0xc23170c61da1ed55b68ea090d1d4bd3b2db9dc03e94ac4301e712daac40cdd10",
"0x4600d4158358dc4c6468cf22bcd4c5193b9cc451bd40d899747b51d1fd37b47f",
"0x39090c64d4a7bb38b81190b9c1afdd1b07dbcf55095510e44fda38c64dd381f6",
"0x8998e33193d5b91387e8cb01b0dab2ddb9c5e8b0bc303a4e2ec830850f220600",
"0x4b557e96f4b2fa5d31f340718755625aaa716c0c5daf654cd2fdd0e89b212630",
"0xb0a5788e52bcdf2170a85b53a468895ca8171715703d39aa4b93e179f89a944f",
"0x71e6d6eb8c4205a078ed0feda4686ca5516f11e8806c2fbf190d01b9fba1eee3",
"0x5f348543745361371213f058815c2cf1a8b033612951c74690072ff59a2cb808",
"0x72ca25b5b5b5983d614b2f3bdee3ce1311aa113c224e62bd61466714172a446e"
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


