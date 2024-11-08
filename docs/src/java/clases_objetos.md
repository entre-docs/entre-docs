---
outline: deep
---

# Clases y Objetos en Java

## Clase

Una clase es una plantilla o modelo a partir del cual se crean objetos. Es una estructura que define un conjunto de propiedades (atributos) y comportamientos (métodos) comunes que pueden tener sus objetos.

Los componentes de una clase son:

* Atributos (Campos): Son las variables que definen el estado o las características de los objetos creados a partir de esa clase.

* Métodos: Son las funciones o procedimientos que definen el comportamiento o las acciones que un objeto puede realizar.

```java
public class Coche {
    // Atributos
    String marca;
    String modelo;
    int anio;

    // Método
    public void arrancar() {
        System.out.println("El coche está arrancando...");
    }

    public void detener() {
        System.out.println("El coche se ha detenido.");
    }
}
```


## Objeto

Un objeto es una instancia de una clase. Es una entidad concreta que existe en memoria y que tiene sus propios valores para los atributos definidos en la clase. Los objetos son los que interactúan entre sí durante la ejecución de un programa.

Para crear un objeto, se utiliza el operador **new** junto con el constructor de la clase.

```java
public class Main {
    public static void main(String[] args) {
        // Crear un objeto de la clase Coche
        Coche miCoche = new Coche();
        
        // Asignar valores a los atributos
        miCoche.marca = "Toyota";
        miCoche.modelo = "Corolla";
        miCoche.anio = 2020;

        // Llamar a los métodos
        miCoche.arrancar(); // Imprime: El coche está arrancando...
        miCoche.detener();  // Imprime: El coche se ha detenido.
    }
}

```


## Relación entre clases y objetos:

* Una clase es como un plano que define cómo se construyen los objetos.
* Un objeto es una instancia concreta de esa clase, con un estado específico.


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