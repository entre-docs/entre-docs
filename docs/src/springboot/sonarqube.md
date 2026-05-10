---
outline: deep
---

# Análisis de Software y SonarQube

Las herramientas de análisis de software se utilizan para evaluar y verificar que un producto o aplicación de software funcione correctamente. Estas herramientas son fundamentales en el desarrollo de software, ya que permiten detectar y corregir errores, optimizar el rendimiento y garantizar la seguridad de las aplicaciones.

Existen dos tipos principales de análisis, el **análisis estático de software** y el **análisis dinámico de software**. El análisis estático se realiza sin ejecutar el código, mientras que el análisis dinámico se realiza ejecutando el código en un entorno controlado.


## Análisis estático

Las herramientas de análisis estático son mejores para identificar vulnerabilidades que son
fácilmente detectables dentro del código fuente de una aplicación. Esto incluye
vulnerabilidades comunes como:

* Inyección (SQL, LDAP, etc.)
* Scripting entre sitios
* Desbordamientos de búfer


## SonarQube

SonarQube es una **herramienta de revisión de código automática** y autogestionada que le ayuda sistemáticamente a entregar código limpio. Como elemento central, SonarQube se integra en su flujo de trabajo existente y detecta problemas en el código para ayudar a realizar inspecciones continuas del código de los proyectos. El producto analiza más de 30 lenguajes de programación diferentes y se integra en su pipeline de Integración Continua (CI) de las plataformas DevOps para garantizar que su código cumple con los estándares de alta calidad.

## Beneficios de SonarQube

* Alerta de manera automática a los desarrolladores de los errores de código para corregirlos previamente a la implementación en producción.
* No sólo muestra los errores, también las reglas de codificación, la cobertura de las pruebas, las duplicaciones, la complejidad y la arquitectura, plasmando todos estos datos en paneles de control detallados.
* Ayuda al equipo a mejorar en sus habilidades como programadores al facilitar un seguimiento de los problemas de calidad.
* Permite la creación de paneles y filtros personalizables para centrarse en áreas clave y entregar productos de calidad a tiempo.
* Favorece la productividad al reducir la complejidad del código acortando tiempos y costes adicionales al evitar cambiar el código constantemente.

## Usos de SonarQube

* Detección de código duplicado
* Análiisis de seguridad
* Revisión de  la calidad del código
* Integración continua
* Monitoreo de métricas de calidad
* Cumplimiento de normas de codificación

## Instalación de SonarQube

1. Descargar e instalar Java
2. Descargar el zip de Sonar Qube Community Edition (https://www.sonarsource.com/products/sonarqube/downloads/)
3. Como usuario normal del sistema (no root) descomprimirlo, en C:\sonarqube  o  /opt/sonarqub
4. Iniciar el servidor de Sonar Qube de la siguiente forma:
- En Windows, ejecutar: C:\sonarqube\bin\windows-x86-64\StartSonar.bat
- En otros sistemas operativos, cómo usuario no-root ejecutar: /opt/sonarqube/bin/[OS]/sonar.sh console

<br>

------------------
<br>

::: tip Durante la creación del archivo docker compose, el codigo correcto para el archivo docker-compose.yaml es:

```yml
services:
	sonarqube:
		container_name:SonarQube
		image:sonarqube:latest
		ports:
			- "9000:9000"
		environment:
			- SONARQUBE_JDBC_USERNAME=sonar
			- SONARQUBE_JDBC_PASSWORD=sonar
		restart: always
```
:::


::: info La URL para acceder a SonarQube localmente es:
```
http://localhost:9000

Con el usuario : admin
y password: admin
```
:::


::: tip El orden correcto para ejecutar SonarQube es:
```
mvn clean verify sonar:sonar \
Dsonar.projectKey=PROJECT_KEY \
Dsonar.projectName='PROJECT_NAME' \
Dsonar.host.url=http://localhost:9000 \
Dsonar.token=THE_GENERATED_TOKEN
```
<br>

``` bash
mvn clean verify sonar:sonar \
Dsonar.projectKey=Mi-Proyecto \
Dsonar.projectName='Mi proyecto Sonarqube' \
Dsonar.host.url=http://localhost:9000 \
Dsonar.token=sqp_1234b56789c3456789d12345e
```
:::