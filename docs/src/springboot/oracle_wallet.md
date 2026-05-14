---
outline: deep
---

# Wallet Oracle Cloud

## Oracle Wallet

Oracle Wallet es un conjunto de archivos de seguridad utilizados para conectarse de forma segura a Oracle Autonomous Database en Oracle Cloud.

El Wallet contiene:

- Certificados SSL/TLS
- Configuración de red
- Alias de conexión
- Archivos de autenticación



## Contenido del Wallet

Cuando se descarga el Wallet aparecen archivos como:

```text
wallet/
├── cwallet.sso
├── ewallet.p12
├── sqlnet.ora
├── tnsnames.ora
├── truststore.jks
└── keystore.jks
```


## Descargar el Wallet


Ingresar a Oracle Cloud.

Buscar: `Autonomous Database`

Seleccionar la base de datos.

Presionar `DB Connection`

Seleccionar `Instance Wallet`

Crear una contraseña para el Wallet.

Descargar el archivo ZIP.



## Extraer el Wallet

Se recomienda extraerlo dentro del proyecto.

Ejemplo:

```text
mi-proyecto/
│
├── wallet/
├── src/
├── pom.xml
└── application.yml
```



## Configurar sqlnet.ora

Abrir `wallet/sqlnet.ora`


## Buscar DIRECTORY

Generalmente aparece algo como:

```text
DIRECTORY="?/network/admin"
```



## Reemplazar por la ruta real

* Linux

```text
DIRECTORY="/home/usuario/proyecto/wallet"
```

* Windows

```text
DIRECTORY="C:/proyecto/wallet"
```




## Configuración TNS_ADMIN

Springboot normalmente utiliza:

```properties
TNS_ADMIN=./wallet
```


TNS_ADMIN le indica al driver JDBC dónde buscar:

- `sqlnet.ora`
- `tnsnames.ora`
- certificados Oracle




## Archivo tnsnames.ora

Abrir `wallet/tnsnames.ora`


## Alias de conexión

Dentro aparecen alias como:

```text
DATABASE_high
DATABASE_medium
DATABASE_low
```


| Perfil | Uso |
|-------|------|
| `_high` | Máximo rendimiento |
| `_medium` | Balanceado |
| `_low` | Menor consumo |




## Dependencias necesarias

Para Oracle Wallet normalmente se utilizan:

```xml
<dependency>
    <groupId>com.oracle.database.jdbc</groupId>
    <artifactId>ojdbc11</artifactId>
</dependency>

<dependency>
    <groupId>com.oracle.database.security</groupId>
    <artifactId>oraclepki</artifactId>
</dependency>

<dependency>
    <groupId>com.oracle.database.security</groupId>
    <artifactId>osdt_core</artifactId>
</dependency>

<dependency>
    <groupId>com.oracle.database.security</groupId>
    <artifactId>osdt_cert</artifactId>
</dependency>
```

