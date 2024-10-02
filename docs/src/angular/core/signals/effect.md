---
outline: deep
---

# Effect

Permiten ejecutar lógica cuando cambian uno o más signals.

## Definir el effect fuera del contructor o componente
Cuando defines un effect fuera del constructor o fuera del componente, este se ejecuta de manera global, independientemente del ciclo de vida del componente. Es decir, el effect no está ligado a la creación y destrucción del componente y seguirá activo mientras la aplicación esté corriendo.
```ts
import { signal, effect } from '@angular/core';

const count = signal(0);

// El effect se define fuera del componente
effect(() => {
  console.log('Count cambió a:', count());
});

@Component({
  selector: 'app-counter',
  template: `
    <p>{{ count() }}</p>
    <button (click)="increment()">Increment</button>
  `
})
export class CounterComponent {
  count = count;

  increment() {
    this.count.update(value => value + 1);
  }
}

```

### Consecuencias

* El effect permanece activo incluso si el componente que lo utiliza es destruido (por ejemplo, si navegas fuera de la vista que contiene el componente).
* No se libera automáticamente cuando el componente es destruido, lo que puede llevar a problemas de memoria si no se maneja adecuadamente.

## Effect dentro del constructor
Cuando se define el effect dentro del constructor de un componente, este se activa cuando el componente es creado y se destruye junto con el componente. Esto asegura que el effect esté ligado al ciclo de vida del componente.

```ts
import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>{{ count() }}</p>
    <button (click)="increment()">Increment</button>
  `
})
export class CounterComponent {
  count = signal(0);

  constructor() {
    // El effect está definido dentro del constructor
    effect(() => {
      console.log('Count cambió a:', this.count());
    });
  }

  increment() {
    this.count.update(value => value + 1);
  }
}

```

### Consecuencias

* El effect se ejecuta mientras el componente está activo.
* Se destruye automáticamente cuando el componente se destruye, lo que evita posibles fugas de memoria.
* Es más seguro en términos de limpieza, ya que Angular garantiza que el effect se elimine correctamente cuando el componente sea destruido