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

test_cases = [
    {"input": [1, 0, 2, 3, 0, 4, 5, 0], "expected": [1, 0, 0, 2, 3, 0, 0, 4]},
    {"input": [1, 2, 3], "expected": [1, 2, 3]},
]

# Ejecutar los casos de prueba
for index, case in enumerate(test_cases):
    input_data = case['input']
    expected = case['expected']
    
    # Copia del arreglo de entrada, para evitar modificar el caso de prueba original
    input_copy = input_data.copy()
    
    # Ejecutar la solución y validar si pasó
    solution(input_copy)  # Modifica input_copy in-place
    passed = input_copy == expected
    
    if passed:
        print(f'Caso de Prueba #{index + 1}: PASÓ')
    else:
        print(f'Caso de Prueba #{index + 1}: FALLÓ (Entrada: {input_data}, Esperado: {expected}, Obtenido: {input_copy})')

# Verificar si todos los casos de prueba pasaron
if all(solution(case['input'].copy()) == case['expected'] for case in test_cases):
    print("¡Buen trabajo! Ahora prueba tu solución en Leetcode.")
