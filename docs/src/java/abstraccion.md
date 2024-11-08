---
outline: deep
---

# Abstracción

## Abstracción con clases abstractas

Una clase abstracta es una clase que no puede ser instanciada por sí misma, y puede contener tanto métodos concretos (con implementación) como métodos abstractos (sin implementación). Los métodos abstractos deben ser implementados por las subclases que heredan de la clase abstracta.

```java
// Clase abstracta
abstract class Animal {
    // Atributo común
    String nombre;

    // Método común (puede tener implementación)
    public void respirar() {
        System.out.println(nombre + " está respirando.");
    }

    // Método abstracto (sin implementación)
    public abstract void hacerSonido();
}

```

En este ejemplo, **Animal** es una clase abstracta. Contiene un método concreto *respirar()*, pero también tiene un método abstracto *hacerSonido()*, que debe ser implementado por cualquier subclase que herede de **Animal**.


### Subclase que implementa la clase abstracta

::: code-group
```java [class]
// Subclase que hereda de Animal
class Perro extends Animal {

    // Constructor para inicializar el nombre
    public Perro(String nombre) {
        this.nombre = nombre;
    }

    // Implementación del método abstracto
    @Override
    public void hacerSonido() {
        System.out.println(nombre + " dice: ¡Guau!");
    }
}

```

```java [main]
public class Main {
    public static void main(String[] args) {
        // No se puede instanciar una clase abstracta directamente
        // Animal a = new Animal();  // Esto da error
        
        // Se puede crear una instancia de una subclase
        Animal miPerro = new Perro("Rex");
        
        // Uso de métodos
        miPerro.respirar();     // Imprime: Rex está respirando.
        miPerro.hacerSonido();  // Imprime: Rex dice: ¡Guau!
    }
}
```
:::


## Abstracción con Interfaz

Una interfaz es una forma más estricta de abstracción en Java. Una interfaz solo puede declarar métodos (sin implementación) y puede ser implementada por cualquier clase que desee proporcionar su propia implementación de esos métodos. Las interfaces no pueden tener atributos, solo constantes (valores estáticos y finales).

::: code-group
```java [interface]
// Interfaz
interface Volador {
    void volar();  // Método abstracto (sin implementación)
}
```

```java [class]
// Clase que implementa la interfaz Volador
class Pájaro implements Volador {
    String nombre;

    public Pájaro(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public void volar() {
        System.out.println(nombre + " está volando.");
    }
}

```

```java [main]
public class Main {
    public static void main(String[] args) {
        Volador miPajaro = new Pájaro("Piolín");
        miPajaro.volar();  // Imprime: Piolín está volando.
    }
}
```
:::

## Comparación entre Clases Abstractas e Interfaces

- Clases Abstractas: Se usan cuando queremos compartir código común entre clases y necesitamos declarar algunos métodos con implementación. Una clase puede tener tanto métodos abstractos como concretos.

- Interfaces: Se usan para especificar un conjunto de métodos que una clase debe implementar, pero no contienen ninguna implementación. Una clase puede implementar múltiples interfaces.