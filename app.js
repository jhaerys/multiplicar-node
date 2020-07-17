const argv = require("./config/yargs").argv;
const colors = require("colors/safe");

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite)
            .then((archivo) => console.log(`Lista creada: `, colors.red(archivo)))
            .catch((e) => console.log(e));
        break;

    case "crear":
        crearArchivo(argv.base)
            .then((archivo) => console.log(`Archivo creado: `, colors.red(archivo)))
            .catch((e) => console.log(e));
        break;

    default:
        console.log("comando no reconocido");
        break;
}