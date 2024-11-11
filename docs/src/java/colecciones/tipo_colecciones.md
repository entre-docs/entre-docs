---
outline: deep
---

# Tipo de Colecciones

## List

Elementos en una secuencia particular que mantienen un orden y permite duplicado. Existen: ArrayList, Vector y LinkedList.

### ArrayList

Son similares a los arreglos, sólo que proporcionan una funcionalidad mejorada, el ajuste de tamaño dinámico, que permite alojar una cantidad mayor o menor de elementos.

```java
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // Crear un ArrayList
        List<String> nombres = new ArrayList<>();
        
        // Agregar elementos
        nombres.add("Juan");
        nombres.add("María");
        nombres.add("Pedro");
        System.out.println("Lista: " + nombres);  // [Juan, María, Pedro]
    }
}
```

### Métodos de los ArrayList


### add

Agrega un elemento al final del ArrayList.

```java
nombres.add(1, "Ana"); // Agrega "Ana" en la posición 1
System.out.println(nombres); // Output: [Juan, Ana, María, Pedro]
```

### clear

Elimina todos los elementos del ArrayList.

```java
nombres.clear();
System.out.println("Lista después de clear(): " + nombres);
// Output: Lista después de clear(): []
```

### contains

Devuelve true si el ArrayList contiene el elemento especificado, en caso contrario, devuelve false.

```java
boolean contiene = nombres.contains("Juan");
System.out.println("¿La lista contiene a 'Juan'?: " + contiene);
// Output: ¿La lista contiene a 'Juan'?: true
```

### get

Devuelve el elemento en el índice especificado.

```java
nombres.add(1, "Ana"); // Agrega "Ana" en la posición 1
System.out.println(nombres); // Output: [Juan, Ana, María, Pedro]
```


### remove

Elimina la primera ocurrencia del valor especificado o del elemento en el subíndice especificado.

```java
nombres.remove(1); // Elimina "Ana"
nombres.remove("Pedro"); // Elimina "Pedro"
System.out.println(nombres); // Output: [Juan, Mario]
```

### size

Devuelve el número de elementos almacenados en el ArrayList.

```java
int size = nombres.size();
System.out.println("Tamaño de la lista: " + size);
// Output: Tamaño de la lista: 2
```

### indexOf

Devuelve el índice de la primera ocurrencia del elemento especificado en el ArrayList.

```java
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> nombres = new ArrayList<>();
        nombres.add("Juan");
        nombres.add("Ana");
        nombres.add("Pedro");
        nombres.add("Ana"); // "Ana" se repite

        // Buscar el índice de la primera aparición de "Ana"
        int indiceAna = nombres.indexOf("Ana");
        System.out.println("El índice de la primera aparición de 'Ana': " + indiceAna); // Output: 1

        // Buscar el índice de un elemento que no está en la lista
        int indiceMaria = nombres.indexOf("María");
        System.out.println("El índice de 'María' (no está en la lista): " + indiceMaria); // Output: -1
    }
}
```


## Set

No puede haber duplicados. Cada elemento debe ser único, por lo que si existe uno duplicado, no se agrega.

## Queue

Colección ordenada con extracción por el principio e inserción por el principio (LIFO – Last Input, First Output) o por el final (FIFO – First Input, First Output). Se permiten elementos duplicados.

## Map

Un grupo de pares objeto clave-valor, que no permite duplicados en sus claves. Existen: HashMap, HashTable, LinkedHashMap y TreeMap. 	