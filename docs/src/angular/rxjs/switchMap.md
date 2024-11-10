---
outline: deep
---

# switchMap

El operador ***switchMap*** permite transformar y reemplazar un Observable con otro, cancelando automáticamente cualquier emisión anterior si una nueva emisión ocurre.

Es especialmente útil en situaciones en las que se necesitan realizar peticiones dependientes, como obtener datos de un usuario y luego, en base a eso, consultar otra API.

## Peticiones dependientes


::: code-group
```ts [services.ts]

getUserDetails(id: number) {
  return this.httpClient.get<User>(`https://api.example.com/users/${id}`);
}

getUserOrders(userId: number) {
  return this.httpClient.get<Order[]>(`https://api.example.com/users/${userId}/orders`);
}
```

```ts [component.ts]
// Usando switchMap para encadenar ambas peticiones:
this.userService.getUserDetails(1).pipe(
  switchMap((user) => {
    // Usamos los datos del usuario para buscar sus pedidos
    return this.userService.getUserOrders(user.id);
  })
).subscribe({
  next: (orders) => {
    console.log("Órdenes del usuario:", orders);
  },
  error: (error) => {
    console.error("Error en la petición:", error);
  }
});
```
:::

## Manejo de Errores

```ts
this.userService.getUserDetails(1).pipe(
  // Manejo de errores de la primera petición
  catchError((error) => {
    console.error("Error en la primera petición (detalles del usuario):", error);
    // Retornamos un observable vacío o un valor predeterminado para continuar el flujo
    return of(null);  // Retorna un valor por defecto o nulo
  }),
  switchMap((user) => {
    // Si la primera petición tuvo éxito, la segunda petición se ejecuta
    if (user) {
      // Usamos los datos del usuario para buscar sus pedidos
      return this.userService.getUserOrders(user.id).pipe(
        // Manejo de errores de la segunda petición
        catchError((error) => {
          console.error("Error en la segunda petición (órdenes del usuario):", error);
          // Puedes retornar un valor predeterminado para la segunda petición
          return of([]);  // Retorna un array vacío si hay un error en la segunda petición
        })
      );
    } else {
      // Si la primera petición falló y retornó `null`, no hacemos la segunda petición
      return of([]);  // Retorna un array vacío si no hay un usuario válido
    }
  })
).subscribe({
  next: (orders) => {
    console.log("Órdenes del usuario:", orders);
  },
  error: (error) => {
    // Este bloque maneja los errores que no se hayan manejado dentro del flujo de observables
    console.error("Error en el flujo de observables:", error);
  }
});

```