---
outline: deep
---

# @for

La directiva estructural **@for** renderiza repetidamente el contenido de un bloque para cada elemento de un array.

## component.ts

```ts
frameworks: string[] = ['Angular', 'vue', 'React', 'Svelte', 'Astro']
```

## component.html

::: tip Opciones
<p>@empty: Contenido que se renderizará si no hay elementos en el array</p>
Dentro de los contenidos de @for,  están disponibles varias variables implícitas:

* **$count**: Número de elementos en la colección iterada (number)
* **$index**: Índice de la fila actual (number)
* **$first**: Si la fila actual es la primera fila (boolean)
* **$last**: Si la fila actual es la última fila (boolean)
* **$even**: Si el índice de la fila actual es par (boolean)
* **$odd**: Si el índice de la fila actual es impar (boolean)
:::

```html
 <ul>
@for (framework of frameworks; track framework; let i = $index, primero = $first ) {
    <li>
        {{ i + 1 }} {{ framework }}
    </li>
}
@empty {
    <p>El array está vacio</p>
}
</ul>
```

