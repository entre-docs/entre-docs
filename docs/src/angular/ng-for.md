---
outline: deep
---

# *ngFor

## Definición
Directiva estructural que se utiliza para iterar sobre una colección de elementos en un componente y renderizar dinámicamente cada elemento en el DOM.

## Ejemplos

### Renderizar elementos del array

```ts
// Componente
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-de-elementos',
  templateUrl: './lista-de-elementos.component.html',
})
export class ListaDeElementosComponent {
  elementos: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
}
```

```html
<!-- HTML del componente -->
<ul>
  <li *ngFor="let elemento of elementos; let i = index">{{ elemento }}</li>
</ul>
```


::: info
La directiva *ngFor se encargará de repetir automáticamente el elemento "li" para cada elemento en la matriz elementos, lo que resultará en una lista de elementos en la página web.
:::
