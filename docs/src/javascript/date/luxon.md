---
outline: deep
---

# Luxon

## Instalación
```bash
npm install luxon
```

## Formatear fecha YYYY/MM/DD

```ts
import { DateTime } from 'luxon';

const now = DateTime.now();
const formattedDate = now.toFormat('yyyy/MM/dd'); // Ejemplo: '2024/08/16'
```

## Validar un string en formato YYYY/MM/DD
```ts
import { DateTime } from 'luxon';

// Validar una fecha correcta
const date1 = DateTime.fromFormat('2024/08/16', 'yyyy/MM/dd');
console.log(date1.isValid); // true
```