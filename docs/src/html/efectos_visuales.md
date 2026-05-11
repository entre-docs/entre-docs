---
outline: deep
---

# Efectos visuales en CSS


## box-shadow

Agrega sombra.

```css
.card {
  box-shadow: 2px 2px 10px gray;
}
```


## transition

Transiciones suaves.

```css
button {
  transition: background-color 0.3s;
}
```


## animation

Define animaciones.

::: code-group
```css [Ejemplo Aparecer]
@keyframes aparecer {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

div {
  animation: aparecer 2s;  /* [!code ++] */
}
```

```css [Ejemplo Mover]
@keyframes mover {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

div {
  animation: mover 1s; /* [!code ++] */
}
```