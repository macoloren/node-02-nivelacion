const fs = require('fs');
const {logica} = require('./logica')

const multiplicar = (base) => {

    const resultado = logica(base);

    console.log(resultado);
    fs.writeFile(`tablas/tabla-del-${base}`, resultado, (err) => {
        if (err) throw err;
        console.log(`el archivo tabla-del-${base} fue creado!`);
    });
}

module.exports = {multiplicar}