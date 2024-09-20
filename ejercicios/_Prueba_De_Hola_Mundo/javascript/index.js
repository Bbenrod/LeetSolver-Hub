require('dotenv').config();

const user = process.env.USER_GITHUB;

if (!user) {
    console.error('Error: La variable de entorno USER_GITHUB no está definida en el archivo .env');
    process.exit(1);
}

try {
    require(`./${user}.js`);
    console.log("¡Buen trabajo! Has creado y ejecutado correctamente tu archivo de 'Hola Mundo'.");
} catch (error) {
    console.error(`Error: No se pudo importar el archivo ${user}.js. Asegúrate de que el archivo exista y esté correctamente nombrado.`);
    console.log(`Por favor, revisa las instrucciones en el archivo _Prueba_De_Hola_Mundo/javascript/README.md para resolver el problema.`);
    process.exit(1);
}
