---
outline: deep
---

# JSON y Observables

JSON, o JavaScript Object Notation, es un formato ligero de **intercambio de datos**. Su simplicidad y legibilidad han hecho que sea ampliamente adoptado para el intercambio de datos entre un servidor y un cliente. JSON representa datos como pares clave-valor en un formato fácilmente legible tanto por parte de humanos como de máquinas. 

Está compuesto por Objetos y Arrays.

## Objetos

Conjuntos no ordenados de pares clave-valor, donde las claves son cadenas de texto y los valores pueden ser cualquier tipo de datos válido en JSON (objetos, arrays, números, cadenas, booleanos o null).

``` json
{
	"nombre": "Juan Soto",
	"edad":30,
	"ciudad": "Ciudad Ejemplo"
}
```

## Arrays

Listas ordenadas de valores. Los valores pueden ser de cualquier tipo, incluidos objetos y otros arrays.

```json
[
	"manzana",
	"naranja",
	"plátano"
]
```

## Formato y codificación JSON

Los objetos y arrays son estructuras anidadas, definidas por llaves {} y corchetes [], respectivamente. Los pares clave-valor están separados por dos puntos “:” y los elementos de un array están separados por comas “,”.

```json
{
	"nombre": "Juan Perez",
	"edades": [25,30,35],
	"ubicacion": {
		"ciudad": "Ciudad Ejemplo",
		"pais": "Pais Ejemplo"
	}
}
```

JSON utiliza una codificación de caracteres Unicode. Esto significa que puede representar caracteres especiales y es independiente del idioma.



## Observables

En Angular, los observables son una parte fundamental de la programación reactiva y se utilizan para trabajar con flujos de datos asíncronos. Los observables son una implementación de la especificación de RxJS, que es una librería para programación reactiva en JavaScript.

Un observable es una secuencia de eventos que puede incluir valores, errores y notificaciones de finalización. Estos eventos pueden ocurrir de forma síncrona o asíncrona con el tiempo. 

## Suscripción a Observables

```ts
miObservable.subscribe(
  valor => console.log('Valor emitido:', valor),
  error => console.error('Error:', error),
  () => console.log('Observable completado')
);
```

```ts
import { HttpClient } from '@angular/common/http';

// ...

constructor(private http: HttpClient) {}

hacerSolicitud(): void {
  this.http.get('https://api.example.com/data').subscribe(
    datos => console.log('Datos recibidos:', datos),
    error => console.error('Error en la solicitud:', error),
    () => console.log('Solicitud completada')
  );
}
```


## Consumir el JSON y mostrar los datos en la plantilla

::: code-group
```ts [lista-personas.ts]
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonService } from '../../services/json.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lista-personas',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.scss'],
  providers: [JsonService]
})
export class ListaPersonasComponent implements OnInit {
  //variable para guardar los datos del JSON
  personas: any;

  //importación del servicio en el constructor para poder usar sus elementos
  constructor(private jsonService: JsonService) {}

  //implementación del ngOnInit
  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe(data => {
      this.personas = data;
    });
  }
}
```

```html [lista-personas.html]
<div class="container mt-3">
  <h2>Lista de Personas</h2>
  <hr>

  <div *ngIf="personas && personas.length > 0; else noData">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let persona of personas">
          <td>{{ persona.id }}</td>
          <td>{{ persona.nombre }}</td>
          <td>{{ persona.edad }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <ng-template #noData>
    <p>No hay datos disponibles.</p>
  </ng-template>
</div>
```

```scss[lista-personas.scss]
.container {
  max-width: 800px;
}

.table {
  width: 100%;
}

.mt-3 {
  margin-top: 1rem !important;
}
```
:::