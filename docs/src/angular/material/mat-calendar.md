---
outline: deep
---

# Mat Calendar

Configuración necesaria para implementar mat-calendar

## Material Module

::: code-group
```ts [material.module.ts]
import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [],
  exports: [
    MatDatepickerModule,
  ]
})
export class MaterialModule { }
```
:::

## APP Module

::: code-group
```bash [Dependencias]
npm install luxon
npm install -D @types/luxon
npm run ng -- add @angular/material-luxon-adapter
```

```ts [app.module.ts]
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MAT_LUXON_DATE_ADAPTER_OPTIONS, MAT_LUXON_DATE_FORMATS, LuxonDateAdapter } from '@angular/material-luxon-adapter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'es-ES'
    },
    {
      provide: DateAdapter,
      useClass: LuxonDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_LUXON_DATE_ADAPTER_OPTIONS]
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MAT_LUXON_DATE_FORMATS
    },
    provideAnimationsAsync(),
    provideHttpClient(),
    provideNativeDateAdapter(),
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
```
:::

## Implementación

::: code-group
```html [component.html]
<mat-calendar [(selected)]="selectedDate" (selectedChange)="onDateChange($event)"
              minDate]="minDate" [dateFilter]="dateFilter">
</mat-calendar>
```

```ts [component.ts]
import { Component, inject, model, signal } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app',
  templateUrl: './component.html',
  styleUrl: './component.scss'
})
export class Component{

  public minDate!: Date;

  selectedDate = model<Date>(new Date());
  availableHours = availableHours;
  

  constructor(){
    this.minDate = new Date();
  }

  public dateFilter = (date: Date | null) => {
    const day = (date || new Date() ).getDay();
    return day !== 0 && day !== 6
  }

  public onDateChange = (date: Date | null) => {
    if (date instanceof Date) {
      const formatedDate = DateTime.fromJSDate(date).toFormat('yyyy/MM/dd');

      console.log(formatedDate)
      
    } else {
      console.log('daet - null')
    }
  }
}

```
:::