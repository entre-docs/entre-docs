---
outline: deep
---

::: tip Angular v19
:::

# linkedSignal

Es una señal (writable signal) que se actualiza automáticamente cuando cambia el valor de otra señal. Es una forma de crear relaciones de dependencia entre diferentes partes de tu aplicación.

```ts
import { Component } from '@angular/core';
import { signal, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    <input type="number" [(ngModel)]="number">
    <input type="number" [value]="doubledNumber" disabled>
  `,
})
export class MyComponent {

  number = signal<number>(0);
  
  doubledNumber = linkedSignal(() => {
    return this.number() * 2;
  }, this.number);
}
```