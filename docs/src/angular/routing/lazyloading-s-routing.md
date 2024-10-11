---
outline: deep
---

# Lazy Loading Standalone routing

::: code-group

```ts [dashboard.module.ts]
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ],
};
```

```ts [app.routes.ts]
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        // lazy loading de un standalone component
        /* 
        loadComponent: () =>  import('./dashboard/dashboard.component').then( c => c.DashboardComponent )
        O podemos dejarlo como esta abajo, pero en la clase del componente debemos agregar un export default
        */
        loadComponent: () => import('./dashboard/layouts/main/main.component'),
        children: [
            {
                path: 'change-detection',
                title: 'Change detection',
                loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component')
            },
            {
                path: 'control-flow',
                title: 'Control flow',
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component')
            },
            {
                path: 'defer-options',
                title: 'Defer options',
                loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component')
            },

            {
                path: 'user/:id',
                title: 'User',
                loadComponent: () => import('./dashboard/pages/user/user.component')
            },
            {
                path: '**', redirectTo: 'change-detection', pathMatch: 'full',
            }
        ]

    },
    {
        path: '**', redirectTo: 'dashboard', pathMatch: 'full',
    }
];

```
:::