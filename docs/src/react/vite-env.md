---
outline: deep
---

# Configurar variables de entorno

## Archivos .env

Vite utiliza dotenv para cargar variables de entorno adicionales desde los siguientes archivos en el directorio.
```
.env                # cargado en todos los casos
.env.local          # cargado en todos los casos, ignorado por git
.env.[modo]         # solo cargado en el modo especificado
.env.[modo].local   # solo cargado en el modo especificado, ignorado por git
```

Solo **`VITE_SOME_KEY`** será expuesto como **`import.meta.env.VITE_SOME_KEY`** en el código fuente del cliente, pero DB_PASSWORD no.

```ts
console.log(import.meta.env.VITE_SOME_KEY) // "123"
console.log(import.meta.env.DB_PASSWORD) // undefined
```

## IntelliSense para TypeScript

Para establecer definiciones de tipo a variables de entorno, es necesario utilizar el archivo **`vite-env.d.ts`** en el directorio src
::: code-group
```ts [vite-env.d.ts]
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_URL: string
    readonly VITE_API_KEY: string
    
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
```
:::
## Variables por defecto

Vite expone variables de entorno en el objeto especial import.meta.env.
Algunas variables integradas están disponibles en todos los casos:

- **`import.meta.env.MODE`**: {string} el modo en que la aplicación está funcionando.
- **`import.meta.env.PROD`**: {boolean} si la aplicación está funcionando en producción (ejecutando el servidor de desarrollo con `NODE_ENV='production'` o ejecutando una aplicación construida con `NODE_ENV='production'`).
- **`import.meta.env.DEV`**: {boolean} si la aplicación está funcionando en desarrollo (siempre es lo contrario de `import.meta.env.PROD`)
