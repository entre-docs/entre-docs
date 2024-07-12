---
outline: deep
---

# Enum

Un enum (abreviatura de enumeración) en TypeScript y en muchos otros lenguajes de programación es una forma de definir un conjunto de constantes con nombre. Proporciona un medio eficiente y legible para trabajar con conjuntos predefinidos de valores relacionados.

## Valor subyacente

```ts
// Definición de un enum básico para días de la semana
enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

// Uso del enum
let day: DayOfWeek = DayOfWeek.Tuesday;
console.log(day); // Imprime: 1 (el valor subyacente de Tuesday)

// Accediendo a valores específicos del enum
console.log(DayOfWeek.Thursday); // Imprime: 3 (el valor subyacente de Thursday)
console.log(DayOfWeek.Saturday); // Imprime: 5 (el valor subyacente de Saturday)

// Utilizando el enum en una función
function printDay(day: DayOfWeek): void {
    console.log(`Today is ${DayOfWeek[day]}`);
}

printDay(DayOfWeek.Friday); // Imprime: Hoy es Friday

```

## Valor personalizado

```ts
enum UserRole {
    Administrator = 'admin',
    Editor = 'editor',
    User = 'user'
}

let role: UserRole = UserRole.Administrator;
console.log(role); // 'admin'
```
