---
outline: deep
---

# Signal inputs

Los inputs de tipo Signal permiten enlazar valores desde componentes padres. Estos valores se exponen utilizando un Signal y pueden cambiar durante el ciclo de vida de tu componente.

## Tipos de signal inputs

**``Inputs opcionales``**:
Los inputs son opcionales por defecto, a menos que utilices input.required. Puedes especificar un valor inicial explícito, o Angular usará undefined de manera implícita.

**``Inputs requeridos``**:
Los inputs requeridos siempre tienen un valor del tipo de dato especificado. Se declaran usando la función input.required.

```ts
import {Component, input} from '@angular/core';
@Component({...})
export class MyComp {
    
  // optional
  firstName = input<string>();         // InputSignal<string|undefined>
  age = input(0);                      // InputSignal<number>
  
  // required
  lastName = input.required<string>(); // InputSignal<string>
}
```

## Alias de un input

Angular utiliza el nombre de la propiedad de la clase como el nombre del input. Se peude usar alias en los inputs para cambiar su nombre público y que sea diferente.

```ts
public age = input(0, {alias: 'studentAge'});
```

::: tip Nota
Esto permite a los usuarios enlazar a tu input usando [studentAge], mientras que dentro de tu componente puedes acceder a los valores del input utilizando this.age
:::