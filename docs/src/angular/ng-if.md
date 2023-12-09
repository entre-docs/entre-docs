# *ngIf

## Definición 
Directiva estructural que permite condicionar la aparición o desaparición de elementos del DOM (Document Object Model) en función de una expresión booleana.

## Evaluar desde una variable del componenete

```ts
// Componente de Angular
export class MiComponente {
  mostrarTexto: boolean = true;

  esHoraDeMostrar(): boolean {
    // Lógica para determinar si se debe mostrar el elemento
    return true;
  }
}
```

```html
<!-- HTML del componente -->
<p *ngIf="mostrarTexto">Este párrafo se mostrará si mostrarTexto es verdadero.</p>

<!-- HTML del componente -->
<p *ngIf="esHoraDeMostrar()">Este párrafo se mostrará si la función esHoraDeMostrar() devuelve true.</p>

```

## Evaluar desde una variable del *ngFor

```html
<ul>
  <li *ngFor="let item of items" *ngIf="item.activo">{{ item.nombre }}</li>
</ul>

```

## Uso de ng-template para if-else
Usar ngIf junto con ng-template para crear una estructura condicional con un bloque "else":

```ts
// Componente
mostrarElemento = false;
```

```html
<!-- Usar ngIf para mostrar o no mostrar un elemento -->
<div *ngIf="mostrarElemento; else elseBlock">
  <p>Este es el elemento que se mostrará</p>
</div>

<!-- ng-template para el bloque "else" -->
<ng-template #elseBlock>
  <p>Este es el contenido que se mostrará cuando mostrarElemento es false</p>
</ng-template>

```

