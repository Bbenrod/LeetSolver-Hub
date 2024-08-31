#!/bin/bash

# Ruta del directorio de ejercicios
EJERCICIOS_DIR="ejercicios"

# Función para obtener el número del siguiente ejercicio
obtener_siguiente_numero() {
  ultimo_numero=$(ls -v $EJERCICIOS_DIR | grep -E '^[0-9]+' | tail -n 1 | cut -d '_' -f 1)
  
  if [ -z "$ultimo_numero" ]; then
    echo "00"
  else
    printf "%02d" $((10#$ultimo_numero + 1))
  fi
}

# Función para crear el archivo README.md principal
crear_readme_principal() {
  local dir="$1"
  local numero_ejercicio="$2"
  local nombre_ejercicio="$3"
  local link_ejercicio="$4"

  cat <<EOF > "$dir/README.md"
## Ejercicio ${numero_ejercicio}: [${nombre_ejercicio}](${link_ejercicio})

(Descripción)

### Ejemplos

¿Problemas en solucionarlo? Revisa este video: (Vacio)

## Solución del Ejercicio

Los siguientes colaboradores han aportado la solución para este ejercicio:

- (Vacio)
EOF
}

# Función para crear el archivo README.md de JavaScript
crear_readme_javascript() {
  local dir="$1"
  local numero_ejercicio="$2"
  local nombre_ejercicio="$3"

  cat <<EOF > "$dir/javascript/README.md"
# Instrucciones para JavaScript

Para usar JavaScript en tu proyecto, instala \`dotenv\` con:

\`\`\`bash
npm install dotenv
\`\`\`

### Ejecutar Pruebas

Corre el siguiente comando para ejecutar las pruebas:

\`\`\`bash
node ejercicios/${numero_ejercicio}_${nombre_ejercicio// /_}/javascript
\`\`\`

### ¿Por qué se usa \`index.js\`?

El archivo \`index.js\` actúa como el punto de entrada principal cuando ejecutas el directorio. Permite importar y ejecutar las pruebas basadas en la variable de entorno \`USER_GITHUB\`.
EOF
}

# Función para crear el archivo README.md de Python
crear_readme_python() {
  local dir="$1"
  local numero_ejercicio="$2"
  local nombre_ejercicio="$3"

  cat <<EOF > "$dir/python/README.md"
# Instrucciones para Python

Para usar Python en tu proyecto, instala \`python-dotenv\` con:

\`\`\`bash
pip install python-dotenv
\`\`\`

### Ejecutar Pruebas

Corre el siguiente comando para ejecutar las pruebas:

\`\`\`bash
python3 ejercicios/${numero_ejercicio}_${nombre_ejercicio// /_}/python
\`\`\`

### ¿Por qué se usa \`__main__.py\`?

El archivo \`__main__.py\` actúa como el punto de entrada principal cuando ejecutas el directorio. Permite importar y ejecutar las pruebas basadas en la variable de entorno \`USER_GITHUB\`.
EOF
}

# Función para crear los archivos de código por defecto
crear_archivos_codigo() {
  local dir="$1"

  cat <<EOF > "$dir/javascript/index.js"
require('dotenv').config();

const user = process.env.USER_GITHUB;

if (!user) {
    console.error('Error: La variable de entorno USER_GITHUB no está definida en el archivo .env');
    process.exit(1);
}

const { solution } = require(\`./\${user}.js\`);

const testCases = []

testCases.forEach(({ input, expected }, index) => {
    const result = solution(input);
    const passed = result === expected;
    console.log(\`Caso de Prueba #\${index}: \${passed ? 'PASÓ' : \`FALLÓ (Entrada: \${JSON.stringify(input)}, Esperado: \${expected}, Obtenido: \${result})\`}\`);
});

if (testCases.every(({ input, expected }) => solution(input) === expected))
    console.log("Buen trabajo! Ahora prueba tu solución en Leetcode.");
EOF

  cat <<EOF > "$dir/python/__main__.py"
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
test_cases = []

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
EOF
}

# Función principal para crear un nuevo ejercicio
crear_nuevo_ejercicio() {
  local numero_ejercicio=$(obtener_siguiente_numero)

  # Solicitar el nombre del ejercicio y el link al usuario
  echo -n "Ingresa el nombre del ejercicio: "
  read nombre_ejercicio
  echo -n "Ingresa el link del ejercicio: "
  read link_ejercicio

  # Crear la carpeta del nuevo ejercicio
  local nuevo_ejercicio_dir="$EJERCICIOS_DIR/${numero_ejercicio}_${nombre_ejercicio// /_}"
  mkdir -p "$nuevo_ejercicio_dir/javascript"
  mkdir -p "$nuevo_ejercicio_dir/python"

  # Crear archivos de README
  crear_readme_principal "$nuevo_ejercicio_dir" "$numero_ejercicio" "$nombre_ejercicio" "$link_ejercicio"
  crear_readme_javascript "$nuevo_ejercicio_dir" "$numero_ejercicio" "$nombre_ejercicio"
  crear_readme_python "$nuevo_ejercicio_dir" "$numero_ejercicio" "$nombre_ejercicio"

  # Crear archivos de código por defecto
  crear_archivos_codigo "$nuevo_ejercicio_dir"

  echo "El nuevo ejercicio ha sido creado en: $nuevo_ejercicio_dir"
}

# Ejecutar la función principal
crear_nuevo_ejercicio
