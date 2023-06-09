const names = require('./03-names')
const sayHello = require('./04-utils')
const data = require('./05-alt-flavour')
require('./06-mind-grenade')
console.log(names, sayHello, data)

sayHello(names.john);
sayHello(names.mary);
sayHello("Alvin");