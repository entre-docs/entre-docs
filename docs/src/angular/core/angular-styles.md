---
outline: deep
---

# Estilos en Angular

## Establecer estilos desde el componente

### Ejemplo: color

Para establecer el color de fondo de un div utilizando una variable que contiene el nombre de un color, se utiliza la propiedad de estilo background-color y la interpolación de Angular.

```ts
// Componente de Angular
export class MiComponente {
  colorFondo: string = 'red';
}
```

```html
<!-- HTML del componente -->
<div [style.background-color]="colorFondo">
  Contenido del div con color de fondo dinámico.
</div>

```

### Alternativa utilizando ngStyle

<p>La directiva estructural ngStyle para aplicar estilos dinámicos.
La clave es el nombre de la propiedad de estilo y el valor es la expresión que evalúa al valor deseado para esa propiedad. ngStyle es más versátil cuando se requiere aplicar múltiples estilos dinámicos al mismo elemento.</p>

```html
<div [ngStyle]="{ 'background-color': colorFondo }">Contenido del div</div>

<div [ngStyle]="{ 'background-color': colorFondo, 'color': textoColor }">Contenido del div</div>

```

## Establecer estilos de una clase css

### [class.nombreDeLaClase]:

::: info [class.nombreDeLaClase]
Supongamos que tenemos un componente con una variable booleana esActivo, y queremos aplicar la clase activo a un botón cuando esActivo sea verdadero.
:::

```html
<button [class.activo]="esActivo">Botón</button>
```

### ngClass:

::: info 
Ahora tenemos dos variables booleanas: esActivo e esInactivo, y queremos aplicar diferentes clases al botón según estas variables.
:::

```html
<button [ngClass]="{ 'btn_activo': esActivo, 'btn_inactivo': esInactivo }">Botón</button>

```
<br>

::: tip nglass
En este caso, si esActivo es true, se aplicará la clase btn-activo. Si esInactivo es true, se aplicará la clase btn_inactivo. Si ambas variables son falsas, no se aplicará ninguna clase adicional.
:::