---
outline: deep
---

# Encapsulamiento

El encapsulamiento es uno de los pilares de la Programación Orientada a Objetos (POO) y se refiere a la práctica de ocultar los detalles internos de una clase y solo exponer lo que es necesario. En Java, esto se logra utilizando modificadores de acceso como **private**, **protected**, y **public** para controlar el acceso a los atributos y métodos.

El encapsulamiento tiene dos objetivos principales:

1. Ocultar el estado interno del objeto, evitando que otros objetos puedan modificarlo directamente.
2. Proteger la integridad de los datos permitiendo que solo ciertos métodos controlados puedan acceder y modificar los atributos.



```java
public class CuentaBancaria {
    // Atributos privados (no accesibles directamente desde fuera)
    private double saldo;
    private String titular;

    // Constructor para inicializar los valores
    public CuentaBancaria(String titular, double saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    // Método público para obtener el saldo (getter)
    public double getSaldo() {
        return saldo;
    }

    // Método público para depositar dinero (setter)
    public void depositar(double monto) {
        if (monto > 0) {
            saldo += monto;
            System.out.println("Has depositado: " + monto);
        } else {
            System.out.println("El monto a depositar debe ser mayor a cero.");
        }
    }

    // Método público para retirar dinero (setter)
    public void retirar(double monto) {
        if (monto > 0 && monto <= saldo) {
            saldo -= monto;
            System.out.println("Has retirado: " + monto);
        } else {
            System.out.println("Fondos insuficientes o monto no válido.");
        }
    }

    // Método para mostrar el estado de la cuenta
    public void mostrarEstado() {
        System.out.println("Titular: " + titular);
        System.out.println("Saldo actual: " + saldo);
    }
}

```