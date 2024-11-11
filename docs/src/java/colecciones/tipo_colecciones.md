---
outline: deep
---

# Tipo de Colecciones

## List

Elementos en una secuencia particular que mantienen un orden y permite duplicado. Existen: ArrayList, Vector y LinkedList.

### ArrayList

Son similares a los arreglos, sólo que proporcionan una funcionalidad mejorada, el ajuste de tamaño dinámico, que permite alojar una cantidad mayor o menor de elementos.

### Métodos de los ArrayList

* add: Agrega un elemento al final del ArrayList.

* clear: Elimina todos los elementos del ArrayList.

* contains: Devuelve true si el ArrayList contiene el elemento especificado, en caso contrario, devuelve false.

* get: Devuelve el elemento en el índice especificado.

* indexOf: Devuelve el índice de la primera ocurrencia del elemento especificado en el ArrayList.
               
* remove: Elimina la primera ocurrencia del valor especificado o del elemento en el subíndice especificado.

* size: Devuelve el número de elementos almacenados en el ArrayList.



## Set

No puede haber duplicados. Cada elemento debe ser único, por lo que si existe uno duplicado, no se agrega.

## Queue

Colección ordenada con extracción por el principio e inserción por el principio (LIFO – Last Input, First Output) o por el final (FIFO – First Input, First Output). Se permiten elementos duplicados.

## Map

Un grupo de pares objeto clave-valor, que no permite duplicados en sus claves. Existen: HashMap, HashTable, LinkedHashMap y TreeMap. 	