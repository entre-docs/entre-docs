---
outline: deep
---

# Configuración y Dependencias: ts-node-dev

Configuracion e instalación de dependencias para el uso TypeScript en Nodejs + Express + TypeORM para proyecto REST API. Se incluye también archivo tsconfig.json para uso de decoradores.

## Dependencias
```bash
npm install express dotenv env-var bcryptjs jsonwebtoken typeorm reflect-metadata pg
```

## Dependencias de desarrollo
```bash
npm install -D typescript @types/node ts-node-dev rimraf @types/express @types/bcryptjs @types/jsonwebtoken commit-and-tag-version
```

## tsconfig.json
```json
{
    "compilerOptions": {
    "target": "es2016",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist/",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "strictPropertyInitialization": false,

  }
}
```

## package.json
```json
"scripts": {
    "tsc:init": "tsc --init",
    "dev": "tsnd --respawn --clear src/app.ts",
    "build": "rimraf ./dist && tsc",
    "start": "npm run build && node dist/app.js",
    "release": "commit-and-tag-version",
    "release:version": "commit-and-tag-version --release-as"
}
```

## .versionrc.json
```json
{
    "header": "# <Proyecto> \n\nLos cambios realizados serán detallados en este archivo.",
    "releaseCommitMessageFormat": "chore(release): New version - {{currentTag}}",
    "types": [
        {"type": "feat", "section": "Features"},
        {"type": "fix", "section": "Bug Fixes"},
        {"type": "chore", "section": "Chores", "hidden": false},
        {"type": "docs", "section": "Documentation", "hidden": false},
        {"type": "style", "section": "Styles", "hidden": false},
        {"type": "refactor", "section": "Refactors", "hidden": false},
        {"type": "perf", "section": "Performance Improvements", "hidden": false},
        {"type": "test", "section": "Tests", "hidden": false}
    ]
} 
```


