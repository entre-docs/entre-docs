---
outline: deep
---

# Java y Javac

El propósito de javac en Java es compilar código fuente Java en bytecode.

| Herramienta | Descripción |
|-------------|-------------|
| **Java** | Lenguaje de programación utilizado para desarrollar aplicaciones. |
| **Javac** | Compilador que transforma el código fuente Java (`.java`) en bytecode (`.class`). |
| **JVM** | Máquina virtual de Java. Se encarga de ejecutar el bytecode. |
| **JDK** | Kit de desarrollo de Java. Incluye herramientas como `javac`, además del entorno necesario para desarrollar aplicaciones. |


## Bytecode

El bytecode es un conjunto de instrucciones intermedias que se generan al compilar un archivo Java.

No es código máquina directamente ejecutable por el procesador. En su lugar, está diseñado para ser interpretado o compilado por la JVM.

Una de las principales ventajas es que permite ejecutar el mismo bytecode en diferentes sistemas operativos, siempre que tengan una JVM compatible.


## Compilación y ejecución

El proceso funciona de la siguiente manera:

1. **Código fuente**: escribimos nuestro código utilizando Java y lo guardamos en un archivo .java.
2. **Compilación**: utilizamos javac para transformar el código fuente en bytecode.
3. **Bytecode**: se genera un archivo .class con las instrucciones intermedias.
4. **Ejecución**: utilizamos el comando java para iniciar la JVM y ejecutar el programa.
5. **JVM**: carga las clases, verifica el bytecode y ejecuta las instrucciones. Puede utilizar el intérprete o el compilador JIT para optimizar la ejecución.

```
       Main.java
           ↓
         javac
      (Compilador)
           ↓
       Main.class
        (Bytecode)
           ↓
          java
           ↓
          JVM
           ↓
    Ejecución del programa
           ↓
    Hello and welcome!
```


## Ejemplo Práctico

1. Crear el archivo Java

``` bash
touch Main.java
```

2. Escribir el código fuente

``` bash
albania@albania:~/JavaDevtalles/02-bytecode$ nano Main.java
```

``` java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello and welcome!");
    }
}
```

3. Compilar el archivo

``` bash
javac Main.java
```

Al ejecutar este comando se genera un nuevo archivo: 

* `Main.java`: contiene el código fuente que escribimos.
* `Main.class`: contiene el bytecode generado por el compilador.


4. Ejecutar el programa

``` bash
java Main
## Resultado: Hello and Welcome!
```


## Diferencias entre javac y java

| Comando | Función | Ejemplo |
|---------|---------|---------|
| `javac` | Compila el código fuente Java. | `javac Main.java` |
| `java` | Ejecuta una clase Java mediante la JVM. | `java Main` |