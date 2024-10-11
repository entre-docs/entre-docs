---
outline: deep
---

# Lazy Loading Module routing

## App Routing Module

::: code-group

```ts [app-routing.module.ts]
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Ruta predeterminada
  { path: '**', redirectTo: 'dashboard' } // Manejo de rutas no existentes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```
:::

## Dashboard/Auth Module
::: code-group

```ts [dashboard.module.ts]
// dashboard.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { 
    path: '', component: DashboardComponent, // Ruta padre
    children: [
      { path: 'analytics', component: AnalyticsComponent }, // Ruta hija
      { path: 'reports', component: ReportsComponent },     // Ruta hija
      { path: '', redirectTo: 'analytics', pathMatch: 'full' } // Redirección por defecto
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    AnalyticsComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Define las rutas hijas dentro de RouterModule.forChild
  ]
})
export class DashboardModule { }
```

```ts [auth.module.ts]
// auth.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { 
    path: '', component: AuthComponent, // Ruta padre
    children: [
      { path: 'login', component: LoginComponent }, // Ruta hija
      { path: 'register', component: RegisterComponent }, // Ruta hija
      { path: '', redirectTo: 'login', pathMatch: 'full' } // Redirección por defecto
    ]
  }
];

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Define las rutas hijas dentro de RouterModule.forChild
  ]
})
export class AuthModule { }

```
:::