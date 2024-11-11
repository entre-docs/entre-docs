---
outline: deep
---

# Sentencias Condicionales o de Decisión

## If

En Java, la sentencia de condición if se utiliza para tomar decisiones en el flujo del programa. Evalúa una expresión booleana (una expresión que devuelve true o false) y, si la expresión resulta ser true, ejecuta el bloque de código correspondiente. Si la expresión es false, el bloque de código no se ejecuta.

```java
public class EjemploIf {
    public static void main(String[] args) {
        int numero = 10;

        if (numero > 5) {
            System.out.println("El número es mayor que 5");
        }
    }
}
```

## If Else

El if-else en Java es una estructura de control de flujo que permite tomar decisiones en función de una o varias condiciones. Se usa para ejecutar un bloque de código si la condición especificada es true y otro bloque si la condición es false. Esto proporciona una forma de manejar escenarios en los que se deben ejecutar acciones diferentes según el resultado de una evaluación.

```java
public class EjemploIfElse {
    public static void main(String[] args) {
        int edad = 18;

        if (edad >= 18) {
            System.out.println("Eres mayor de edad.");
        } else {
            System.out.println("Eres menor de edad.");
        }
    }
}
```

## If Else If

Se puede usar múltiples condiciones encadenadas con **else if** para manejar más escenarios.

```java
public class EjemploIfElseIf {
    public static void main(String[] args) {
        int numero = 0;

        if (numero > 0) {
            System.out.println("El número es positivo.");
        } else if (numero < 0) {
            System.out.println("El número es negativo.");
        } else {
            System.out.println("El número es cero.");
        }
    }
}
```