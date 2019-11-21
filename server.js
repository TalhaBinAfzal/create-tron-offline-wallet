var tron = require('@faast/tron-payments');

var keys = tron.HdTronPayments.generateNewKeys();
var tronPayments = new tron.HdTronPayments({ hdKey: keys.xprv });
tronPayments.getPayport(0).then(adr => {
    var address = adr.address;
    tronPayments.getPrivateKey(0).then(wif => {
        console.log(adr.address)
    })
});
