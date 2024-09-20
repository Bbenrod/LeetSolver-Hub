from dotenv import load_dotenv
import os

load_dotenv()
user = os.getenv('USER_GITHUB')

if user is None or user == "":
    print('Error: La variable de entorno USER_GITHUB no está definida. Verifica el archivo .env')
    exit(1)

try:
    module = __import__(user)
    solution = getattr(module, 'solution')
    print("¡Buen trabajo! Has creado y ejecutado correctamente tu archivo de 'Hola Mundo'.")
except ImportError:
    print(f'Error: No se pudo importar el archivo {user}.py o la función solution.')
    print('Por favor, revisa las instrucciones en el archivo _Prueba_De_Hola_Mundo/python/README.md para resolver el problema.')
    exit(1)
