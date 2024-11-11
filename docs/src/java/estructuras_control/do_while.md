---
outline: deep
---

# Sentencias de Iteración

## Do While

Es una estructura de control que permite la ejecución repetida de un bloque de código. La principal diferencia entre while y do-while es que, en do-while, el bloque de código se ejecuta al menos una vez antes de evaluar la condición. Esto se debe a que **la condición se verifica después de la ejecución del bloque, no antes.**


## Ejemplo

```java
import java.util.Scanner;

public class DoWhileExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int numero;

        // Solicitar un número positivo al usuario
        do {
            System.out.print("Por favor, ingrese un número positivo: ");
            numero = scanner.nextInt(); // Lee el número ingresado
        } while (numero <= 0); // La condición para salir del bucle

        System.out.println("¡Gracias! Has ingresado el número positivo: " + numero);
        
        scanner.close();
    }
}
```

### Explicación

1. Se utiliza un objeto Scanner para leer la entrada del usuario desde la consola.
2. El bucle do-while solicita al usuario ingresar un número.
3. Si el número ingresado es menor o igual a 0 (numero <= 0), el bucle se repite y vuelve a pedir un número.
4. Una vez que el usuario ingresa un número positivo, el bucle termina y se imprime un mensaje agradeciendo al usuario por ingresar un número positivo.

### Salida del programa (si el usuario ingresa 0 y luego 5):

```java
Por favor, ingrese un número positivo: 0
Por favor, ingrese un número positivo: -3
Por favor, ingrese un número positivo: 5
¡Gracias! Has ingresado el número positivo: 5
```
