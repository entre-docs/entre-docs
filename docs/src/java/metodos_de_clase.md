---
outline: deep
---

# Métodos de una Clase en Java

## Constructor

Es un método especial dentro de la clase que se utiliza para inicializar los objetos cuando se crean.


::: code-group
```java [coche.class]
public class Coche {
    String marca;
    String modelo;
    int anio;

    // Constructor
    public Coche(String marca, String modelo, int anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    public void arrancar() {
        System.out.println("El coche está arrancando...");
    }
}

```

```java [miCoche.objeto]
Coche miCoche = new Coche("Ford", "Fiesta", 2022);
```
:::


## Accesadores - Getter

* Descripción: Los métodos accesadores permiten recuperar el valor de un atributo privado desde fuera de la clase.

* Convención: El nombre del método comienza con get seguido del nombre del atributo con la primera letra en mayúscula.

```java
public class Persona {
    private String nombre;

    // Método accesador
    public String getNombre() {
        return nombre;
    }
}
```

## Mutadores - Setter

* Descripción: Los métodos mutadores permiten cambiar el valor de un atributo privado desde fuera de la clase.

* Convención: El nombre del método comienza con set seguido del nombre del atributo con la primera letra en mayúscula.


```java
public class Persona {
    private String nombre;

    // Método mutador
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
```

## Ejemplo completo GET - SET

```java
public class Persona {
    private String nombre;
    private int edad;

    // Método accesador para 'nombre'
    public String getNombre() {
        return nombre;
    }

    // Método mutador para 'nombre'
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    // Método accesador para 'edad'
    public int getEdad() {
        return edad;
    }

    // Método mutador para 'edad'
    public void setEdad(int edad) {
        if (edad >= 0) { // Validación de datos
            this.edad = edad;
        } else {
            System.out.println("La edad no puede ser negativa.");
        }
    }
}

```

## Main


El método main es especial en Java. Es el punto de inicio de cualquier aplicación independiente que se ejecute en la Java Virtual Machine (JVM). Este método debe definirse de una manera específica para que el programa pueda ejecutarse correctamente.

```java
public class MiClase {
    public static void main(String[] args) {
        // Aquí va el código que se ejecutará al iniciar el programa.
        System.out.println("Hola, mundo!");
    }
}
```

<p align="center">
  <img src="/java_main.png" width="800" alt="java_main"/>
</p>



## Customer

Son métodos propios del cliente, que se crean a partir de una funcionalidad específica. Su definición es libre, puede o no tener retorno y parámetros, según el requerimiento, manteniendo la estructura.

```java
public preparar(){}

- modificador: public
- retorno: void (no retorna nada)
- nombre: preparar
- parámetros: no tiene
```

```java
public String preparar(String harina, int gramos){}

- modificador: public
- retorno: String
- nombre: preparar
- parámetros: harina -> string
            gramos -> int
```

```java
public boolean preparar(char encendido){}

- modificador: public
- retorno: boolean
- nombre: preparar
- parámetros: encendido -> char
```

