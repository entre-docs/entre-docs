---
outline: deep
---

# Clases y objetos en Kotlin

Las clases son plantillas para crear objetos, y los objetos son instancias de una clase.
Cada objeto tiene propiedades (datos) y métodos (acciones).


## Propiedades de clases

| Tipo de propiedad     | Descripción                         | Ejemplo              |
| --------------------- | ----------------------------------- | -------------------- |
| **Mutable (`var`)**   | Puede cambiar su valor.             | `var edad = 25`      |
| **Inmutable (`val`)** | Solo lectura, no puede modificarse. | `val nombre = "Ana"` |



* lateinit

Permite declarar una propiedad sin inicializarla inmediatamente, útil cuando el valor se conoce más tarde.

```kotlin
class Persona {
    lateinit var nombre: String
}
```

* by lazy (perezosa)

Permite inicializar una propiedad solo cuando se utiliza por primera vez (inicialización diferida).

```kotlin
class Config {
    val data by lazy {
        cargarDatos()
    }
}
```


## Modificadores de Visibilidad

| Modificador | Acceso                             | Descripción              |
| ----------- | ---------------------------------- | ------------------------ |
| `public`    | En cualquier parte                 | Es el valor por defecto. |
| `private`   | Solo dentro de la clase o archivo. | Restringe el acceso.     |
| `protected` | En la clase y sus subclases.       | Ideal para herencia.     |
| `internal`  | Dentro del mismo módulo.           | Visibilidad de módulo.   |

