//require
const fs = require("fs");
const colors = require("colors");

let listarTabla = (base, limite) => {
    console.log("================".green);
    console.log(`== tabla de ${base} ==`.green);
    console.log("================".green);

    return new Promise((resolve, reject) => {
        if (!Number(base) && !Number(limite)) {
            reject(`uno de los valores ingresados no es numerico`);
            return;
        }

        let data = "";

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
};

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor introducido: ${base}, no es un numero`);
            return;
        }

        let data = "";

        for (let i = 0; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla,
};