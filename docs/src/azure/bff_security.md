---
outline: deep
---

# Configuración de Backend For Frontend (BFF)

## Backend For Frontend

Backend For Frontend (BFF) es un backend diseñado específicamente para un cliente frontend.

Actúa como intermediario entre:

- Frontend Angular
- Microservicios
- APIs externas


## Seguridad e integración con Spring Security


<div style="display: flex; gap: 24px; align-items: flex-start;">

  <div style="flex: 1;">


|SEGURIDAD CON SPRING SECURITY|
|----------------|
|- Autenticación robusta|
|- Autorización por roles|
|- Protección de endpoints|
|- Integración con JWT|

</div>

  <div style="flex: 1;">

|INTEGRACIÓN CON JWT|
|-----------------|
|- Usuario se autentica en Azure mediante MSAL.|
|- Angular obtiene Access Token.|
|- Angular envía token al BFF.|
|- BFF valida el JWT.|
|- Si es válido → permite acceso a APIs.|


</div>

</div>


## Beneficios de la configuración

1. **Seguridad mejorada**: Spring Security proporciona mecanismos robustos para
proteger el backend contra amenazas de seguridad como el acceso no autorizado y
la escalada de privilegios.

2. **Simplificación del desarrollo**: la integración de JWT simplifica el proceso de
autenticación y autorización al permitir un intercambio seguro de información entre
el frontend y el backend sin la necesidad de mantener un estado de sesión en el
servidor.

3. **Escalabilidad**: al separar la lógica de negocio en el BFF, se puede optimizar y
escalar independientemente para diferentes clientes, lo que mejora la eficiencia y la
escalabilidad de la aplicación.


## Configuración de componente backend BFF

| Componente BFF | Spring Security | Integración Front/Back + JWT |
|----------------|----------------|-------------------------------|
| • Backend For Frontend (BFF) es un componente backend diseñado específicamente para proporcionar APIs optimizadas para un frontend o cliente particular.<br> • Actúa como una capa intermedia entre el frontend y los servicios backend, abstrayendo la lógica de negocio y adaptando los datos para las necesidades específicas del cliente. | • Spring Security es un framework de seguridad de nivel empresarial que se integra fácilmente con aplicaciones Spring.<br><br>• Proporciona funciones de autenticación y autorización robustas para proteger las API y recursos de una aplicación. | • JSON Web Tokens (JWT) es un estándar abierto (RFC 7519) que define un formato compacto y autónomo para la transferencia segura de información entre partes como un objeto JSON.<br><br>• En la integración frontend y backend, JWT se utiliza comúnmente para autenticación y autorización.<br><br>• El frontend solicita un token de acceso al backend después de que el usuario se autentica correctamente.<br><br>• El backend genera un token JWT firmado y lo devuelve al frontend.<br><br>• El frontend incluye este token en las solicitudes a APIs protegidas y el backend lo valida para asegurar que la solicitud sea auténtica y autorizada. |


