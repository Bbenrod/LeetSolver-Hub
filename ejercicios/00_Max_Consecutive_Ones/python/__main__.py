from dotenv import load_dotenv
import os

load_dotenv()
user = os.getenv('USER_GITHUB')

if user is None:
    print('Error: La variable de entorno USER_GITHUB no está definida.')
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
    {'input': [1, 1, 0, 1, 1, 1], 'expected': 3},
    {'input': [1, 0, 1, 1, 0, 1], 'expected': 2},
    {'input': [1, 1, 1, 0, 0, 1, 1], 'expected': 3},
    {'input': [1, 1, 0, 0, 0, 1, 1, 1, 1], 'expected': 4},
    {'input': [0, 0, 1, 1, 1, 1, 0, 1, 1], 'expected': 4},
    {'input': [1, 1, 1, 1, 1, 1, 1], 'expected': 7},
    {'input': [0, 0, 0, 0, 0, 0, 0], 'expected': 0},
    {'input': [1, 0, 1, 0, 1, 0, 1], 'expected': 1},
    {'input': [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0], 'expected': 5},
    {'input': [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], 'expected': 9},
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
