---
outline: deep
---

# Output basado en funciones

La función output() declara un output en una directiva o componente. Los output permiten emitir valores a los componentes padres.

## Enviar datos desde el componente hijo al padre

### Componente hijo

::: code-group
```ts [child.component.ts]
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class SearchBoxComponent {

  // OutputEmitterRef<string>
  public valueSearchBox = output<string>()// [!code ++] 

  emitSearchValue(searchInput: string) {
    this.valueSearchBox.emit(searchInput)// [!code ++]
  }
}
```

```html [child.component.html]
<input
    #searchInput
    type="text"
    (keyup.enter)="emitSearchValue(searchInput.value)">
```
:::

### Componente padre: ts
::: code-group
```ts [parent.component.ts]

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  public value: string = '';

  search(searchTerm: string) {
    // Obtener dato desde el componente hijo
    this.value = searchTerm;// [!code ++]
  }

}
```

```html [parent.component.html]
<div>
    <shared-search-box (valueSearchBox)="search($event)"></shared-search-box>// [!code ++]
</div>
```
:::