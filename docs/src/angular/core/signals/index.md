---
outline: deep
---

# Signals - Operaciones Básicas

## Conceptos básicos de Signals

**``Signal``**: Es una fuente de datos reactivos. Cuando su valor cambia, notifica automáticamente a cualquier parte del código que lo esté usando.

**``Effect``**: Permite ejecutar lógica en respuesta a cambios en uno o más signals.

**``Computed``**: Son signals derivados que dependen de otros signals y recalculan su valor cuando alguno de los signals de los que dependen cambia.

### Operacion basica con signals

```ts
import { signal } from '@angular/core';

const count = signal(0); // Crear un signal inicializado en 0

// Leer el valor del signal
console.log(count()); // Output: 0

// Actualizar el valor del signal
count.set(1);
console.log(count()); // Output: 1

// Método de actualización considerando su valor actual
count.update(value => value + 1);
console.log(count()); // Output: 2

```

### Effects

Los efectos (Effect) permiten ejecutar lógica cuando cambian uno o más signals. Un ejemplo simple sería registrar en la consola cada vez que el valor de un signal cambia:
```ts
import { effect } from '@angular/core';

const count = signal(0);

effect(() => {
  console.log('El valor de count cambió a:', count());
});

// Cambiamos el valor del signal
count.set(5); // Se activará el effect y mostrará: "El valor de count cambió a: 5"

```

### Computed

Los signals computados (Computed) derivan su valor a partir de otros signals. Angular los recalcula automáticamente cuando los signals en los que dependen cambian.
```ts
import { computed, signal } from '@angular/core';

const count = signal(0);
const doubleCount = computed(() => count() * 2);

console.log(doubleCount()); // Output: 0

count.set(5);
console.log(doubleCount()); // Output: 10

```