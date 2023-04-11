const argv = require('yargs').argv;
const {multiplicar} = require('./multiplicador/index');

console.log(argv);


const base = 4
multiplicar(base);
