---
outline: deep
---

# Porcentaje de Cobertura

La cobertura de pruebas de software se refiere a la medida en la que el código de un programa ha sido ejecutado y evaluado durante el proceso de pruebas.

## Instalación y Configuración de SonarQube

SonarQube es una herramienta esencial en el desarrollo de software moderno, ya que permite a los equipos de desarrollo garantizar la calidad y seguridad del código a lo largo del ciclo de vida del proyecto.

Al integrar SonarQube en los procesos de desarrollo, se puede identificar y corregir errores, vulnerabilidades y malos hábitos de codificación de manera proactiva. Esto no solo mejora la mantenibilidad del código, sino que también reduce el riesgo de fallos en producción y asegura el cumplimiento de estándares de codificación. 


## Istanbul

| Aspecto       | Detalle          |
|---------------|------------------|
| **Qué es**    | La herramienta de cobertura de código más utilizada en el ecosistema JavaScript y TypeScript. |
| **Para qué sirve**    | Medir exactamente cuánto código (líneas, ramas, funciones, declaraciones) se ejecutó durante las pruebas. Genera informes visuales y en múltiples formatos. |
| **Características destacadas** | • Muy rápido y ligero<br>• Integración nativa con Jest, Mocha, Jasmine, Vitest, Angular CLI, Cypress, etc.<br>• Informes HTML muy claros<br>• Soporta Babel, TypeScript y SWC |
| **Formatos de salida** | HTML, LCOV, lcovonly, text, text-summary, JSON, Clover, Cobertura |


* Informe de cobertura con Istanbul

``` bash
npm install karma-coverage-istanbul-reporter --save-dev
```

* Generar la carpeta `coverage/lcov.info` y carpeta `coverage/`

``` bash
ng test --code-coverage
```

