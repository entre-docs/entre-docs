---
outline: deep
---

# Cambiar clases y estilos

JavaScript te permite cambiar las clases de los elementos HTML y, por lo tanto, aplicar diferentes estilos. También puedes modificar directamente los estilos CSS de un elemento utilizando JavaScript.


```js
// Cambiar la clase de un elemento html
var elemento = document.getElementById("miElemento");
elemento.className = "nuevaClase";

// Modificar estilos CSS directamente
elemento.style.backgroundColor = "red";
elemento.style.fontSize = "20px";
```

Nota. Esto modifica dinámicamente el estilo del elemento especificado.

Asegurarse de reemplazar 'miElemento' con el ID o selector correcto del elemento.
Además, se puede cambiar cualquier propiedad de estilo usando elementoParaCambiar.style.propiedadCSS.