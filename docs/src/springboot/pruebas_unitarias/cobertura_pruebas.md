---
outline: deep
---


# Cobertura de pruebas unitarias

La cobertura de pruebas de software se refiere a la medida en la que el código de un programa ha sido ejecutado y evaluado durante el proceso de pruebas.


## Tipos de métricas

Estas son las métricas que se usan para determinar la cobertura de las pruebas de software.


::: code-group
``` [Cobertura de sentencias]
Es la métrica de cobertura de pruebas más básica y mide el porcentaje 
de sentencias ejecutables en el código ejecutado durante las pruebas. 
Ayuda a identificar las áreas no probadas del código que pueden contener 
defectos potenciales marcándolas como cubiertas o no cubiertas. Si el 
código contiene 100 sentencias, pero el equipo sólo ha ejecutado 75, 
la cobertura sería del 75%.
```
``` [Cobertura de ramas]
Es más avanzada que la cobertura de sentencias y mide el número de ramas 
(puntos de decisión) cubiertas durante las pruebas. Una rama es una 
intersección en el código donde el programa puede realizar diferentes 
acciones basadas en una sentencia condicional. Si la prueba cubre todas 
las ramas, se tiene más seguridad de que el código es correcto. Por ejemplo, 
la ejecución de ambas ramas proporciona una cobertura del 100% si se trata 
de una simple sentencia if-else.
```
``` [Cobertura de funciones]
Mide lo bien que se han probado los requisitos funcionales de una aplicación.
La cobertura funcional le ayuda a probar todas las características y 
funcionalidades necesarias de una aplicación o software. Le ayudará a 
identificar lagunas o funcionalidades que faltan y que debe solucionar antes 
de lanzar una aplicación. Probar todas las funciones del código elimina el 
riesgo de pasar por alto las funcionalidades básicas de un sistema.
```
``` [Cobertura de rutas]
Es una métrica exhaustiva que mide el porcentaje de rutas posibles en 
el código probado. Su objetivo es garantizar que se comprueban todas las 
ramas y combinaciones de sentencias posibles. Aunque es imposible alcanzar 
el 100% de cobertura de rutas cuando se trata de una base de código de gran 
tamaño, un proceso de pruebas exhaustivo proporciona información valiosa.
```
:::


::: code-group
``` [Cobertura de mutaciones]
Comprueba la eficacia del conjunto de pruebas evaluando su capacidad para 
detectar cambios en el código. La prueba consiste en introducir mutaciones 
y ejecutar el conjunto de pruebas para comprobar si detecta los cambios. 
La cobertura de mutaciones identifica las deficiencias de su conjunto de 
pruebas para ayudarle a mejorar su eficacia. Su cobertura de mutaciones 
es excelente si detecta un alto porcentaje de las mutaciones.
```
``` [Cobertura de integración]
Mide lo bien que se ha probado la interacción entre los distintos módulos 
de un sistema de software. Es una medida de sus esfuerzos de pruebas de 
integración, que verifica las interacciones e interfaces entre varias partes 
del sistema. Probar los puntos de integración ayuda a garantizar que los 
componentes integrados del sistema funcionen según lo previsto. También 
ayuda a identificar posibles problemas que pueden surgir cuando interactúan 
distintas partes de sus productos.
```
``` [Cobertura de riesgos]
Mide la capacidad de sus procesos de pruebas para identificar posibles 
riesgos que puedan afectar a la funcionalidad, la calidad y la seguridad. 
Describe hasta qué punto ha identificado o mitigado los riesgos identificados 
a través de los procesos de pruebas. Implica identificar, analizar y priorizar 
los riesgos en función de su probabilidad y gravedad y, a continuación, 
ejecutar casos de prueba para abordarlos. La cobertura de riesgos ayuda a 
minimizar el impacto del riesgo identificado en el producto final.
```
``` [Cobertura de condiciones]
Evalúa en qué medida se han probado las posibles combinaciones de condiciones 
dentro de un estado condicional o un punto de decisión. Mide las combinaciones 
que ha probado y las expresa en porcentaje. Los estados de condición ayudan a 
los sistemas de software a tomar decisiones basadas en expresiones lógicas 
como evaluaciones de verdadero y falso. Una cobertura de condiciones alta 
te ayuda a probar todos los posibles resultados de decisión y rutas lógicas 
con el código de tu producto.
```
:::






**Herramientas que permiten calcular la cobertura de las pruebas unitarias**


