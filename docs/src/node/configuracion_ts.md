# Configuración de Node con TypeScript

## Instalar en modo desarrollo Nodemon y TypeScript

```bash
npm install -D nodemon typescript
```

## Agregar en el package.json

```json
  "scripts": {
    "tsc": "tsc --init",
    "tsc:dev": "tsc --watch",
    "dev": "nodemon dist/app.js",
    "start": "node dist/app.js"
  }
```

## Ejecutar el comando

::: tip
* Se crea el archivo ***tsconfig.json***
:::

```bash
npm run tsc
```

## Agregar en el archivo tsconfig.json

```json
{
    "compilerOptions": {
        "target": "es2016",
        "module": "commonjs",
        "moduleResolution": "Node10",
        "sourceMap": true,
        "outDir": "./dist",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "skipLibCheck": true 
    }
}
```

## Crear carpeta src con archivos ts del Proyecto