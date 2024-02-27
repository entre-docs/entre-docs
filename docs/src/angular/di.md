---
outline: deep
---

# Inyección de Dependencias

Mecanismo mediante el cual los componentes, servicios y otros objetos de la aplicación reciben sus dependencias desde el exterior, en lugar de crearlas internamente. Este proceso se lleva a cabo mediante el sistema de inyección de dependencias de Angular, que permite que las dependencias necesarias se proporcionen de manera declarativa y se resuelvan automáticamente durante la creación de instancias de los componentes o servicios.

## Creacion de un servicio

```ts
import { Injectable } from '@angular/core';

/**
 * providedIn: 'root',
 * Servicio debe ser proporcionado y gestionado a nivel de la aplicación.
 * Esto significa que Angular creará una única instancia del servicio y la compartirá globalmente
*/
@Injectable({
  providedIn: 'root',
})
export class UserService {
  
}
```

## Inyección de dependencias en el constructor

```ts
constructor(private userService: UserService);
```

## Inyección de dependencias utilizando la función inject

```ts
import { inject } from '@angular/core';

class MyComponent  {

  private userService = inject(UserService); 

}
```
