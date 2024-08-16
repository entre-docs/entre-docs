---
outline: deep
---

# Métodos Nativos de JavaScript para Manejar Fechas

## Obtener fecha actual

```js
const now = new Date();
```

## Obtener Hora

::: tip INFO
Cuando se llama a getHours() sobre el objeto now, este método devuelve la hora correspondiente a la fecha y hora que now representa.
El valor devuelto es un número entero entre 0 y 23, donde:

* 0 representa la medianoche (12:00 AM).
* 1-11 representan las horas desde 1:00 AM hasta 11:00 AM.
* 12 representa el mediodía (12:00 PM).
* 13-23 representan las horas desde 1:00 PM hasta 11:00 PM.
:::

```js
const hours = now.getHours(); // Devuelve la hora actual (0-23)
```

## Marca de tiempo (timestamp)
::: tip INFO
 getTime() :  se utiliza con objetos de tipo Date para obtener el número de milisegundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC (también conocido como Unix Epoch o época Unix) hasta la fecha y hora representadas por el objeto Date.
:::
```js
// Ejemplo:  fecha y hora actuales  -  16 de agosto de 2024, a las 12:34:56 UTC:
const timestamp = now.getTime();
console.log(timestamp); // Output: 1726491296000
```

## Convertir a ISO string

::: tip INFO
**toISOString()** en JavaScript convierte una fecha y hora representada por un objeto Date en una cadena de texto en formato ISO 8601.
:::

```js
const isoString = now.toISOString();
console.log(isoString); // Output: '2024-08-16T12:34:56.789Z';
```

## Minutos en formato String
::: tip INFO
El método padStart(2, '0') asegura que la cadena tenga al menos 2 caracteres. Si la longitud de la cadena es menor que 2, padStart() añade 0 al principio hasta que alcance la longitud deseada.
:::
```js
const now = new Date('2024-08-16T14:05:00');
const minutes = now.getMinutes().toString().padStart(2, '0');
console.log(minutes); // Output: "05"
```
```js
const now = new Date('2024-08-16T14:30:00');
const minutes = now.getMinutes().toString().padStart(2, '0');
console.log(minutes); // Output: "30"
```

## Verifica si una cadena de texto representa una fecha válida (YYYY/MM/DD)

```ts
/**
 * @param dateString - La cadena de texto que se va a verificar.
 * @returns true si la cadena representa una fecha válida, false en caso contrario.
 */
const isValidDate = (dateString: string): boolean => {
  // Expresión regular para validar el formato YYYY/MM/DD
  const regex = /^\d{4}\/\d{2}\/\d{2}$/;

  // Verifica si la cadena cumple con el formato esperado
  if (!regex.test(dateString)) return false;

  // Reemplaza las barras (/) con guiones (-) para crear una fecha válida en JavaScript
  const date = new Date(dateString.replace(/\//g, '-'));

  // Verifica si la fecha es una instancia de Date y si no es NaN
  return date instanceof Date && !isNaN(date.getTime());
}
```