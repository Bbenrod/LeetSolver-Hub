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

const testCases = [
    {
        input: [-4, -1, 0, 3, 10],
        expected: [0, 1, 9, 16, 100]
    },
    {
        input: [-7, -3, 2, 3, 11],
        expected: [4, 9, 9, 49, 121]
    },
    {
        input: [-1, 1],
        expected: [1, 1]
    },
    {
        input: [0, 0, 0],
        expected: [0, 0, 0]
    },
    {
        input: [-1],
        expected: [1]
    },
];


testCases.forEach(({ input, expected }, index) => {
    const result = solution(input);
    const passed = result.length === expected.length && result.every((value, index) => value === expected[index]);
    console.log(`Caso de Prueba #${index}: ${passed ? 'PASÓ' : `FALLÓ (Entrada: ${JSON.stringify(input)}, Esperado: ${JSON.stringify(expected)}, Obtenido: ${JSON.stringify(result)})`}`);
});

if (testCases.every(({ input, expected }) => solution(input) === expected))
    console.log("Buen trabajo! Ahora prueba tu solución en Leetcode.");
