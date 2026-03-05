---
outline: deep
---

# Métodos de Arrays

TypeScript hereda todos los métodos de arrays de JavaScript y les agrega tipado estático, lo que permite detectar errores en tiempo de compilación.

## Array de objetos

Un array de objetos es una colección de elementos donde cada uno tiene la misma estructura. En TypeScript se define con una interfaz o type:

```ts
interface Producto {
    nombre: string;
    precio: number;
    cantidad: number;
}

const productos: Producto[] = [
    { nombre: 'Teclado', precio: 50000, cantidad: 3 },
    { nombre: 'Mouse',   precio: 20000, cantidad: 5 },
    { nombre: 'Monitor', precio: 150000, cantidad: 1 },
];
```

---

## reduce()

`reduce` recorre el array y va **acumulando** un resultado. Es ideal para sumar, contar o transformar todos los elementos en un solo valor.


```ts
array.reduce((acumulador, elemento) => nuevoAcumulador, valorInicial);
```

| Parámetro | Descripción |
|-----------|-------------|
| `acumulador` | El valor que se va construyendo en cada iteración |
| `elemento` | El objeto actual del array en esa iteración |
| `nuevoAcumulador` | Lo que se devuelve y se convierte en el próximo `acumulador` |
| `valorInicial` | El valor con el que empieza el `acumulador` (generalmente `0`) |

### Sumar un campo numérico

```ts
const totalPrecio = productos.reduce((acumulador, producto) => {
    return acumulador + producto.precio;
}, 0);

console.log(totalPrecio); // 220000
```

**Paso a paso:**

| Iteración | `acumulador` | `producto.precio` | Resultado |
|-----------|--------------|-------------------|-----------|
| 1         | 0            | 50.000            | 50.000    |
| 2         | 50.000       | 20.000            | 70.000    |
| 3         | 70.000       | 150.000           | 220.000   |

### Usando arrow function

```ts
const totalPrecio = productos.reduce((acc, p) => acc + p.precio, 0);
```

### Sumar con operación sobre el campo

Si necesitas calcular el total considerando precio × cantidad:

```ts
const total = productos.reduce((acc, p) => acc +(p.precio * p.cantidad), 0);

console.log(total); // 50000*3 + 20000*5 + 150000*1 = 400000
```

::: tip Valor inicial obligatorio con objetos
Siempre pasa el valor inicial (`0`, `[]`, `{}`, etc.). Sin él, `reduce` usa el **primer elemento** del array como acumulador, lo que falla cuando el acumulador es un número y los elementos son objetos.

```ts
// Sin valor inicial — el acumulador empieza siendo un Producto, no un número
const mal = productos.reduce((acc, p) => acc + p.precio); // Error de tipos

// Con valor inicial
const bien = productos.reduce((acc, p) => acc + p.precio, 0);
```
:::

---

## map()

`map()` transforma cada elemento del array y devuelve un **nuevo array** con los resultados. No modifica el original.

```ts
// Obtener solo los nombres
const nombres: string[] = productos.map(p => p.nombre);
// ['Teclado', 'Mouse', 'Monitor']

// Calcular el subtotal de cada producto
const subtotales = productos.map(p => ({
    nombre: p.nombre,
    subtotal: p.precio * p.cantidad
}));
// [{ nombre: 'Teclado', subtotal: 150000 }, ...]
```

---

## filter()

`filter()` devuelve un **nuevo array** con solo los elementos que cumplen una condición.

```ts
// Productos con precio mayor a 30000
const caros = productos.filter(p => p.precio > 30000);
// [{ nombre: 'Teclado', ... }, { nombre: 'Monitor', ... }]

// Productos con stock (cantidad > 0)
const conStock = productos.filter(p => p.cantidad > 0);
```

---

## Combinar map, filter y reduce

Los tres métodos se pueden encadenar para operaciones más complejas:

```ts
// Sumar el total solo de productos con precio mayor a 30000
const totalCaros = productos
    .filter(p => p.precio > 30000)           // filtra
    .reduce((acc, p) => acc + p.precio, 0);  // suma

console.log(totalCaros); // 200000
```