| Herramienta   | Lenguaje | Descripción         |
|---------------|----------|---------------------|
| **JaCoCo**    | Java     | Una de las herramientas más populares y maduras para medir cobertura en proyectos Java. |
| **Coverlet**  | .NET (C#) | Herramienta moderna de cobertura para .NET. Se integra perfectamente con xUnit, NUnit y MSTest. |
| **Istanbul**  | JS / TS  | La herramienta estándar para Node.js y frameworks como Jest, Mocha, etc. |
| **PHPUnit**   | PHP    | Framework de pruebas que incluye reporte de cobertura nativo (necesita Xdebug o PCOV). |
| **gcov**      | C / C++  | Herramienta clásica incluida en GCC para análisis de cobertura.   |


## JaCoCo

JaCoCo es una biblioteca de cobertura de código gratuita y de código abierto que se utiliza en la mayoría de los proyectos para medir la cobertura de pruebas en Java, Kotlin y Android.


### Uso de JaCoCo

**1. Configuración de JaCoCo como dependencia**

``` xml
<dependency>
    <groupId>org.jacoco</groupId>
    <artifactId>jacoco-maven-plugin</artifactId>
    <version>0.8.12</version>
</dependency>
```

**2. Configuración de JaCoCo como plugin (pom.xml)**

``` xml
<plugin>
    <groupId>org.jacoco</groupId>
    <artifactId>jacoco-maven-plugin</artifactId>
    <version>0.8.12</version>
    <executions>
        <execution>
            <id>default-prepare-agent</id>
            <goals>
                <goal>prepare-agent</goal>
            </goals>
        </execution>
        <execution>
            <id>default-report</id>
            <goals>
                <goal>report</goal>
            </goals>
        </execution>
        <execution>
            <id>default-check</id>
            <goals>
                <goal>check</goal>
            </goals>
            <configuration>
                <rules>
                    <rule>
                        <element>BUNDLE</element>
                        <limits>
                            <limit>
                                <counter>COMPLEXITY</counter>
                                <value>COVEREDRATIO</value>
                                <minimum>0.60</minimum>
                            </limit>
                        </limits>
                    </rule>
                </rules>
            </configuration>
        </execution>
    </executions>
</plugin>
```

**3. Ejecución de comando **
Para generar el informe de cobertura de JaCoCo

``` java
./mvnw jacoco:report
```
ó
``` java
 ./mvnw clean install
```

**4. Creación del archivo index.html**

Dentro del proyecto, en la carpeta `/target/site/jacoco` se crea el archivo `index.html` se encuentra el resultado de la ejecución.


**5. Visualización de archivo**

En el archivo se puede ver, que el archivo `CustomAuthenticatorProvider`, tiene un bajo nivel de cubrimiento a nivel de instrucciones y ramas.




## Malas prácticas de programación


| Mala práctica  | Por qué es un problema   | Solución recomendada    |
|----------------|--------------------------|-------------------------|
| **Código muerto**    | Nunca se ejecuta, aumenta la complejidad, ocupa espacio y confunde a quien lee el código    | Elimínalo por completo. El historial está en Git si alguna vez lo necesitas.  |
| **Código comentado**  | Ensucia el archivo, genera dudas (“¿por qué está comentado?”) y nadie se atreve a borrarlo  | Bórralo. Si era útil, está en el control de versiones. Usa commits con mensajes claros.  |
| **Código duplicado**   | Si hay que corregir o cambiar algo, tienes que hacerlo en muchos lugares → más errores y trabajo  | Extrae el código común a funciones, clases o módulos reutilizables. Usa patrones DRY.  |
| **Typos en nombres**  | `caluclateTotal`, `userIdd`, etc. Son bugs silenciosos muy difíciles de detectar  | Usa linters (ESLint, Pylint, SonarLint, etc.) y activa la opción de revisión ortográfica en el editor.  |
| **No seguir convenciones de nombres**  | El código parece escrito por varias personas diferentes, baja la legibilidad del equipo   | Adopta la guía de estilo oficial del lenguaje/proyecto (Google Style, Airbnb, PEP 8, etc.) y configúrala en el linter. |
| **Falta de comentarios y documentación**| Otros desarrolladores (y tú mismo en 6 meses) no entienden el “por qué” de ciertas decisiones   | Comenta la intención, no el qué hace el código. Usa JSDoc, Sphinx, Doxygen, TypeDoc o similar para generar docs automáticas. |
| **Funciones o clases muy largas**  | Difíciles de leer, testear y mantener. Violan el Principio de Responsabilidad Única (SRP)   | Divide en funciones pequeñas (< 30–50 líneas) y clases que hagan una sola cosa. Refactoriza sin miedo.   |
| **Hardcodear valores**  | URLs, claves API, mensajes, límites… cualquier cambio obliga a recompilar y redeploy   | Usa variables de entorno, archivos .env, config files o constantes centralizadas según el proyecto.  |