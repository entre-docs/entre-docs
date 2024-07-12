---
outline: deep
---

# Interfaces

Una interfaz en TypeScript es una forma de definir la estructura de un objeto. Sirve para describir la forma que debe tener un objeto, incluyendo las propiedades y métodos que debe contener, sin preocuparse por los detalles de implementación.

## Interfaz básica

```ts
interface User {
  name: string;
  age: number;
}

const user1: User = {
  nombre: 'Peter',
  edad: 35
};
```

## Interfaz con propiedades opcionales

```ts
interface Product {
  name: string;
  price: number;
  description?: string;
}

const laptop: Product = {
  name: 'Gaming Laptop',
  price: 800
};

```