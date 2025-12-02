---
outline: deep
---

# Arquetipos en Springboot

Los **arquetipos** (archetypes) de Maven son plantillas de proyecto que permiten generar nuevos proyectos con una estructura, dependencias y configuraciones predefinidas. Son ideales para:

- Estandarizar todos los microservicios de un equipo o empresa
- Ahorrar tiempo al evitar configurar desde cero
- Aplicar buenas prácticas desde el primer día

::: tip **Ventajas de tener tu propio arquetipo**
- Estructura de paquetes consistente
- Dependencias comunes ya incluidas (Spring Web, Lombok, DevTools, etc.)
- Configuraciones base (application.yml, logging, etc.)
- Tests preconfigurados, Docker, Gitignore, etc.
:::


## Pasos para crear un arquetipo


### 1. Configurar el entorno

Asegurarse de tener java y maven

``` java
java --version
mvn --version
```


### 2. Crear un proyecto maven base

``` java
mvn archetype:generate \
-DgroupId=com.example \
-DartifactId=mi-arquetipo \
-DarchetypeArtifactId=maven-archetype-quickstart \
-DinteractiveMode=false
```


### 3. Personalizar el proyecto base

Navegar al directorio creado (mi-arquetipo)


### 4.Modificar el proyecto base con las dependencias en el `pom`


### 5.Transformar el proyecto base en un arquetipo

* Comando para crear el arquetipo a partir al proyecto base (correr comando en carpeta mi-arquetipo)

``` java
mvn archetype:create-from-project
```


### 6. Navegar al directorio generado 

``` java
cd target/generated-sources/archetype
```


### 7. Instalar  el arquetipo en su repositorio maven 

``` java
mvn clean install 
```

Ademas de las dependencias del proyecto, tambien se pueden integrar una estructura estandar de los directorios (controller, repository....).

El arquetipo queda guardado localmente en el pc, dentro de la carpeta `1.0-SNAPSHOT`

`C:\Users\usuariogenial\.m2\repository\com\example\mi-arquetipo-archetype\`


### 8. Crear un microservicio

Con el siguiente comando (un directorio antes de mi-arquetipo):

``` java
mvn archetype:generate \
-DarchetypeGroupId=com.example \
-DarchetypeArtifactId=mi-arquetipo-archetype \
-DarchetypeVersion=1.0-SNAPSHOT \
-DgroupId=com.miempresa \
-DartifactId=mi-microservicio
```

::: tip
Cuando dice: Define value for property 'version' 1.0-SNAPSHOT  solo dar un enter
y cuando dice Y: solo poner Y
:::

### 9. Ejecutar

Dentro de la carpeta `mi-microservicio`

``` java
mvn spring-boot:run
```