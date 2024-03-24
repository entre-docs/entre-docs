---
outline: deep
---

# Vitest 
## Configuración e instalaciones para pruebas unitarias

### Vitest - jsdom - testing-library/react
```bash
yarn add --dev vitest jsdom @testing-library/react
```
### Crear archivo `vitest.config.ts`
```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom'
    },
})
```
### Agregar en archivo `tsconfig.json`
```json
{
  "compilerOptions": {
    "types": ["vitest/globals"]
  }
}
```