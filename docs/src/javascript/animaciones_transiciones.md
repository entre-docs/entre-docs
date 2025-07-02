---
outline: deep
---

# Animaciones y transiciones

JavaScript puede iniciar y controlar animaciones y transiciones CSS para crear efectos visuales dinámicos. Esto permite que los elementos se muevan, cambien de tamaño, se desvanezcan, etc.


```js
// Iniciar una animacion CSS
elemento.style.animationName = "mover";
elemento.style.animationDuration = "2s";
elemento.style.animationTimingFunction = "ease";

// Controlar una transicion CSS
elemento.style.transitionProperty = "width";
elemento.style.transitionDuration = "1s";
elemento.style.width = "200px";  //La transicion se activa
```

Este ejemplo se visualiza la propiedad animationName en el estilo de un elemento en JavaScript que se utiliza para establecer el nombre de la animación CSS que se aplicará al elemento. La propiedad transitionProperty en JavaScript se utiliza para establecer las propiedades CSS que estarán sujetas a una transición. 