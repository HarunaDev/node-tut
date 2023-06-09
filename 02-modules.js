// CommonJS, every file is module (by default)

// Modules - Encapsulated Code (only share minimum)
const names = require('./03-names')
const sayHello = require('./04-utils')
console.log(names, sayHello)

sayHello(names.john);
sayHello(names.mary);
sayHello("Alvin");
