---
outline: deep
---

# LocalStorage

LocalStorage es una característica de la API de almacenamiento web que permite almacenar datos en el navegador del usuario de forma persistente.

Solo puede almacenar datos como cadenas de texto. Si se necesita almacenar objetos, estos deben ser convertidos a JSON (mediante JSON.stringify) antes de almacenarlos y luego reconvertidos con JSON.parse al recuperarlos.

## Guardar un dato

```js
// Guardar un valor en localStorage
localStorage.setItem('name', 'Peter');

// Verificar que el valor ha sido guardado
console.log(localStorage.getItem('name')); // 'Peter'

```

## Recuperar un dato

```js
// Guardar un valor en localStorage
const name = localStorage.getItem('name');

if (nombre) {
  console.log(`El nombre almacenado es: ${nombre}`);
} else {
  console.log('No hay ningún nombre almacenado.');
}
```

## Eliminar un valor 
```js

localStorage.removeItem('nombre');

// Verificar que el valor ha sido eliminado
console.log(localStorage.getItem('nombre')); // null
```

## Limpiar todos los valores del localStorage
```js

localStorage.clear();

// Verificar que el localStorage ha sido limpiado
console.log(localStorage.length); // 0
```

## Almacenar y recuperar objetos
```js
let user = { name: 'Peter', age: 30 };
localStorage.setItem('user', JSON.stringify(user));

// Recuperar el objeto
let userFromStorage = JSON.parse(localStorage.getItem('usuario'));

console.log(userFromStorage); // { name: 'Peter', age: 30 }
```