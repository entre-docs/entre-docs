---
outline: deep
---

# Métodos de Array en Javascript

## Concat

Une dos o más arrays. Este método devuelve un nuevo array.

```js
let array1 = [1, 2];
let array2 = [3, 4];
let arrayConcatenado = array1.concat(array2);
console.log(arrayConcatenado); // [1, 2, 3, 4]
```

## Filter

Recorre un array y retorna un nuevo array con aquellos elementos **que cumplan una determinada condición**.

```js
const array = [1,2,3,4,5]
const resultArray = array.filter(element => element % 2 === 0)
console.log(resultArray); // [2,4]
```

## Find

Recorre el array y retorna sólo el primer elemento que cumpla con cierta condición.

```js
let numeros = [1, 2, 3, 4, 5];
let numeroEncontrado = numeros.find(element => element > 3);
console.log(numeroEncontrado); // 4
```

## For Each

Ejecuta una función una vez por cada elemento del array.

```js
const fruits = ['banana','apple', 'orange', 'pear'];
const newArray = fruits.forEach(( element, i ) => {
    console.log(`${ element } se encuentra en el índice ${ i }`)
});
// banana se encuentra en el índice 0
// apple se encuentra en el índice 1
// orange se encuentra en el índice 2
// pear se encuentra en el índice 3
```

## Includes

Determina si un array incluye un determinado elemento, devolviendo 'true' o 'false' según corresponda.

```js
let array = [1, 2, 3, 4, 5];
let incluyeTres = array.includes(3);
console.log(incluyeTres); // true


let array = [1, 2, 3, 4, 5];
let incluyeSeis = array.includes(6);
console.log(incluyeSeis); // false
```



## Map

Permite recorrer un array y modificar los elementos presentes en él, retornando un **nuevo array** con la misma longitud que el original.

* Ejemplo 1:

```js
const array = [1,2,3,4,5,6,7]
const resultArray = array.map(element => element + 10)
console.log(resultArray) // [11,12,13,14,15,16,17]
```

* Ejemplo 2:

```js
const array: number[] = [1,5,6,3,2]

const nuevoArray = array.map(valor =>{
    return valor + 1
})

console.log(nuevoArray); // [2,6,7,4,3]
```

## Pop

Elimina el último elemento de un array y lo devuelve.

```js
const fruits = ['apple', 'pear', 'orange'];
fruits.pop()

console.log(fruits) // ['apple', 'pear']
```


## Push

Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

```js
let array = [1, 2, 3];

array.push(4);
console.log(array); // [1, 2, 3, 4]
```


## Shift

Elimina el primer elemento de un array y lo devuelve.

```js
let array = [1, 2, 3];
let removedElement = array.shift();

console.log(removedElement); // 1
console.log(array); // [2, 3]
```

## Slice

Extrae una porción de elementos o caracteres de un array y los devuelve.

:::tip
```js
array.slice(inicio, fin)
```

- inicio: Es el índice donde comienza la extracción (incluido).
- fin (opcional): Es el índice donde termina la extracción (no incluido). Si no se especifica, se extraen todos los elementos desde inicio hasta el final del array.
:::

```js
let array = [A, B, C, D, E];

let subArray = array.slice(1, 4);
console.log(subArray); // Output: [B, C, D]
```




## Some

Recorre el array y retorna un booleano (true/false) si como mínimo uno de los elementos en el array cumple la condición proporcionada por una función.

```js
let array = [1, 2, 3, 4, 5];
let tienePares = array.some(element => element % 2 === 0);
console.log(tienePares); // Output: true


let array = [1, 3, 5, 7, 9];
let tienePares = array.some(element => element % 2 === 0);
console.log(tienePares); // Output: false
```


## Sort

Ordena los elementos de un array y retorna un arreglo ordenado de forma ascendente, por defecto (de la A a la Z).

::: tip Importante
En Unicode, los números vienen antes que las letras mayúsculas
y estas vienen antes que las letras minúsculas.
:::

```js
const frutas = ["guindas", "manzanas", "bananas"];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']


const puntos = [21, 10, 2, 1];
puntos.sort(); // [1, 10, 2, 21]
/* Tenga en cuenta que 10 viene antes que 2
porque '10' viene antes que '2' según la posición del valor Unicode.*/


const cosas = ["word", "Word", "1 Word", "2 Words"];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
```


## Splice

Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

* Ejemplo 1:

```js
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Obtener los primeros 5 elementos
let primerosCinco = array.splice(0, 5);

console.log(primerosCinco); // [1, 2, 3, 4, 5]
console.log(array); // [6, 7, 8, 9, 10]
```

* Ejemplo 2:

```js
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Borrar el segundo y tercer elemento
array.splice(1, 2);

console.log(array); // [1, 4, 5, 6, 7, 8, 9, 10]
```

## Unshift

Añade uno o más elementos al principio de un array y devuelve la nueva longitud del array.

```js
let array = [2, 3, 4];
let nuevaLongitud = array.unshift(1);

console.log(array); // [1, 2, 3, 4]
console.log(nuevaLongitud); // 4

```