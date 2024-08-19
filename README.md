# LeetSolver-Hub

**Descripción**

LeetSolver-Hub es un repositorio colaborativo para resolver desafíos de LeetCode semanalmente. Cada participante sube su solución en su lenguaje preferido. Las soluciones se prueban automáticamente, ofreciendo una forma divertida y dinámica de mejorar habilidades de programación.

## Ejercicios

| #  | Ejercicio   |
|----|-------------|
| 00 | [Max Consecutive Ones](ejercicios/00_Max_Consecutive_Ones/README.md) |
| 01 | ... |
| 02 | ... |
| ...| ... |

## Guía Rápida

1. **Haz un Fork del Repositorio:**
   - Haz clic en **"Fork"** en la parte superior derecha de la página del repositorio.

2. **Clona tu Fork:**

3. **Crea un Archivo `.env`:**
   - En la raíz del proyecto, crea un archivo `.env` con la siguiente configuración:
     ```bash
     USER_GITHUB=your_username
     ```

4. (Opcional) **Crea una Rama Nueva:**
   - Ejecuta:
     ```bash
     git checkout -b <usuario>-<ejercicio>-<lenguaje>
     ```

5. **Agrega tu Solución:**
   - Añade tu solución en el archivo adecuado en `ejercicios/<lenguaje>`.

6. **Commit y Push:**
   - Realiza un commit y empuja los cambios:
     ```bash
     git add .
     git commit -m "<usuario>: #<número> <lenguaje>"
     git push origin <usuario>-<ejercicio>-<lenguaje>
     ```

7. **Crea un Pull Request:**
   - Ve a tu repositorio forked y crea un pull request para que revisemos tu solución.

## Preguntas Frecuentes

- **¿Cómo actualizo mi fork con los cambios del repositorio original?**

  1. **Agrega el remote del repositorio original**:
  
     ```bash
     git remote add upstream https://github.com/Imista/LeetSolver-Hub.git
     ```

  2. **Trae y fusiona los cambios del repositorio original**:
  
     ```bash
     git pull upstream main
     ```

- **¿Dónde encuentro el problema?**  
  Dentro de `ejercicios/<número>` encontrarás un archivo `README.md` con la descripción del problema.

- **¿Cómo corro las pruebas?**  
  Dentro de `ejercicios/<número>/<lenguaje>` encontrarás un archivo `README.md` con las instrucciones para ejecutar las pruebas.

- **¿Cómo reporto un problema o bug?**  
  Puedes abrir un issue en el repositorio principal para que lo revisemos.

- **¿Puedo enviar soluciones en múltiples lenguajes?**  
  Sí, puedes enviar tus soluciones en cualquier lenguaje soportado por el proyecto.


¡Gracias por contribuir!

