---
outline: deep
---

# Configuración de componente Frontend (Angular SPA)

## Microsoft Authentication Library (MSAL)

MSAL es una librería desarrollada por Microsoft que permite integrar autenticación y autorización en aplicaciones Angular de forma sencilla.

Esta biblioteca facilita la conexión entre una aplicación frontend SPA y la plataforma de identidad de Microsoft (Microsoft Identity Platform), utilizando estándares como:

- OAuth 2.0
- OpenID Connect

## Rol de MSAL en Angular

Dentro del ecosistema Angular + Azure, MSAL permite:

- Autenticar usuarios mediante Azure Active Directory
- Obtener tokens de acceso seguros
- Gestionar sesiones de usuario
- Proteger rutas y componentes

Esto permite construir aplicaciones modernas seguras sin necesidad de implementar sistemas propios de autenticación.

## Ejemplo conceptual

Supongamos una aplicación Angular llamada **TaskMaster**.

El flujo sería:

1. Usuario accede a la aplicación.
2. Angular redirige al login de Microsoft Identity Platform.
3. Usuario se autentica.
4. MSAL recibe un Access Token.
5. Angular usa el token para consumir APIs protegidas.

## Pasos de configuración

### Instalación

```bash
npm install @azure/msal-browser @azure/msal-angular
```

### Configuración

Se debe registrar la aplicación en Azure y configurar:

* Client ID
* Authority (Tenant)
* Redirect URI

### Integración en Angular

|MSAL permite|Beneficios|
|------------|----------|
|Login|Seguridad empresarial|
|Logout|Integración con Azure|
|Obtener token|Autenticación sin estado|
|Proteger rutas|Mejor experiencia de usuario|



