---
outline: deep
---

# Sentencias de Iteración

## While

La sentencia while en Java es una estructura de control que permite ejecutar repetidamente un bloque de código mientras una condición especificada sea verdadera. Es una de las formas de implementar bucles, junto con for y do-while.

## Ejemplo

Imprimir números del 1 al 5.

```java
public class WhileExample {
    public static void main(String[] args) {
        int contador = 1; // Inicialización de la variable

        while (contador <= 5) { // Condición del bucle
            System.out.println("Número: " + contador); //Acción dentro del bucle
            contador++; // Incremento de la variable
        }
    }
}
```

### Explicación

1. Se define una variable contador inicializada con el valor 1.
2. El bucle *while* comprueba si la condición contador <= 5 es *true*.
3. Si es *true*, el bloque de código dentro del while se ejecuta e imprime el valor de contador.
4. Luego, la variable contador se incrementa en 1 (contador++).
5. El bucle continúa verificando la condición hasta que esta se convierte en false (cuando contador es mayor que 5).


### Salida del Código

```java
Número: 1
Número: 2
Número: 3
Número: 4
Número: 5
```