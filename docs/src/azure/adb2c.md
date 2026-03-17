---
outline: deep
---

# Azure AD B2C

Es un servicio de identidad en la nube que permite a las organizaciones gestionar la identidad y el acceso de sus usuarios a aplicaciones y servicios. Está diseñado específicamente para casos de uso de negocio-consumidor (B2C), donde las empresas necesitan proporcionar una experiencia de inicio de sesión segura y personalizada para una gran cantidad de usuarios externos. 

## Características clave

1. Registro e inicio de sesión personalizados: Permite a las empresas personalizar el proceso de registro y inicio de sesión para adaptarse a la marca y las necesidades del negocio. 

2. Integración con múltiples proveedores de identidad: Permite a los usuarios iniciar sesión utilizando sus cuentas de redes sociales, como Facebook, Google, LinkedIn, así como cuentas de Microsoft, entre otros proveedores de identidad.

3. Seguridad y cumplimiento: Ofrece características de seguridad avanzadas, como autenticación multifactor (MFA), control de acceso basado en roles (RBAC), monitoreo de inicio de sesión y cumplimiento de normativas de privacidad como GDPR.

4. Escalabilidad y disponibilidad: Azure AD B2C está diseñado para manejar grandes volúmenes de usuarios y garantizar la disponibilidad y el rendimiento incluso en situaciones de carga alta.

5. APIs y SDKs: Proporciona APIs y SDKs que facilitan la integración de la autenticación y autorización en aplicaciones web, móviles y otras plataformas. 



## Usuarios en Azure AD B2C

Los usuarios en Azure AD B2C son personas que se registran e inician sesión en las aplicaciones vinculadas ala IDaaS.

| Módulo                | Funcionalidad  | Descripción |
|-------------------------|------------------------|--------------------|
| Autenticación de usuarios | Cuentas locales      | Los usuarios se registran directamente en la aplicación proporcionando un nombre de usuario (o correo electrónico) y una contraseña. |
| Autenticación de usuarios | Cuentas externas     | Los usuarios pueden autenticarse usando cuentas de redes sociales (Facebook, Google, Microsoft) o proveedores de identidad empresariales como Azure AD, ADFS o cualquier proveedor compatible con OpenID Connect o SAML. |
| Gestión de usuarios     | Registro             | Los usuarios pueden registrarse en la aplicación a través de un flujo de registro definido en la configuración de Azure AD B2C. |
| Gestión de usuarios     | Inicio de sesión     | Una vez registrados, los usuarios pueden iniciar sesión a través de un flujo de inicio de sesión. |
| Gestión de usuarios     | Gestión de perfiles  | Los usuarios pueden actualizar sus perfiles, como cambiar el nombre, la dirección de correo electrónico u otros datos, usando flujos de edición de perfil. |



## Claims en Azure AD B2C

Son declaracioness sobre un usuario que son emitidas por un proveedor de identidad; cada claim es un par **clave-valor** que proporciona información específica sobre el usuario.

<div style="display: flex; gap: 24px; align-items: flex-start;">

  <div style="flex: 1;">

| Tipo de claims |
|----------------|
| Claims de Identidad: información que identifica al usuario, como el nombre de usuario, dirección de correo electrónico, identificador del usuario, etc. |
| Claims de Perfil: información adicional sobre el usuario, como nombre, apellidos, dirección, número de teléfono, etc. |
| Claims de Seguridad: información relacionada con la seguridad, como roles, grupos a los que pertenece el usuario, permisos, etc. |

  </div>

  <div style="flex: 1;">

| Uso de claims |
|---------------|
| Autenticación: al iniciar sesión, el proveedor de identidad emite un token que incluye claims. Este token es usado por la aplicación para identificar al usuario. |
| Autorización: las aplicaciones pueden usar claims para tomar decisiones de autorización. Por ejemplo, solo permitir el acceso a ciertos recursos si el claim de rol del usuario incluye "admin". |
| Personalización: las aplicaciones pueden usar claims para personalizar la experiencia del usuario, como mostrar el nombre del usuario en la interfaz. |

  </div>

</div>