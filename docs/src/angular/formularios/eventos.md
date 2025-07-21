---
outline: deep
---

# Eventos en Angular

## Click

Captura el evento de click en un elemento.

```html
<button (click)="onButtonClick()">Haz click</button>
```

## Change

Se dispara cuando el valor de un elemento cambia, como en un input.

Por ejemplo, si se desea capturar el evento change en un elemento específico y ejecutar una acción en Angular, se puede hacer utilizando el evento (change) en la plantilla HTML. Este evento es comúnmente utilizado en elementos como ```<input>```, ```<select>```, y ```<textarea>```

```html
<input type="text" (change)="onChange($event)">
```

## Key Down

Se dispara cuando una tecla se presiona.

En el typeScript se puede recibir la tecla que se ha presionado y decidir ejecutar alguna acción.

```html
<input type="text" (keydown)="onKeyDown($event)">
```


## Mouse Over

Detecta cuando el mouse se coloca sobre un elemento. Este código en la plantilla vincula el evento (mouseover) al método *onMouseOver()* en el componente de TypeScript. Este código se puede adaptar según las necesidades específicas y agregar la lógica que se quiera ejecutar cuando el mouse pase por encima del elemento.

```html
<div (mouseover)="onMouseOver()">Ingresar</div>
```

## NgModel Change

Se activa cuando el valor de un elemento vinculado a ngModel cambia.

```html
<input type="text" [(ngModel)]="valor" (ngModelChange)="onNgModelChange($event)">
```


## Router Events

Los "Router Events" o eventos del enrutador en Angular son eventos que se emiten cuando ocurren cambios en la navegación de la aplicación (cuando la ruta cambia).

Estos eventos son útiles para realizar tareas específicas en respuesta a cambios en la ruta de la aplicación. Este evento solo se codifica en el TS.

```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.scss'
})
export class FormulariosComponent {
  miFormulario!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Lógica cuando la navegación ha terminado
      }
    });
  }
}
```


## Submit

Se activa cuando se envía un formulario. El evento submit es comúnmente utilizado en formularios HTML y se puede capturar en Angular utilizando el evento (ngSubmit).

```html
<form (ngSubmit)="onSubmit()">
    <!-- Contenido del formulario -->
</form>
```