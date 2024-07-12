---
outline: deep
---

# Genéricos

En TypeScript, un genérico es una herramienta poderosa que permite definir componentes (clases, funciones, interfaces, etc.) que pueden trabajar con múltiples tipos de datos sin perder el tipo de información. Los genéricos proporcionan una forma de crear código que es más flexible y reutilizable, permitiendo que los tipos se especifiquen como parámetros en el momento de la invocación o declaración.

## Funcion genérica

```ts
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hello World"); // T se infiere como string
let output2 = identity<number>(42); // T se infiere como number

```

## Array Genérico
```ts
function loggingIdentity<T>(arg: T[]): T[] {
    return arg;
}

loggingIdentity<number>([1, 2, 3]); // T se infiere como number
```

## Restricciones en Genéricos:
```ts
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // Ahora sabemos que el objeto arg tiene una propiedad length
    return arg;
}

loggingIdentity({ length: 10, value: 3 });
```