---
outline: deep
---

# Types

En TypeScript, los types se utiliza para definir tipos personalizados. Estos tipos personalizados permiten a los desarrolladores crear alias para tipos más complejos y mejorar la legibilidad y mantenibilidad del código. Los tipos personalizados pueden ser combinaciones de tipos existentes, objetos con estructuras específicas, uniones de tipos, entre otros.

## Tipos Alias

Crear un alias para un tipo existente o una combinación de tipos:

```ts
type ID = string | number;

let userID: ID = "abc123";
let productID: ID = 98765;
```

## Tipos de Objetos

```ts
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

let user: User = {
  name: "Alicia",
  age: 30,
  isAdmin: true
};
```

## Uniones de Tipos

```ts
type Response = "yes" | "no" | "maybe";

let decision: Response = "yes";
```

## Intersecciones de Tipos

Puedes combinar varios tipos en uno solo utilizando la intersección de tipos:

```ts
type A = { x: number };
type B = { y: string };

type C = A & B;

let point: C = { x: 10, y: "Hi" };
```

```ts
interface User {
  username: string;
  email: string;
}

interface Admin {
  adminRights: string[];
}

type AdminUser = User & Admin;

const adminUser: AdminUser = {
  username: "adminUser",
  email: "admin@example.com",
  adminRights: ["manage_users", "edit_settings"],
};
```
