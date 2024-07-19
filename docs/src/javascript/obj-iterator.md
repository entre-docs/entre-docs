---
outline: deep
---

# Iteración de objetos

## for...in

La iteración de objetos en JavaScript se refiere al proceso de recorrer las propiedades de un objeto para acceder a sus valores.

::: tip hasOwnProperty
Para asegurarse de que solo se procesen las propiedades que pertenecen directamente al objeto, se usa hasOwnProperty.
:::

```js
const person = {
  name: 'Peter',
  age: 30,
  city: 'New York'
};

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}
```

## Object.keys

::: tip Object.keys
El método Object.keys devuelve un array con las claves del objeto, que luego se pueden iterar usando forEach o cualquier otro método de iteración de arrays.
:::

```js
const person = {
  name: 'Peter',
  age: 30,
  city: 'New York'
};

Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});
```

## Object.values
::: tip Object.values
El método Object.values en JavaScript se utiliza para obtener un array con los valores de las propiedades enumerables de un objeto. Este método devuelve solo los valores de las propiedades propias del objeto, no los valores de las propiedades heredadas a través de la cadena de prototipos.
:::
```js
const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020
};

const carValues = Object.values(car);
console.log(carValues); 
// Output: ["Toyota", "Corolla", 2020]

```