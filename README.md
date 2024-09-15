# LeetSolver-Hub

**Objetivo**

El objetivo de LeetSolver-Hub es que los usuarios practiquen **algoritmia** para prepararse para **pruebas técnicas**, se familiaricen con el **entorno de trabajo en GitHub** y participen activamente en un **repositorio colaborativo**.

**Descripción**

LeetSolver-Hub es un **repositorio colaborativo** para resolver desafíos de LeetCode semanalmente. Cada participante sube su **solución** en su **lenguaje preferido**. Las **soluciones** se prueban automáticamente, ofreciendo una forma divertida y dinámica de mejorar **habilidades de programación**.

## Ejercicios

| #  | Ejercicio   |
|----|-------------|
| 00 | [Max Consecutive Ones](ejercicios/00_Max_Consecutive_Ones/README.md) |
| 01 | [Find Numbers with Even Number of Digits](ejercicios/01_Find_Numbers_with_Even_Number_of_Digits/README.md) |
| 02 | [Squares of a Sorted Array](/ejercicios/02_Squares_of_a_Sorted_Array/README.md) |
| ...| ... |

## Guía Rápida

1. **Haz un Fork del Repositorio:**
   - Haz clic en **"Fork"** en la parte superior derecha de la página del repositorio.

2. **Clona tu Fork**

3. **Crea un Archivo `.env`:**
   - En la raíz del proyecto, crea un archivo `.env` con la siguiente configuración:
     ```bash
     USER_GITHUB=your_username
     ```

4. **Crea una Rama Nueva:**
   - Ejecuta:
     ```bash
     git checkout -b <usuario>-<ejercicio>-<lenguaje>
     ```

5. **Agrega tu Solución:**
   - Añade tu solución en el archivo adecuado en `ejercicios/<número>/<lenguaje>`.
   - Añade tu nombre en el archivo adecuado en `ejercicios/<número>/README.md`.

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

## Sobre mí

Desarrollado por [Imista](https://github.com/Imista).  
Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarme:

- **Correo Electrónico:** [benjamintec3455@gmail.com](mailto:benjamintec3455@gmail.com)
- **LinkedIn:** [linkedin.com/in/benji-rodriguez](https://www.linkedin.com/in/benji-rodriguez/)

¡Gracias por contribuir y ser parte de esta comunidad!


