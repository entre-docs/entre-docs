---
outline: deep
---

# Constructores de clase en Kotlin

Los constructores inicializan objetos de una clase.
Pueden ser principales o secundarios.

| Tipo           | Descripción                                                | Ejemplo                             |
| -------------- | ---------------------------------------------------------- | ----------------------------------- |
| **Principal**  | Se define en la cabecera de la clase.                      | `class Persona(val nombre: String)` |
| **Secundario** | Se define dentro del cuerpo de la clase con `constructor`. | `constructor(param) : this(...)`    |


## Constructor Principal

- Define la clase usando la palabra clave "class" seguida del nombre de la clase.
- Puede ser predeterminado o parametrizado.
- No tiene un cuerpo y no contiene código.
- El constructor principal se declara en la cabecera de la clase. Puede ser con o sin parámetros.

```kotlin
class Persona(val nombre: String, val edad: Int) {
    fun presentarse() = println("Hola, soy $nombre y tengo $edad años")
}

fun main() {
    val persona = Persona("Ana", 25)
    persona.presentarse()
}
```


## Constructor Secundario

- Una clase puede tener varios constructores secundarios.
- Pueden ser definidos con o sin parámetros.
- Pueden inicializar la clase y contienen un cuerpo con lógica de inicialización.
- Si hay un constructor principal, cada constructor secundario debe inicializarlo.
- El constructor secundario se declara dentro del cuerpo de la clase con constructor.

```kotlin
class Coche(val marca: String, val modelo: String) {
    var año: Int = 0

    // Constructor secundario
    constructor(marca: String, modelo: String, año: Int) : this(marca, modelo) {
        this.año = año
    }

    fun detalles() {
        println("Coche: $marca $modelo, Año: $año")
    }
}

fun main() {
    val coche1 = Coche("Toyota", "Corolla")   // Usa el constructor principal
    coche1.detalles()  // Output: Coche: Toyota Corolla, Año: 0

    val coche2 = Coche("Honda", "Civic", 2022) // Usa el constructor secundario
    coche2.detalles()  // Output: Coche: Honda Civic, Año: 2022
}
```