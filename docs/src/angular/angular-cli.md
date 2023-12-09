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
