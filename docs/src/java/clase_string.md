---
outline: deep
---

# Clase String

String es una clase de Java que permite almacenar y manipular cadenas de caracteres.

``` java
String name = "Albania";
String lastname = "Musabeli";
```

A diferencia de un número, un String almacena texto.


## Métodos de la clase String

### charAt

Devuelve el caracter en el índice especificado.


```java
char c = str.charAt(1);  // Resultado: 'o' para "Hola"
```


### compareTo

Compara lexicográficamente dos cadenas.


```java
int resultado = str.compareTo("Hola");  // Resultado: 0 (si son iguales)
```


### contains

Comprueba si la cadena contiene una secuencia de caracteres dada.


```java
boolean contiene = str.contains("ol");  // Resultado: true
```


### equals

Compara dos cadenas para determinar si son iguales (sensible a mayúsculas y minúsculas).


```java
boolean esIgual = str.equals("Hola");  // Resultado: true
```

### equalsIgnoreCase

Compara dos cadenas de manera que no distingue entre mayúsculas y minúsculas.


```java
boolean esIgual = str.equalsIgnoreCase("hola");  // Resultado: true
```


### length

Devuelve la longitud de la cadena.


```java
int longitud = str.length();  // Resultado: 4 para "Hola"
```


### replace

Reemplaza todas las ocurrencias de un carácter por otro.


```java
String reemplazo = str.replace('o', 'a');  // Resultado: "Hala"
```


### split

Divide la cadena en partes basándose en una expresión regular.


```java
String[] partes = "Hola Mundo".split(" ");  // Resultado: ["Hola", "Mundo"]
```

### startsWith / endsWith

Verifica si la cadena comienza o termina con una secuencia específica.


```java
boolean empieza = str.startsWith("Ho");  // Resultado: true
boolean termina = str.endsWith("la");    // Resultado: true
```


### substring

* Devuelve una subcadena que comienza en beginIndex e incluye hasta endIndex - 1.


```java
String sub = str.substring(1, 3);  // Resultado: "ol"
```


* Devuelve una subcadena que comienza en beginIndex hasta el final.


```java
String sub = str.substring(1);  // Resultado: "ola"
```


### toLowerCase / toUpperCase

Convierte todos los caracteres de la cadena a minúsculas o mayúsculas, respectivamente.


```java
String min = str.toLowerCase();  // Resultado: "hola"
String may = str.toUpperCase();  // Resultado: "HOLA"
```

### trim

Elimina los espacios en blanco al inicio y al final de la cadena.


```java
String strConEspacios = "  Hola  ";
String strSinEspacios = strConEspacios.trim();  // Resultado: "Hola"
```