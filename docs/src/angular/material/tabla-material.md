
# Tabla básica

## Agregar módulo en imports

```ts
import {MatTableModule} from '@angular/material/table';
```

## Obtener datos en componente

```ts

// Interfaz de la respuesta
export interface Usuario {
    nombre: string;
    rut: number;
    edad: number;
}

// inicializar array de usuarios,  datasource y columnas de la tabla
usuarios: Usuario[] = [];
dataSource = new MatTableDataSource(this.usuarios); // [!code ++]
displayedColumns: string[] = ['nombre', 'rut', 'edad']; // [!code ++]

// Cargar datos
  ngOnInit() {
    this.obtenerUsuarios();
}

// Metodo para obtener los datos
obtenerUsuarios() {

    this.usuariosService.obtenerUsuarios().subscribe({
      next: (res) => {
        this.usuarios = res
        this.dataSource = new MatTableDataSource(this.usuarios); // [!code ++]
      },
      error: (error) => {
        console.log(error)
      }
    });
}

```

## Renderizar datos en componente HTML

```html
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

  <ng-container matColumnDef="nombre">
    <th mat-header-cell *matHeaderCellDef> Nombre </th>
    <td mat-cell *matCellDef="let element"> {{element.nombre}} </td>
  </ng-container>

  <ng-container matColumnDef="rut">
    <th mat-header-cell *matHeaderCellDef> RUT </th>
    <td mat-cell *matCellDef="let element"> {{element.rut}} </td>
  </ng-container>

  <ng-container matColumnDef="edad">
    <th mat-header-cell *matHeaderCellDef> Edad </th>
    <td mat-cell *matCellDef="let element"> {{element.edad}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>

```
