---
outline: deep
---

# Polimorfismo

El polimorfismo en Java es un concepto fundamental de la programación orientada a objetos (POO) que permite que una misma interfaz o método pueda ser utilizado para diferentes tipos de objetos. En otras palabras, el polimorfismo permite que una misma acción se ejecute de maneras diferentes, dependiendo del tipo de objeto que la invoque.


Imaginemos que tenemos una granja con diferentes tipos de animales, como vacas y gallinas. Vamos a definir una clase base **Animal** con un método **hacerSonido()**, y luego vamos a extenderla con clases concretas como **Vaca** y **Gallina**. Además, vamos a utilizar sobrecarga y sobrescritura de métodos.


::: code-group
```java [class.Animal]
// Clase base Animal
class Animal {
    // Método para hacer un sonido, este será sobrescrito por las subclases
    public void hacerSonido() {
        System.out.println("El animal hace un sonido.");
    }
    
    // Sobrecarga de método: método para hacer un sonido con el volumen especificado
    public void hacerSonido(int volumen) {
        System.out.println("El animal hace un sonido de volumen " + volumen);
    }
}
```

```java [class.Vaca]
// Subclase Vaca que sobrescribe el método hacerSonido()
class Vaca extends Animal {
    @Override
    public void hacerSonido() {
        System.out.println("La vaca dice: ¡Muu!");
    }

    // Sobrecarga del método hacerSonido() para la vaca con volumen
    @Override
    public void hacerSonido(int volumen) {
        System.out.println("La vaca hace un sonido de volumen " + volumen + ": ¡Muu!");
    }
}
```

```java [class.Gallina]
// Subclase Gallina que sobrescribe el método hacerSonido()
class Gallina extends Animal {
    @Override
    public void hacerSonido() {
        System.out.println("La gallina dice: ¡Coc!"); 
    }

    // Sobrecarga del método hacerSonido() para la gallina con volumen
    @Override
    public void hacerSonido(int volumen) {
        System.out.println("La gallina hace un sonido de volumen " + volumen + ": ¡Coc!");
    }
}
```

```java [class.Granja]
public class Granja {
    public static void main(String[] args) {
        // Polimorfismo en tiempo de ejecución (sobre escritura)
        Animal animal1 = new Vaca();  // La referencia es de tipo Animal, pero el objeto es de tipo Vaca
        Animal animal2 = new Gallina();  // La referencia es de tipo Animal, pero el objeto es de tipo Gallina
        
        animal1.hacerSonido();  // Imprime: La vaca dice: ¡Muu!
        animal2.hacerSonido();  // Imprime: La gallina dice: ¡Cloc!
        
        // Polimorfismo en tiempo de compilación (sobrecarga)
        animal1.hacerSonido(5);  // Imprime: La vaca hace un sonido de volumen 5: ¡Muu!
        animal2.hacerSonido(3);  // Imprime: La gallina hace un sonido de volumen 3: ¡Cloc!
    }
}
```
:::


* Salida Esperada de la clase **Granja**:

```log
La vaca dice: ¡Muu!
La gallina dice: ¡Cloc!
La vaca hace un sonido de volumen 5: ¡Muu!
La gallina hace un sonido de volumen 3: ¡Coc!
```