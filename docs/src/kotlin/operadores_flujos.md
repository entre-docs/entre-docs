---
outline: deep
---

# Operadores y flujos

Los operadores y flujos de control en Kotlin, conceptos fundamentales para manipular variables, realizar cálculos y controlar la ejecución de programas.


## Operadores

En Kotlin, los operadores son herramientas clave para manipular variables y valores. Se clasifican en cuatro grupos principales: aritméticos, de asignación, de comparación y lógicos.


### Operadores Aritméticos

Se emplean para realizar cálculos numéricos habituales.

|Operador|Descripción|Ejemplo   |
|--------|-----------|----------|
| `+`    | Suma      | `a + b`  |
| `-`    | Resta     | `a - b`  |
| `*`    | Multiplicación| `a * b`  |
| `/`    | División      | `a / b`  |
| `%`    | Módulo      | `a % b`  |


``` kotlin
fun main() {
    val a = 10
    val b = 5
    println("Suma: ${a + b}") // 15
    println("Resta: ${a - b}") // 5
    println("Multiplicación: ${a * b}") // 50
    println("División: ${a / b}") // 2
    println("Módulo: ${a % b}") // 0
}
```

### Operadores de Asignación

Se emplean para asignar valores a variables, incluyendo operaciones combinadas.

|Operador|Descripción|Ejemplo   |
|--------|-----------|----------|
| `=`    | Asignación simple| `a + b`  |
| `+=`   | Suma y asigna    | `a - b`  |
| `-=`   | Resta y asigna   | `a * b`  |
| `*=`   | Multiplica y asigna  | `a / b`  |
| `/=`   | Divide y asigna      | `a % b`  |
| `%=`   | Módulo y Asigna  | `a %= b`|


``` kotlin
fun main() {
    var a = 10
    a += 5 // a = 15
    println("a después de +=: $a")
}
```


### Operadores de Comparación

Se emplean para comparar dos valores, devolviendo un resultado booleano.

|Operador|Descripción   |Ejemplo   |
|--------|--------------|----------|
| `==`   | Igual a      | `a == b` |
| `!=`   | Diferente a  | `a != b` |
| `>`    | Mayor que    | `a > b`  |
| `<`    | Menor que    | `a < b`  |
| `>=`   | Mayor o igual| `a >= b` |
| `<=`   | Menor o igual| `a <= b` |


``` kotlin
fun main() {
    val a = 10
    val b = 5
    println("a == b: ${a == b}") // false
    println("a > b: ${a > b}") // true
}
```


### Operadores Lógicos

Se emplean para establecer relaciones lógicas entre valores, devolviendo un resultado booleano.

|Operador|Descripción   |Ejemplo   |
|--------|--------------|----------|
| `&&`   | AND lógico   | `a && b` |
| `||`   | OR lógico    | `a || b` |
| `!`    | NOT lógico   | `!a`     |

```kotlin
fun main() {
    val a = true
    val b = false
    println("a && b: ${a && b}") // false
    println("a || b: ${a || b}") // true
    println("!a: ${!a}") // false
}
```


## Flujos de control

Kotlin ofrece estructuras y expresiones para controlar el flujo de ejecución, como condicionales (`if`, `else`, `when`) y bucles (`for`, `while`).


### Condicional if

Valida si un conjunto de instrucciones cumple una condición específica.

``` kotlin
fun main() {
    val number = 10
    if (number > 0) {
        println("El número es positivo")
    }
}
```


### Condicional else

Se ejecuta cuando la condición de if no es verdadera.

``` kotlin
fun main() {
    val number = -5
    if (number > 0) {
        println("El número es positivo")
    } else {
        println("El número es negativo o cero")
    }
}
```


### Condicional else-if

Evalúa una condición adicional si la primera condición es falsa.

``` kotlin
fun main() {
    val number = 0
    if (number > 0) {
        println("El número es positivo")
    } else if (number < 0) {
        println("El número es negativo")
    } else {
        println("El número es cero")
    }
}
```

### If-else con expresión

Asigna un valor a una variable basado en una condición.

``` kotlin
fun main() {
    val number = 10
    val result = if (number > 0) "Positivo" else "Negativo o cero"
    println(result) // Positivo
}
```

### Condicional when

Similar a `switch` en Java, ejecuta bloques de código según condiciones.

``` kotlin
fun main() {
    val day = 3
    when (day) {
        1 -> println("Lunes")
        2 -> println("Martes")
        3 -> println("Miércoles")
        else -> println("Otro día")
    }
}
```

### Bucle While

Ejecuta un bloque de código mientras una condición sea verdadera.

``` kotlin
fun main() {
    var i = 1
    while (i <= 5) {
        println("Iteración $i")
        i++
    }
}
```

### Bucle do-while

Ejecuta el bloque de código al menos una vez antes de verificar la condición.

``` kotlin
fun main() {
    var i = 1
    do {
        println("Iteración $i")
        i++
    } while (i <= 5)
}
```

### Bucle for

Itera a través de rangos, listas, u otras estructuras.

``` kotlin
fun main() {
    for (i in 1..5) {
        println("Iteración $i")
    }
}
```

### Operadores break/continue

* `continue`: Detiene una iteración y pasa a la siguiente.
* `break`: Sale completamente del bucle.


``` kotlin
fun main() {
    for (i in 1..5) {
        if (i == 3) continue // Salta la iteración 3
        println("Iteración $i")
    }
    for (i in 1..5) {
        if (i == 3) break // Termina el bucle en 3
        println("Iteración $i")
    }
}
```