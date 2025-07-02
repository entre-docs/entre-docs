---
outline: deep
---

# Manipulación del DOM

Para seleccionar elementos HTML y modificar contenido.

## Seleccionar un elemento por su ID
```js
var elementoID = document.getElementById("miElemento");
```


## Seleccionar un elemento por su clase
```js
var elementosClase = document.getElementsByClassName("misElementos");
```


## Seleccionar elementos por su etiqueta
```js
var elementosEtiqueta = document.getElementsByTagName("div");
```


## Seleccionar elementos con selectores CSS
```js
var elementosCSS = document.querySelectorAll(".selectorCSS");
```


## Modificar un contenido de un elemento
```js
elementoID.innerHTML = "Nuevo Contenido";
```


## Cambiar el valor de un atributo
```js
elementoID.setAttribute("src","nueva-imagen.jpg");
```


## Crear un nuevo elemento y añadirlo
```js
var nuevoParrafo = document.createElement("p");
nuevoParrafo.textContext = "Este es un nuevo parrafo";
elementoID.appendChild(nuevoParrafo);
```


## Eliminar un elemento
```js
var elementoAEliminar = document.getElementById("eliminarEsto");
elementoAEliminar.parentNode.removeChild(elementoAEliminar);
```