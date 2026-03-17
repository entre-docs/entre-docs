---
outline: deep
---

# Json Web Token (JWT)

JWT (acrónimo de “JSON Web Token”) es un estándar abierto (definido en el RFC 7519) que establece un formato compacto y autónomo para la transferencia segura de información entre dos partes. Estas partes, conocidas como JSON Web Tokens (JWT), pueden ser verificadas y consideradas confiables debido a que están firmadas digitalmente. 

|Encabezado (Header)|Carga útil (Payload)|Firma (signature)|
|-------------------|--------------------|-----------------|
|Especifica el tipo de token y el algoritmo de firma utilizado|Contiene los datos que se desean transmitir, como información de usuario u otros datos relevantes|Se utiliza para verificar la integridad del token y asegurar que no ha sido modificado por terceros|


<br>

Después del login el usuario recibe un token JWT que debe enviar en cada request.

Esto permite:

- Arquitecturas stateless
- Seguridad en microservicios
- Escalabilidad