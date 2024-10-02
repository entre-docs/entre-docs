---
outline: deep
---

# *ngSwitch

## Definición
Directiva estructural que se utiliza para mostrar contenido condicionalmente en función del valor de una expresión. Es útil cuando tienes varios casos y deseas mostrar diferentes elementos o componentes en función del valor de una expresión.

## Ejemplo
```ts
// Componente
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-switch',
  templateUrl: './ejemplo-switch.component.html',
})
export class EjemploSwitchComponent {
  opcionSeleccionada: number = 1;
}
```

```html
<!-- HTML del componente -->
<div [ngSwitch]="opcionSeleccionada">
  <p *ngSwitchCase="1">Has seleccionado la Opción 1.</p>
  <p *ngSwitchCase="2">Has seleccionado la Opción 2.</p>
  <p *ngSwitchCase="3">Has seleccionado la Opción 3.</p>
  <p *ngSwitchDefault>Selecciona una opción válida.</p>
</div>
```

::: info
*ngSwitchDefault se utiliza como un caso por defecto para manejar el caso en el que numeroSeleccionado no coincide con ningún caso específico.
:::
