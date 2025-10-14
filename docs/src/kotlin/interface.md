---
outline: deep
---

# Interface en Kotlin

Las interfaces definen un conjunto de métodos y propiedades que una clase puede implementar.
A diferencia de las clases abstractas, no almacenan estado.

``` kotlin
interface Vehiculo {
    fun acelerar()
    fun frenar()
}

class Auto : Vehiculo {
    override fun acelerar() = println("El auto acelera")
    override fun frenar() = println("El auto frena")
}
```