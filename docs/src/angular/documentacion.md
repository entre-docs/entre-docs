---
outline: deep
---

# Documentación en Angular

Angular utiliza comentarios de estilo TypeScript (JSDoc) para generar documentación. La herramienta más común para esto en Angular es Compodoc aunque existen otras librerías.


## JSDoc

Es un conjunto de **convenciones** para la documentación de código en JavaScript y TypeScript. Estas convenciones se aplican mediante comentarios especiales que comienzan con /** justo encima de la entidad (como funciones, clases o variables) que se está documentando.

Ejemplo:
```ts
/**
 * Suma dos números y devuelve el resultado.
 * @param a Primer número
 * @param b Segundo número
 * @returns La suma de a y b
 */
function sumar(a: number, b: number): number {
  return a + b;
}
```


## Compodoc

Compodoc es una herramienta de documentación automática para proyectos Angular. Analiza el proyecto y genera un sitio web interactivo con toda la documentación de componentes, módulos, servicios, interfaces, rutas, etc.

### Instalar Compodoc

```bash
npm install -g @compodoc/compodoc
```
ó
```bash
npm install --save-dev @compodoc/compodoc
```


## Directivas y buenas prácticas

### @description

Se utiliza para proporcionar una descripción general del componente.

```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**
 * @description // [!code ++]
 * Componente de encabezado de la aplicación.
 * Este componente muestra el encabezado con el logotipo 
 * y el menú de navegación.
 */
@Component({
  selector: 'app-pruebas-unitarias',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pruebas-unitarias.component.html',
  styleUrl: './pruebas-unitarias.component.scss'
})
export class PruebasUnitariasComponent {
  miFormulario!: FormGroup;
  resultado!: number;
}
```

### @param

Se utiliza para describir los parámetros de una función o método. Proporciona detalles sobre el tipo de datos, el propósito y cualquier restricción asociada al parámetro.

```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pruebas-unitarias',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pruebas-unitarias.component.html',
  styleUrl: './pruebas-unitarias.component.scss'
})
export class PruebasUnitariasComponent {
  miFormulario!: FormGroup;
  resultado!: number;

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      numero1: ['', Validators.required],
      numero2: ['', Validators.required]
    });
  }

  sumarDesdeFormulario(): void {
    const { numero1, numero2 } = this.miFormulario.value;
    this.sumar(numero1, numero2);
  }

  /**
   * Suma dos números.
   * @param {number} a - El primer número. // [!code ++]
   * @param {number} b - El segundo número. // [!code ++]
   * @returns {number} La suma de los dos números.
   */
  sumar(a: number, b: number): void {
    this.resultado = a + b;
  }
}
```

### @returns

Describe el valor de retorno de una función o método. Proporciona detalles sobre el tipo de datos y el significado del valor devuelto.

```ts
/**
 * Suma dos números.
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} La suma de los dos números. // [!code ++]
 */
sumar(a: number, b: number): void {
  this.resultado = a + b;
}
```

### @usageNotes

Se utiliza para proporcionar ejemplos de uso del módulo.

Cuando se documentan los componentes, directivas, servicios o cualquier otro elemento en TypeScript con JSDoc, se puede incluir secciones personalizadas para proporcionar notas de uso.

```ts
/**
 * @description
 * Componente de encabezado de la aplicación.
 * Este componente muestra el encabezado con el logotipo y el menú de navegación.
 */

/**
 * @usageNotes // [!code ++]
 * 1. Importa este módulo en tu aplicación principal.
 * 2. Añade el selector 'app-encabezado' en tu plantilla para mostrar el encabezado.
 * 3. Añade el selector 'app-pie-pagina' para mostrar el pie de página.
 */

@Component({
  selector: 'app-pruebas-unitarias',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pruebas-unitarias.component.html',
  styleUrl: './pruebas-unitarias.component.scss'
})
```


## Generar documentación

Una vez agregadas las directivas de documentación al código, se puede generar la documentación usando **Compodoc** con el siguiente comando:

```bash
npx compodoc -p tsconfig.json
```

Esto generará una nueva carpeta de documentación dentro del proyecto.