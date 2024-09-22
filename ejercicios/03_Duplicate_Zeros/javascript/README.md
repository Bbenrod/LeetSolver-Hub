# Instrucciones para JavaScript

Para usar JavaScript en tu proyecto, instala `dotenv` con:

```bash
npm install dotenv
```

### Formato de la Solución

Tu solución en JavaScript debe seguir este formato:

```javascript
function solution(nums) {
    ...
}

module.exports = { solution };
```

Asegúrate de usar el nombre `solution` para tu función y exportarla correctamente para que las pruebas automáticas puedan ejecutarse.

### Ejecutar Pruebas

Corre el siguiente comando para ejecutar las pruebas:

```bash
node ejercicios/03_Duplicate_Zeros/javascript
```

### ¿Por qué se usa `index.js`?

El archivo `index.js` actúa como el punto de entrada principal cuando ejecutas el directorio. Permite importar y ejecutar las pruebas basadas en la variable de entorno `USER_GITHUB`.