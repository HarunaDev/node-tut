// CommonJS, every file is module (by default)

// Modules - Encapsulated Code (only share minimum)
const names = require('./03-names')
const sayHello = require('./04-utils')
const data = require('./05-alt-flavour')

console.log(names, sayHello, data)

sayHello(names.john);
sayHello(names.mary);
sayHello("Alvin");
