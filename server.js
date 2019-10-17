let { HdTronPayments } = require('@faast/tron-payments');

let keys = HdTronPayments.generateNewKeys();
console.log("public key: "+keys.xpub);
console.log("private key: "+keys.xprv);

 let tronPayments = new HdTronPayments({ hdKey: keys.xprv }); // xpub or xprv can be used
 let depositAddress = tronPayments.getAddress(1234);
 let privateKey = tronPayments.getPrivateKey(1234);
 console.log(depositAddress);
 console.log(privateKey);

// console.log(tronPayments.isValidAddress(depositAddress));