---
outline: deep
---

# Clase String y sus métodos

La clase **String** es una de las clases más utilizadas y se encuentra en el paquete **java.lang**.

Representa una secuencia de caracteres y es inmutable, lo que significa que, una vez que se crea un objeto String, *no se puede modificar*.

Si se realiza cualquier operación que parezca modificarlo, se crea un nuevo objeto String.


# Creación de un string

```java
String str = "Hola";
String str2 = new String("Mundo");
```

## charAt

Devuelve el caracter en el índice especificado.

::: info Estructura:
charAt(int index)
:::

```java
char c = str.charAt(1);  // Resultado: 'o' para "Hola"
```


## compareTo

Compara lexicográficamente dos cadenas.

::: info Estructura:
compareTo(String anotherString)
:::

```java
int resultado = str.compareTo("Hola");  // Resultado: 0 (si son iguales)
```


## contains

Comprueba si la cadena contiene una secuencia de caracteres dada.

::: info Estructura:
contains(CharSequence s)
:::

```java
boolean contiene = str.contains("ol");  // Resultado: true
```


## equals

Compara dos cadenas para determinar si son iguales (sensible a mayúsculas y minúsculas).

::: info Estructura:
equals(Object anObject)
:::

```java
boolean esIgual = str.equals("Hola");  // Resultado: true
```

## equalsIgnoreCase

Compara dos cadenas de manera que no distingue entre mayúsculas y minúsculas.

::: info Estructura:
equalsIgnoreCase(String anotherString)
:::

```java
boolean esIgual = str.equalsIgnoreCase("hola");  // Resultado: true
```


## length

Devuelve la longitud de la cadena.

::: info Estructura:
length()
:::

```java
int longitud = str.length();  // Resultado: 4 para "Hola"
```


## replace

Reemplaza todas las ocurrencias de un carácter por otro.

::: info Estructura:
replace(char oldChar, char newChar)
:::


```java
String reemplazo = str.replace('o', 'a');  // Resultado: "Hala"
```



## split

Divide la cadena en partes basándose en una expresión regular.

::: info Estructura:
split(String regex)
:::

```java
String[] partes = "Hola Mundo".split(" ");  // Resultado: ["Hola", "Mundo"]
```

## startsWith / endsWith

Verifica si la cadena comienza o termina con una secuencia específica.

::: info Estructura:
startsWith(String prefix)
endsWith(String suffix)
:::

```java
boolean empieza = str.startsWith("Ho");  // Resultado: true
boolean termina = str.endsWith("la");    // Resultado: true
```


## substring

* Devuelve una subcadena que comienza en beginIndex e incluye hasta endIndex - 1.

::: info Estructura:
substring(int beginIndex, int endIndex)
:::

```java
String sub = str.substring(1, 3);  // Resultado: "ol"
```


* Devuelve una subcadena que comienza en beginIndex hasta el final.

::: info Estructura:
substring(int beginIndex)
:::

```java
String sub = str.substring(1);  // Resultado: "ola"
```


## toLowerCase / toUpperCase

Convierte todos los caracteres de la cadena a minúsculas o mayúsculas, respectivamente.

::: info Estructura:
toLowerCase()
toUpperCase()
:::

```java
String min = str.toLowerCase();  // Resultado: "hola"
String may = str.toUpperCase();  // Resultado: "HOLA"
```

## trim

Elimina los espacios en blanco al inicio y al final de la cadena.

::: info Estructura:
trim()
:::

```java
String strConEspacios = "  Hola  ";
String strSinEspacios = strConEspacios.trim();  // Resultado: "Hola"
```
