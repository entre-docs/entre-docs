---
outline: deep
---

# Herencia en Kotlin

Las clases no son heredables por defecto.
Para permitirlo, usa la palabra clave **open**.

* Usar **override** para redefinir métodos de la clase base.

``` kotlin
// Clase base (superclase)
open class Animal(val nombre: String) {
    open fun hacerSonido() {
        println("$nombre hace un sonido genérico")
    }
}

// Clase derivada con constructor principal
class Perro(nombre: String, val raza: String) : Animal(nombre) {
    override fun hacerSonido() {
        println("$nombre (raza $raza) ladra: ¡Guau guau!")
    }
}

// Clase derivada sin constructor principal (usa constructor secundario)
class Gato : Animal {
    var color: String

    // Constructor secundario debe llamar a super
    constructor(nombre: String, color: String) : super(nombre) {
        this.color = color
    }

    override fun hacerSonido() {
        println("$nombre ($color) maúlla: ¡Miau!")
    }
}

fun main() {
    val perro = Perro("Max", "Labrador")
    perro.hacerSonido()
    // Output: Max (raza Labrador) ladra: ¡Guau guau!

    val gato = Gato("Michi", "gris")
    gato.hacerSonido()
    // Output: Michi (gris) maúlla: ¡Miau!
}
```