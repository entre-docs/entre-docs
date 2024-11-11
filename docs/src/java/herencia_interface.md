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

## Interface

Una interfaz es un tipo especial de referencia que define un contrato o un conjunto de métodos que una clase debe implementar.

Una interfaz solo contiene métodos abstractos (sin cuerpo de método) hasta Java 7, pero a partir de Java 8 puede incluir métodos predeterminados (con implementación) y métodos estáticos.

Las interfaces también pueden tener constantes (valores final y static). La clase que implementa la interfaz debe proporcionar la implementación para todos los métodos abstractos definidos en la interfaz o declararse como abstract.


### Ejemplo 1

::: code-group
```java [animal.interface]
// Definición de una interfaz
interface Animal {
    void makeSound(); // Método abstracto
    void eat();       // Otro método abstracto
}
```

```java [dog.class]
// Implementación de la interfaz en una clase
class Dog implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof!");
    }

    @Override
    public void eat() {
        System.out.println("The dog is eating.");
    }
}
```

```java [main.class]
public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog(); // Uso de la interfaz como referencia
        myDog.makeSound(); // Llamada al método implementado
        myDog.eat();       // Llamada al método implementado
    }
}
```
:::

### Ejemplo 2

::: code-group
```java [interface Vehicle]
// Definición de la interfaz
interface Vehicle {
    void start(); // Método abstracto
    void stop();  // Otro método abstracto
}
```

```java [class Car]
// Implementación de la interfaz en una clase Car
class Car implements Vehicle {
    @Override
    public void start() {
        System.out.println("The car is starting.");
    }

    @Override
    public void stop() {
        System.out.println("The car is stopping.");
    }
}
```

```java [class Bicycle]
// Implementación de la interfaz en una clase Bicycle
class Bicycle implements Vehicle {
    @Override
    public void start() {
        System.out.println("The bicycle is starting.");
    }

    @Override
    public void stop() {
        System.out.println("The bicycle is stopping.");
    }
}
```

```java [class main]
public class Main {
    public static void main(String[] args) {
        Vehicle myCar = new Car();
        myCar.start(); // Llamada al método implementado en Car
        myCar.stop();

        Vehicle myBicycle = new Bicycle();
        myBicycle.start(); // Llamada al método implementado en Bicycle
        myBicycle.stop();
    }
}
```
:::

### Ejemplo 3

::: code-group
```java [interface]
// Definición de la interfaz con una constante
interface Figura {
    // Constante (por defecto es 'public static final')
    double PI = 3.14159;

    // Métodos abstractos
    double calcularArea();
    double calcularPerimetro();
}
```

```java [class Circulo]
// Clase que implementa la interfaz Figura
class Circulo implements Figura {
    private double radio;

    // Constructor
    public Circulo(double radio) {
        this.radio = radio;
    }

    // Implementación del método calcularArea
    @Override
    public double calcularArea() {
        return PI * radio * radio;
    }

    // Implementación del método calcularPerimetro
    @Override
    public double calcularPerimetro() {
        return 2 * PI * radio;
    }
}
```

```java [main]
public class Main {
    public static void main(String[] args) {
        Circulo circulo = new Circulo(5); // Crear un círculo con radio 5
        System.out.println("Área del círculo: " + circulo.calcularArea());
        System.out.println("Perímetro del círculo: " + circulo.calcularPerimetro());
    }
}
```
:::