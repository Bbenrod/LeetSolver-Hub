require('dotenv').config();

const user = process.env.USER_GITHUB;

if (!user) {
    console.error('Error: La variable de entorno USER_GITHUB no está definida en el archivo .env');
    process.exit(1);
}

const { solution } = require(`./${user}.js`);

const testCases = [
    { input: [12, 345, 2, 6, 7896], expected: 2 },
    { input: [555, 901, 482, 1771], expected: 1 },
    { input: [8888, 999, 77777, 66, 55555, 4444], expected: 3 },
    { input: [2468, 13579, 246, 80, 97531], expected: 4 },
];


testCases.forEach(({ input, expected }, index) => {
    const result = solution(input);
    const passed = result === expected;
    console.log(`Caso de Prueba #${index}: ${passed ? 'PASÓ' : `FALLÓ (Entrada: ${JSON.stringify(input)}, Esperado: ${expected}, Obtenido: ${result})`}`);
});

if (testCases.every(({ input, expected }) => solution(input) === expected))
    console.log("Buen trabajo! Ahora prueba tu solución en Leetcode.")
