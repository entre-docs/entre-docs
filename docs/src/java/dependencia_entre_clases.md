---
outline: deep
---

# Relación de dependencia entre clases

La dependencia entre clases es una relación en la que una clase necesita utilizar otra para realizar una determinada operación o cumplir con una funcionalidad.

En Java, esto ocurre cuando una clase utiliza los métodos, atributos u objetos de otra clase.

---

Supongamos que tenemos dos clases: Conductor y Automovil.

La clase Conductor necesita utilizar un automóvil para realizar un viaje. Por lo tanto, depende de la clase Automovil.

::: code-group
```java [class Automovil]
public class Automovil {

    public void conducir() {
        System.out.println("El automóvil está en movimiento");
    }
}
```

```java [class Conductor]
public class Conductor {

    public void iniciarViaje() {
        Automovil auto = new Automovil(); // [!code ++]
        auto.conducir();
    }
}
```
:::

En este ejemplo, Conductor depende de Automovil porque utiliza un objeto de esa clase para ejecutar el método conducir().

Podemos representar esta relación de la siguiente manera:

``` md
Conductor ──────────> Automovil
          depende de
```


## ¿Cómo se genera una dependencia?

Una clase puede depender de otra de diferentes maneras:

**1. Creando un objeto dentro de un método:**

``` java
public void procesar() {
    Servicio servicio = new Servicio();
    servicio.ejecutar();
}
```

**2. Recibiendo un objeto como parámetro:**

``` java
public void procesar(Servicio servicio) {
    servicio.ejecutar();
}
```

**3. Declarando un atributo de otra clase:**

``` java
public class Controlador {

    private Servicio servicio;

}
```


## Dependencia y acoplamiento

Las dependencias están relacionadas con el concepto de acoplamiento, que representa el nivel de relación que existe entre las clases.

* Bajo acoplamiento: las clases tienen pocas dependencias directas y pueden modificarse con mayor independencia.

* Alto acoplamiento: las clases dependen demasiado unas de otras, por lo que un cambio puede afectar a varias partes del programa.

En general, se busca mantener un bajo acoplamiento para facilitar el mantenimiento, las pruebas y la evolución del código.


## Alto y Bajo acomplamiento


El **acoplamiento** representa el nivel de dependencia que existe entre las clases de un programa.

En Java se busca mantener un bajo acoplamiento para que las clases puedan trabajar de manera más independiente, facilitando el mantenimiento y los cambios en el código.

### Alto acoplamiento

Existe alto acoplamiento cuando una clase depende directamente de otra implementación específica.

Esto significa que un cambio en una clase puede obligar a modificar otras clases que dependen de ella.

::: code-group
```java [Automovil]
public class Automovil {

    public void conducir() {
        System.out.println("Conduciendo un automóvil");
    }
}
```

```java [Conductor]
public class Conductor {

    public void iniciarViaje() {
        Automovil auto = new Automovil(); // [!code ++]
        auto.conducir();
    }
}
```
:::


En este ejemplo, `Conductor` crea directamente un objeto de tipo `Automovil`. Por lo tanto, depende de esa implementación específica.

Si queremos utilizar una motocicleta en lugar de un automóvil, debemos modificar la clase `Conductor`.

### Bajo acoplamiento

Existe bajo acoplamiento cuando las clases dependen menos de implementaciones específicas y pueden trabajar mediante abstracciones, como las interfaces.

Esto permite cambiar o agregar implementaciones sin modificar las clases que las utilizan.

::: code-group
```java [interface Vehiculo]
public interface Vehiculo {

    void conducir();

}
```

```java [clase Automovil]
public class Automovil implements Vehiculo {

    @Override
    public void conducir() {
        System.out.println("Conduciendo un automóvil");
    }
}
```

```java [clase Motocicleta]
public class Motocicleta implements Vehiculo {

    @Override
    public void conducir() {
        System.out.println("Conduciendo una motocicleta");
    }
}
```

```java [clase Conductor]
public class Conductor {

    public void iniciarViaje(Vehiculo vehiculo) {
        vehiculo.conducir();
    }
}
```

```java [clase Main]
public class Main {

    public static void main(String[] args) {
        
        Conductor conductor = new Conductor();

        Vehiculo auto = new Automovil();
        Vehiculo moto = new Motocicleta();

        conductor.iniciarViaje(auto);
        conductor.iniciarViaje(moto);
    }
}

// Resultado en consola:
// Conduciendo un automóvil
// Conduciendo una motocicleta
```
:::


En este ejemplo, `Conductor` depende de la interfaz `Vehiculo` y no de una implementación específica.

Por lo tanto, puede trabajar tanto con un automóvil como con una motocicleta sin necesidad de modificar su código.

### Diferencias principales

| Alto acoplamiento | Bajo acoplamiento |
|---|---|
| Mayor dependencia entre clases. | Menor dependencia de implementaciones específicas. |
| Menor flexibilidad ante cambios. | Mayor flexibilidad ante cambios. |
| Puede dificultar el mantenimiento. | Facilita el mantenimiento y las pruebas. |
| Depende directamente de implementaciones específicas. | Puede utilizar abstracciones, como interfaces. |

