require('dotenv').config();

const user = process.env.USER_GITHUB;

if (!user) {
    console.error('Error: La variable de entorno USER_GITHUB no está definida en el archivo .env');
    process.exit(1);
}

const { solution } = require(`./${user}.js`);

const testCases = [
    { input: [1, 1, 0, 1, 1, 1], expected: 3 },
    { input: [1, 0, 1, 1, 0, 1], expected: 2 },
    { input: [1, 1, 1, 0, 0, 1, 1], expected: 3 },
    { input: [1, 1, 0, 0, 0, 1, 1, 1, 1], expected: 4 },
    { input: [0, 0, 1, 1, 1, 1, 0, 1, 1], expected: 4 },
    { input: [1, 1, 1, 1, 1, 1, 1], expected: 7 },
    { input: [0, 0, 0, 0, 0, 0, 0], expected: 0 },
    { input: [1, 0, 1, 0, 1, 0, 1], expected: 1 },
    { input: [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0], expected: 5 },
    { input: [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], expected: 9 },
];

testCases.forEach(({ input, expected }, index) => {
    const result = solution(input);
    const passed = result === expected;
    console.log(`Caso de Prueba #${index}: ${passed ? 'PASÓ' : `FALLÓ (Entrada: ${JSON.stringify(input)}, Esperado: ${expected}, Obtenido: ${result})`}`);
});

if (testCases.every(({ input, expected }) => solution(input) === expected))
    console.log("Buen trabajo! Ahora prueba tu solución en Leetcode.")
