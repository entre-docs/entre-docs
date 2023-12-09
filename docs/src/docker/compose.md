# Comandos para Docker Compose

::: tip
El archivo debe llamarse *docker-compose.yml* obligatoriamente
:::

## Crear contenedores desde archivo docker-compose.yml

```bash
docker compose up
```

## Detener contenedores

```bash
docker compose stop
```

## Iniciar contenedores desde compose

```bash
docker compose start
```

## Borrar contenedores creados con docker-compose.yml

::: info
Elimina networks, volúmenes, e imágenes creadas por docker compose
:::

```bash
docker compose down
```

## Ver logs de docker compose (primeros logs)

```bash
docker compose logs
```

## Ver logs en tiempo real

```bash
docker compose logs -f
```

## Creación de contenedores
::: tip Docker Compose 
* Base de datos MongoDB
* Mongo-express
* Aplicacion de Node
* Adicional: Volumen de Docker
:::

```docker
version: '3'

services:
  db:
    container_name: <nombre-contenedor>
    image: mongo:6.0
    volumes:
      - <nombre-volumen>:/data/db
    # ports:
    #   - 27017:27017
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: <usuario-admin> 
      MONGO_INITDB_ROOT_PASSWORD: <password>
    command: ['--auth']
  
  mongo-express:
    depends_on:
      - db
    image: mongo-express:1.0.0-alpha.4
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: <usuario-admin> 
      ME_CONFIG_MONGODB_ADMINPASSWORD: <password>
      ME_CONFIG_MONGODB_SERVER: <nombre-contenedor-mongo>
    ports:
      - 8080:8081
    restart: always
  
  app:
    depends_on:
      - db
      - mongo-express
    image: <imagen-app>
    ports:
      - 3000:3000
    environment:
      MONGODB: mongodb://<USERNAME>:<PASSWORD>@<nombre-server-mongo>:27017
      DB_NAME: <nombre-db>
    restart: always

volumes:
  <nombre-volumen>:
    external: true
```