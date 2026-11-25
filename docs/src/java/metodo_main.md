---
outline: deep
---

# Método Main

El método main es el punto de entrada de una aplicación Java. Es decir, es el primer método que la JVM (Java Virtual Machine) busca y ejecuta cuando iniciamos un programa.

Su función principal es indicar dónde comienza la ejecución de nuestro código.

``` java
public class Main {

    public static void main(String[] args) {
        System.out.println("Hola Mundo");
    }

}
```


## Estructura del Main

| Elemento | Explicación |
|--------|--------|
| `public` | Permite que la JVM pueda acceder al método desde fuera de la clase. |
| `static` | Permite ejecutar el método sin crear un objeto de la clase. |
| `void` | Indica que el método no devuelve ningún valor. |
| `main` | Es el nombre del método que la JVM reconoce como punto de entrada tradicional. |
| `String[] args` | Permite recibir argumentos de texto desde la línea de comandos. |



**El método main es estático** porque la JVM necesita ejecutarlo sin tener que crear previamente un objeto de la clase donde se encuentra.

::: tip ¿Qué significa String[] args?
**String[] args** es un parámetro que permite recibir argumentos desde la línea de comandos al ejecutar un programa.

- String: indica que los argumentos son cadenas de texto.
- []: indica que se trata de un arreglo (array).
- args: es el nombre de la variable que contiene esos argumentos.
:::