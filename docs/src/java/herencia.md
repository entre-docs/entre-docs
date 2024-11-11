---
outline: deep
---

# Herencia

La herencia es uno de los principios fundamentales de la Programación Orientada a Objetos (POO) y en Java permite crear nuevas clases a partir de clases existentes. Esto ayuda a **reutilizar código** y a crear jerarquías de clases, lo que hace que el código sea más modular y fácil de mantener.

La herencia en Java se logra utilizando la palabra clave **extends**, y permite que una clase (subclase) herede atributos y métodos de otra clase (superclase). La subclase puede modificar (sobrescribir) los métodos heredados, o puede añadir nuevos métodos y atributos propios.

## Superclase y Subclase

* Superclase: Es la clase que se hereda. Contiene los atributos y métodos comunes que serán utilizados por las subclases.

* Subclase: Es la clase que hereda de la superclase. Puede acceder a los atributos y métodos de la superclase y también puede agregar sus propios atributos y métodos, o sobrescribir los heredados.

::: code-group
```java [animal.superclase]
// Superclase (clase base)
class Animal {
    // Atributo común
    String nombre;

    // Constructor de la superclase
    public Animal(String nombre) {
        this.nombre = nombre;
    }

    // Método común
    public void comer() {
        System.out.println(nombre + " está comiendo.");
    }

    // Método común
    public void dormir() {
        System.out.println(nombre + " está durmiendo.");
    }
}
```

```java [perro.extendsAnimal]
// Subclase (hereda de Animal)
class Perro extends Animal {
    
    // Constructor de la subclase
    public Perro(String nombre) {
        // Llamada al constructor de la superclase (Animal)
        super(nombre);
    }

    // Sobrescribir el método comer() para el Perro
    @Override
    public void comer() {
        System.out.println(nombre + " está comiendo croquetas.");
    }

    // Método propio de la subclase
    public void ladrar() {
        System.out.println(nombre + " está ladrando.");
    }
}

```

```java [gato.extendsAnimal]
// Subclase (hereda de Animal)
class Gato extends Animal {

    // Constructor de la subclase
    public Gato(String nombre) {
        super(nombre);
    }

    // Sobrescribir el método comer() para el Gato
    @Override
    public void comer() {
        System.out.println(nombre + " está comiendo pescado.");
    }

    // Método propio de la subclase
    public void maullar() {
        System.out.println(nombre + " está maullando.");
    }
}

```

```java [main]
public class Main {
    public static void main(String[] args) {
        // Crear instancias de las subclases
        Animal miPerro = new Perro("Rex");
        Animal miGato = new Gato("Miau");

        // Llamar a los métodos comunes
        miPerro.comer();  // Imprime: Rex está comiendo croquetas.
        miPerro.dormir(); // Imprime: Rex está durmiendo.
        miGato.comer();   // Imprime: Miau está comiendo pescado.
        miGato.dormir();  // Imprime: Miau está durmiendo.

        // Llamar a los métodos específicos de cada subclase
        Perro perro = (Perro) miPerro;  // Hacemos un casting para acceder a métodos de Perro
        perro.ladrar();  // Imprime: Rex está ladrando.

        Gato gato = (Gato) miGato;  // Hacemos un casting para acceder a métodos de Gato
        gato.maullar();  // Imprime: Miau está maullando.
    }
}

```
:::