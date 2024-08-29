from dotenv import load_dotenv
import os

load_dotenv()
user = os.getenv('USER_GITHUB')

if user is None or user == "":
    print('Error: La variable de entorno USER_GITHUB no está definida. Verifica el archivo .env')
    exit(1)

solution = None
try:
    module = __import__(user)
    solution = getattr(module, 'solution')
except ImportError:
    print(f'Error: No se pudo importar el archivo {user}.py o la función solution.')
    exit(1)

# Definir los casos de prueba
test_cases = [
    {
        "input": [-4, -1, 0, 3, 10],
        "expected": [0, 1, 9, 16, 100]
    },
    {
        "input": [-7, -3, 2, 3, 11],
        "expected": [4, 9, 9, 49, 121]
    },
    {
        "input": [-1, 1],
        "expected": [1, 1]
    },
    {
        "input": [0, 0, 0],
        "expected": [0, 0, 0]
    }
]


# Ejecutar los casos de prueba
for index, case in enumerate(test_cases):
    input_data = case['input']
    expected = case['expected']
    result = solution(input_data)
    passed = result == expected
    if passed:
        print(f'Caso de Prueba #{index}: PASÓ')
    else:
        print(f'Caso de Prueba #{index}: FALLÓ (Entrada: {input_data}, Esperado: {expected}, Obtenido: {result})')

# Verificar si todos los casos de prueba pasaron
if all(solution(case['input']) == case['expected'] for case in test_cases):
    print("¡Buen trabajo! Ahora prueba tu solución en Leetcode.")
