---
outline: deep
---

# Atributo de Instancia vs Atributo static

## Atributo de instancia

Es un atributo que pertenece a un objeto específico.

Cada vez que se crea un objeto de una clase, ese objeto tiene su propia copia del atributo.

``` java
public class Persona {

    String nombre;
    int edad;

}
```

Ahora se crean dos personas:

``` java
Persona persona1 = new Persona();
persona1.nombre = "Juan";
persona1.edad = 25;

Persona persona2 = new Persona();
persona2.nombre = "María";
persona2.edad = 30;
```

Cada objeto tiene sus propios valores:

- persona1 tiene nombre Juan y edad 25.
- persona2 tiene nombre María y edad 30.

Si se modifica la edad de Juan, no afecta a María.

``` java
persona1.edad = 26;
```
::: tip Idea Clave
Cada objeto tiene sus propios atributos de instancia.
:::


## Atributo estático (static)

Es un atributo que pertenece a la clase, no a cada objeto.

Se utiliza la palabra reservada `static`.

``` java
public class Persona {

    String nombre;

    static String pais = "Chile";

}
```

Ahora se crean dos personas:

``` java
Persona persona1 = new Persona();
persona1.nombre = "Juan";

Persona persona2 = new Persona();
persona2.nombre = "María";
```

Ambas personas comparten el mismo atributo pais.

Se puede acceder a él directamente mediante la clase `System.out.println(Persona.pais);`

|Resultado|
|---------|
|Chile|

Si se cambia el país:

``` java
Persona.pais = "Argentina";
```

El cambio se refleja para todos los objetos porque existe una sola variable compartida.


## Diferencias principales

|Característica| Instancia|	Estático (static)|
|-------------|-----------|------------------|
|Pertenece a|	Objeto	|Clase|
|Copias|	Una por objeto	|Una compartida|
|Palabra static	|No	|Sí|
|Acceso recomendado|	objeto.atributo	|Clase.atributo|
|Comparte valores|	No|	Sí|


## Ejemplo Completo

``` java
public class CuentaBancaria {

    // Atributo de instancia
    String titular;
    double saldo;

    // Atributo estático
    static String banco = "Banco de Chile";

}


// Creamos dos cuentas:
CuentaBancaria cuenta1 = new CuentaBancaria();
cuenta1.titular = "Juan";
cuenta1.saldo = 100000;

CuentaBancaria cuenta2 = new CuentaBancaria();
cuenta2.titular = "María";
cuenta2.saldo = 200000;
```

Tenemos lo siguiente:

|Clase|atributo estático (compartido)|
|-----|-------------------------|
|CuentaBancaria | banco = "Banco de Chile" |


Una sola variable para todos los objetos.


cuenta1
titular: Juan
saldo: 100.000
(Instancia)

cuenta2
titular: María
saldo: 200.000
(Instancia)