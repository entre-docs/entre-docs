---
outline: deep
---

# Interfaces con funciones

En TypeScript, existen dos formas de definir un método o una función dentro de una interfaz.

## Firma de Función en una Interfaz

::: tip Definición
Una Interfaz como Firma de Función en TypeScript es una interfaz que describe la forma y el tipo de una función en lugar de un objeto. Esta interfaz especifica los tipos de los argumentos que la función toma y el tipo de valor que la función devuelve.
:::

```ts
interface NombreDeLaInterfaz {
  (argumento1: Tipo, argumento2: Tipo, ...): TipoDeRetorno;
}
```

```ts
interface Comparar {
  (a: number, b: string): boolean;
}

const compararNumerosConCadena: Comparar = (a, b) => {
  return a.toString() === b;
};

console.log(compararNumerosConCadena(123, "123")); // true
console.log(compararNumerosConCadena(123, "456")); // false
```

## Interfaz que Define un Método

::: tip Definición
En una interfaz que define un método, el método es parte de la estructura del objeto y puede usar el contexto this del objeto.
:::

```ts
interface Usuario {
  nombre: string;
  saludar(): string;
}

```
```ts
const usuario: Usuario = {
  nombre: 'Alicia',
  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
};

console.log(usuario.saludar()); // Hola, soy Alicia
```

### Características Clave
* Método: Un método definido directamente en la interfaz se invoca usando la notación de puntos (objeto.metodo()).
* Contexto (this): Dentro del método, this se refiere al objeto que contiene el método.

## Interfaz que Define una Propiedad que es una Función

::: tip Definición
En una interfaz que define una propiedad que es una función, la propiedad es una referencia a una función.
:::

```ts
interface UsuarioConFuncion {
  nombre: string;
  saludar: () => string;
}
```
```ts
const usuarioConFuncion: UsuarioConFuncion = {
  nombre: 'Alicia',
  saludar: () => `Hola, soy ${usuarioConFuncion.nombre}` // Necesita referirse a `usuarioConFuncion` directamente
};

console.log(usuarioConFuncion.saludar()); // Hola, soy Alicia
```
### Características Clave

* Propiedad que es una Función: La propiedad es una referencia a una función y se puede invocar directamente (objeto.propiedad()).
* Contexto (this): La función no tiene un contexto this inherente, a menos que se vincule explícitamente.