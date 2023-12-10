---
outline: deep
---

# HTTP Client

## Configurarción

### Proyecto basado en Módulos (Imports)

```ts
/**
 * app.module.ts  
*/
import { HttpClientModule } from '@angular/common/http';// [!code ++]

@NgModule({
  declarations: [
    // ... tus componentes y directivas
  ],
  imports: [
    BrowserModule
    HttpClientModule,// [!code ++]
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```



### Proyecto basado en Módulos (Providers)
```ts
/**
 * app.module.ts  
*/
import { provideHttpClient } from '@angular/common/http';// [!code ++]

@NgModule({
  providers: [
    provideHttpClient(),// [!code ++]
  ],
})
export class AppModule {}
```

### Proyecto basado en standalone components (importProvidersFrom)

```ts
/**
 * app.config.ts
*/
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';// [!code ++]

export const appConfig: ApplicationConfig = {

  providers: [
    importProvidersFrom(// [!code ++]
      HttpClientModule// [!code ++]
    )// [!code ++]
  ]
};

```

### Proyecto basado en standalone components (Providers)

```ts
/**
 * app.config.ts
*/
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';// [!code ++]

export const appConfig: ApplicationConfig = {

  providers: [
    provideHttpClient(),// [!code ++]
  ]
};
```