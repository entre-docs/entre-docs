---
outline: deep
---

# @Output()

El Decorador @Output se utiliza para exponer eventos desde un componente hijo, para que puedan ser escuchados por un componente padre. 

## Ejemplo 1: Enviar datos desde el componente hijo al padre

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

  @Output()// [!code ++]
  public valueSearchBox: EventEmitter<string> = new EventEmitter// [!code ++]

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





## Ejemplo 2: Emitir evento sin datos desde componente hijo hacia el padre

### Componente hijo
::: code-group
```ts [child.component.ts]

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button (click)="emitSignal()">Emitir Señal</button>// [!code ++]
  `,
})
export class ChildComponent {
  /** Alterernativa:*/
  //@Output() public signalEvent: EventEmitter<void> = new EventEmitter

  @Output() public signalEvent = new EventEmitter<void>();// [!code ++]

  emitSignal() {
    this.signalEvent.emit();// [!code ++]
  }
}
```
:::


### Componente padre
::: code-group

```ts [parent.component.ts]

import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child (signalEvent)="handleSignalEvent()"></app-child>// [!code ++]
  `,
})
export class ParentComponent {

  handleSignalEvent() {// [!code ++]
    console.log('Señal recibida desde el componente hijo');// [!code ++]
  }// [!code ++]
}

```
:::