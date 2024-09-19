require('dotenv').config();

const user = process.env.USER_GITHUB;

if (!user) {
    console.error('Error: La variable de entorno USER_GITHUB no está definida en el archivo .env');
    process.exit(1);
}

let solution;
try {
    ({ solution } = require(`./${user}.js`));
} catch (error) {
    console.error(`Error: No se pudo importar el archivo ${user}.js o la función solution.`);
    process.exit(1);
}

// Definir los casos de prueba
const testCases = [
    { input: [1, 0, 2, 3, 0, 4, 5, 0], expected: [1, 0, 0, 2, 3, 0, 0, 4] },
    { input: [1, 2, 3], expected: [1, 2, 3] },
];

// Ejecutar los casos de prueba
testCases.forEach(({ input, expected }, index) => {
    const inputCopy = [...input];  // Copiar el arreglo para evitar modificar el original
    solution(inputCopy);  // Ejecutar la solución que modifica inputCopy in-place
    const passed = JSON.stringify(inputCopy) === JSON.stringify(expected);
    console.log(`Caso de Prueba #${index + 1}: ${passed ? 'PASÓ' : `FALLÓ (Entrada: ${JSON.stringify(input)}, Esperado: ${JSON.stringify(expected)}, Obtenido: ${JSON.stringify(inputCopy)})`}`);
});

// Verificar si todos los casos de prueba pasaron
const allPassed = testCases.every(({ input, expected }) => {
    const inputCopy = [...input];  // Hacer una copia para cada caso de prueba
    solution(inputCopy);
    return JSON.stringify(inputCopy) === JSON.stringify(expected);
});

if (allPassed)
    console.log("¡Buen trabajo! Ahora prueba tu solución en Leetcode.");