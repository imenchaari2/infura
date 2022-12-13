const ethers = require('ethers');
let mnemonic = "refuse screen tip taste economy aspect stereo output carpet october attack alone sustain salt catch";
let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
console.log(mnemonicWallet.privateKey);