---
outline: deep
---

# Comandos de Angular CLI

::: tip Opciones
Comando ng para generar recursos (instalación local del CLI):
```bash
npm run ng -- 
```
:::

## Iniciar un proyecto
::: tip Opciones
* ``--commit true/false`` : Configurar git haciendo un commit inicial en el proyecto.
:::


### Módulos
```bash
ng new <nombre-proyecto> --standalone false
```
### Standalone Components
```bash
ng new <nombre-proyecto> 
```

## Generar Módulos

::: tip Opciones
* --routing: agrega archivo de routing
:::
```bash
ng g m <nombre-modulo> --routing
```

## Generar Componentes

::: tip Opciones 
* ``--flat``: Crea los archivos del componente en la ruta raiz
* ``--inline-style | -s``: Configura los estilos en el archivo component.ts
* ``--inline-template | -t``: Configura el template en el archivo component.ts
* ``--skip-tests``: No crear archivos de prueba "spec.ts" para el nuevo componente
:::
```bash
ng g c <nombre-componente>
```

## Generar Servicios

```bash
ng g s <nombre-servicio>
```

## Generar y configurar archivos de entorno
```bash
ng g environments
```

## Scripts Angular CLI + commit-and-tag-version

```bash
npm i --save-dev commit-and-tag-version
```
```json
"scripts": {
    "ng": "ng",
    "gm": "ng g module",
    "gmr": "ng g module --routing",
    "gc": "ng g component --skip-tests",
    "gcs": "ng g component --skip-tests --standalone",
    "gs": "ng g service --skip-tests",
    "gp": "ng g pipe --skip-tests",
    "gi": "ng g interface",
    "ge": "ng g environments",
    "gg": "ng g guard --skip-tests",
    "start": "ng serve -o",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "envs": "node ./scripts/set-env.js",
    "release": "commit-and-tag-version",
    "release:version": "commit-and-tag-version --release-as"
},
```
