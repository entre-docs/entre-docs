---
outline: deep
---

# Formularios Reactivos

 Son una poderosa característica de Angular que permite manejar formularios de manera programática. A diferencia de los formularios basados en plantillas, los formularios reactivos son impulsados por el código, lo que proporciona un control más preciso sobre el estado y la validación del formulario.


|Formulario Reactivo|Un formulario basado en código que utiliza ReactiveFormsModule para gestionar el estado y las acciones del formulario|
|-------------------------------|--------------------------------|
|FormControl|Representa el estado y el valor de un campo de formulario. Se asocia con un elemento de formulario en el HTML|
|FormGroup|Un grupo de controles que facilita la gestión de formularios complejos|
|FormBuilder|Una clase que simplifica la creación de formularios reactivos mediante la construcción de FormGroup y FormControl|


## Creación de un Formulario Reactivo

### Importar módulos necesarios

En las páginas donde se quiera implementar formularios reactivos debemos realizar el import en el typescript. Cuando se importa **ReactiveFormsModule** en la aplicación Angular, se está habilitando la funcionalidad necesaria para trabajar con formularios reactivos.

```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.scss'
})
export class FormulariosComponent { }
```

### Crear el formulario

Lo siguiente es codificar en el tyscript la configuración del formulario reactivo, asociándolo a un formulario, indicando los campos y validaciones que tendrá mediante la librería FormBuilder.

``` ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.scss'
})
export class FormulariosComponent {

  miFormulario!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
}
```

### Vincular el formulario en HTML

Una vez configurado el formulario, el siguiente paso será asociarlo al formulario construido en HTML mediante la vinculación de las variables creadas en el TS con los componentes del formulario del HTML, incluyendo el evento ngSubmit para que el formulario conozca que hacer cuando el usuario decida enviar los datos.


```html
<form [formGroup]="miFormulario" (ngSubmit)="onSubmit()" novalidate>
  <div class="mb-3">
    <label for="nombre" class="form-label">Nombre</label>
    <input formControlName="nombre" id="nombre"
            type="text" class="form-control"/>
  </div>

  <div class="mb-3">
    <label for="email" class="form-label">Correo electrónico</label>
    <input formControlName="email" id="email"
            type="email" class="form-control"/>
  </div>

  <button type="submit" class="btn btn-primary"
        [disabled]="miFormulario.invalid">
    Enviar
  </button>
</form>
```

::: tip Importante

El atributo *novalidate* en la etiqueta ```<form>``` desactiva las validaciones HTML5 automáticas del navegador.
:::

Cuando se usa formularios reactivos o basados en plantilla en Angular, uno controla completamente las validaciones desde el código (con Validators, etc.). Por eso, no se necesita —y de hecho se evita— que el navegador realice sus propias validaciones automáticas.

* Sin novalidate: Si el campo tiene required o tipo email, el navegador podría impedir el envío del formulario antes de que Angular valide.

* Con novalidate: El navegador no hace validaciones automáticas, y Angular se encarga de todo el control del formulario: errores, estilos, validación al enviar, etc.


### Manejar el envío del formulario

Como último paso se debe codificar el evento del envío del formulario (submit) creando la función que se asoció a este evento en el paso anterior indicando qué debe hacer con los datos obtenidos y en caso de que sea necesario a donde enviar esta información.

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  miFormulario!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submitForm() {
    if (this.miFormulario.valid) {
      // Procesar los datos del formulario

      // Así se puede obtener los datos de un campo del formulario
      console.log("Resultado: " + this.miFormulario.get('nombre')!.value);
    }
  }
}
```


## Validaciones de Formularios

* **Validators**: Un conjunto de funciones que se utilizan para realizar validaciones en los
campos del formulario.
* **Validation Errors**: Mensajes de error asociados con un campo después de que una
validación falla.

### Aplicar Validadores al Formulario

```ts
this.miFormulario = this.fb.group({
  nombre: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]]
});
```

### Mostrar mensajes de error en HTML

```html
<form [formGroup]="miFormulario" (ngSubmit)="submitForm()">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" formControlName="nombre">
  <div *ngIf="miFormulario.get('nombre')?.hasError('required')">
    Nombre es obligatorio.
  </div>

  <label for="email">Email:</label>
  <input type="email" id="email" formControlName="email">
  <div *ngIf="miFormulario.get('email')?.hasError('email')">
    Email no válido.
  </div>

  <button type="submit">Enviar</button>
</form>
```

### Estilizar errores con CSS

```css
div {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
```


### Ver el resultado

<p align="center">
  <img src="/ejemplo_form_reactivo.png" width="500" alt="form_reactivo"/>
</p>