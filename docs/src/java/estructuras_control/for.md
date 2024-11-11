---
outline: deep
---

# Sentencias de Iteración

## For

En Java, una sentencia for se usa para ejecutar un bloque de código repetidamente, con un número de iteraciones determinado. Es especialmente útil cuando conoces de antemano cuántas veces deseas repetir un conjunto de instrucciones.

## Estructura básica de un For


```java
for (inicialización; condición; incremento o decremento) {
    // Bloque de código que se ejecutará en cada iteración
}
```


## Ejemplo

```java
public class EjemploFor {
    public static void main(String[] args) {
        // Bucle for que imprime los números del 1 al 5
        for (int i = 1; i <= 5; i++) {
            System.out.println("Iteración número: " + i);
        }
    }
}
```

### Explicación

1. Inicialización: int i = 1 establece la variable i con un valor inicial de 1.
2. Condición: i <= 5 comprueba si i es menor o igual a 5. Si la condición es true, el bloque de código se ejecuta.
3. Incremento: i++ aumenta el valor de i en 1 después de cada iteración.


### Salida del código

```java
Iteración número: 1
Iteración número: 2
Iteración número: 3
Iteración número: 4
Iteración número: 5
```