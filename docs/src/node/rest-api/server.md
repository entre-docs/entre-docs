---
outline: deep
---

# Configuración de servidor

## Servidor express + archivo de arranque app.ts

::: code-group
```ts [src/presentation/server.ts]
import express, { Router } from "express";

interface Options {
    port: number;
    routes: Router;
}

export class Server {
    
    public readonly app = express();
    private serverListener?: any;
    private readonly port: number;
    private readonly routes: Router;

    constructor(options: Options) {
        const { port, routes } = options;
        this.port = port;
        this.routes = routes;
    }

    start() {

        //* Middlewares
        this.app.use(express.json()); // raw json
        this.app.use(express.urlencoded({ extended: true }));

        //* Routes
        this.app.use(this.routes);

        this.serverListener = this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

    public close() {
    this.serverListener?.close();
  }
}
```
```ts [src/app.ts]
import { Server } from "./presentation/server";
import { envs } from "./config/environment/envs";
import { AppRoutes } from "./presentation/routes";

/* TypeORM reflect-metadata */
import "reflect-metadata";
import { PostgresDatabaseConnection } from "./data/postgresql/postgres.database";

( async () => {
    main();
})();


async function main() {

    await PostgresDatabaseConnection.execute()
    
    const server = new Server({
        port: envs.PORT,
        routes: AppRoutes.router
    })

    server.start()

}
```
:::