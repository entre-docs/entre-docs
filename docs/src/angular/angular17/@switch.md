---
outline: deep
---

# @switch

La directiva estructural **@switch** está inspirada en la declaración switch de JavaScript.

## component.ts

```ts
type Grade = 'A' | 'B' | 'S';
public grado = signal<Grade>('A');
```

## component.html

```html
 @switch ( grado() ) {
     @case ('S') {
        <p>Tienes grado S</p>
    }
    @case ('A') {
        <p>Tienes grado A</p>
    }
    @case ('B') {
        <p>Tienes grado B</p>
    }
    @default {
        <p>No tienes un grado registrado</p>
    }
}
```