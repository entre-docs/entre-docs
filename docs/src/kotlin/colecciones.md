---
outline: deep
---

# Colecciones en Kotlin

Kotlin ofrece listas, conjuntos y mapas — cada uno puede ser mutable o inmutable.

| Colección | Inmutable  | Mutable           |
| --------- | ---------- | ----------------- |
| Lista     | `listOf()` | `mutableListOf()` |
| Conjunto  | `setOf()`  | `mutableSetOf()`  |
| Mapa      | `mapOf()`  | `mutableMapOf()`  |


## Listas

Se refieren a listas ordenadas de elementos. Estas permiten almacenar y manipular datos de manera estructurada.

``` kotlin
fun main() {
    // Lista inmutable (no se puede modificar)
    val frutas = listOf("Manzana", "Banana", "Cereza")
    println("Lista de frutas: $frutas")
    println("Primera fruta: ${frutas[0]}")
    println("Cantidad de frutas: ${frutas.size}")

    // Lista mutable (se puede modificar)
    val numeros = mutableListOf(1, 2, 3)
    println("Lista inicial: $numeros")

    // Agregar elementos
    numeros.add(4)
    numeros.add(5)
    println("Después de agregar: $numeros")

    // Eliminar elemento
    numeros.remove(2)
    println("Después de eliminar: $numeros")

    // Recorrer la lista con un for
    for (numero in numeros) {
        println("Número: $numero")
    }
}
```

## Conjuntos

A diferencia de una lista, un conjunto no permite duplicados y el orden de los elementos no es relevante. Cada elemento puede estar presente o ausente en el conjunto, pero si está presente, sólo existe una copia de él.


``` kotlin
fun main() {
    // Conjunto inmutable (no se puede modificar después de crearlo)
    val numeros = setOf(1, 2, 3, 3, 4, 5, 5)
    println("Conjunto inmutable: $numeros")  
    // Conjunto inmutable: [1, 2, 3, 4, 5] (los duplicados se eliminan)

    // Conjunto mutable (permite agregar o eliminar elementos)
    val nombres = mutableSetOf("Ana", "Pedro", "Lucía")
    println("Conjunto inicial: $nombres")

    // Agregar elementos
    nombres.add("Carlos")
    nombres.add("Ana") // No se agrega porque ya existe
    println("Después de agregar: $nombres")

    // Eliminar elementos
    nombres.remove("Pedro")
    println("Después de eliminar: $nombres")

    // Verificar si un elemento está en el conjunto
    if ("Lucía" in nombres) {
        println("Lucía está en el conjunto")
    }
}
```

## Mapas

Un mapa es un conjunto de pares clave-valor que permite buscar facilmente un valor usando una clave especifica. Cada clave es única y se asocia con un sólo valor, aunqeu los valores pueden repetirse. Los valores del mapa pueden ser cadenas, números u objetos e incluso otras colecciones como listas o conjuntos.


```kotlin
fun main() {
    // Mapa inmutable
    val paises = mapOf(
        "CL" to "Chile",
        "AR" to "Argentina",
        "PE" to "Perú"
    )
    println("Mapa inmutable: $paises")
    println("Clave 'CL' corresponde a: ${paises["CL"]}")

    // Mapa mutable
    val edades = mutableMapOf(
        "Ana" to 25,
        "Pedro" to 30
    )
    println("Mapa mutable inicial: $edades")

    // Agregar elementos
    edades["Lucía"] = 22
    println("Después de agregar: $edades")

    // Modificar valor existente
    edades["Ana"] = 26
    println("Después de modificar: $edades")

    // Eliminar por clave
    edades.remove("Pedro")
    println("Después de eliminar: $edades")

    // Recorrer el mapa
    for ((nombre, edad) in edades) {
        println("$nombre tiene $edad años")
    }
}
```