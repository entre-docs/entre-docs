---
outline: deep
---
# Configuracion de rutas

## Rutas principales + Ruta para módulo Auth 

::: code-group
```ts [src/presentation/routes.ts]
import { Router } from 'express';
import { AuthRoutes } from './auth/routes';


export class AppRoutes {

  static get routes(): Router {

    const router = Router();

    router.use('/api/auth', AuthRoutes.routes );

    return router;
  }
}
```
```ts [src/presentation/auth/routes.ts]
import { Router } from "express";
import { AuthDataSourceImpl } from "../../infraestructure/datasource/auth/auth.datasource.impl";
import { AuthRepositoryImpl } from "../../infraestructure/repository/auth/auth.repository.impl";
import { AuthController } from "./auth.controller";

export class AuthRoutes {
    static get routes() {

        const router = Router();

        // Inyeccíon de dependencias
        const authDataSource = new AuthDataSourceImpl();
        const authRepository = new AuthRepositoryImpl(authDataSource);
        const authController = new AuthController(authRepository);

        router.post('/login', authController.login);

        return router
    }
}
```
:::