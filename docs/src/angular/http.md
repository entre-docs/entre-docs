---
outline: deep
---

# HttpClient

## Configurarción

### Proyecto basado en Módulos (Imports)

::: tip app.module.ts
```ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    // ... tus componentes y directivas
  ],
  imports: [
    BrowserModule
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
:::



### Proyecto basado en Módulos (Providers)
::: tip app.module.ts
```ts
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  providers: [
    provideHttpClient(),
  ],
})
export class AppModule {}
```
:::

### Proyecto basado en standalone components (importProvidersFrom)
::: tip app.config.ts
```ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {

  providers: [
    importProvidersFrom(
      HttpClientModule
    )
  ]
};

```
:::

### Proyecto basado en standalone components (Providers)
::: tip app.config.ts
```ts
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {

  providers: [
    provideHttpClient(),
  ]
};
```
:::

## Peticiones Http




