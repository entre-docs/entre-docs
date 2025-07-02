---
outline: deep
---

# Instalación de Bootstrap 5

## Instalación con CDN

Agregar esto en la sección ```<head>``` del HTML:

```html
<!-- CSS de Bootstrap 5 -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- JS de Bootstrap 5 (requiere Popper para algunos componentes) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

```


## Instalación con NPM

Para proyectos más complejos o con herramientas como Angular, React, etc.


```bash
npm install bootstrap
```

Si se usa scss agregar:

```scss
@import "~bootstrap/scss/bootstrap";
```