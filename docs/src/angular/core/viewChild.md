---
outline: deep
---

# @ViewChild()

Decorador en Angular que se utiliza para obtener la instancia de un componente, una directiva o un elemento del DOM. Permite acceder y manipular propiedades o métodos de esos elementos directamente desde el componente que los contiene.

## Ejemplo 1: Acceder a valores de un input


::: code-group
```ts [component.ts]
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @ViewChild('myInput') myInput: ElementRef;

  logInputValue() {
    // Acceder al valor del input utilizando nativeElement
    console.log('Valor del input:', this.myInput.nativeElement.value);
  }
}
```

```html [component.html]
<input #myInput type="text" />
<button (click)="logInputValue()">Obtener Valor</button>
```
:::