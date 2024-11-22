---
outline: deep
---

# tap

El operador tap se usa para realizar efectos secundarios en el flujo de datos sin modificar el valor emitido. Es útil para propósitos de depuración, registro de eventos, o para ejecutar acciones específicas sin alterar el flujo.

```ts
this.userService.getUserDetails(1).pipe(
  tap((user) => {
    console.log('Usuario obtenido:', user);
  }),
  switchMap((user) => this.userService.getUserOrders(user.id)),
  tap((orders) => {
    console.log('Órdenes obtenidas:', orders);
  })
).subscribe({
  next: (orders) => {
    console.log('Procesamiento completo:', orders);
  },
  error: (error) => {
    console.error('Error en el flujo:', error);
  }
});
```

## Casos de uso para tap:

* Registrar datos intermedios en el flujo.
* Activar procesos adicionales (como mostrar un spinner).
* Evitar mutaciones de datos.