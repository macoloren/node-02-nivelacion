const fs = require('fs');
const {logica} = require('./logica')

const multiplicar = (base) => {

    const resultado = logica(base);

    console.log(resultado);
    fs.writeFile(`tablas/tabla-del-${base}.txt`, resultado, (err) => {
        if (err) throw err;
        console.log(`el archivo tabla-del-${base}.txt fue creado!`);
    });
}

module.exports = {multiplicar}