# Paginación

## Importar modulo de paginacion

```ts
import {MatPaginatorModule} from '@angular/material/paginator';
```

## Agregar al dataSource

```ts
@ViewChild(MatPaginator) paginator!: MatPaginator; // [!code ++]

obtenerUsuarios() {

    this.usuariosService.obtenerUsuarios().subscribe({
      next: (res) => {
        this.usuarios = res
        this.dataSource = new MatTableDataSource(this.usuarios);
        this.dataSource.paginator = this.paginator; // [!code ++]
      },
      error: (error) => {
        console.log(error)
      }
    });
}
```

## Agregar paginación en la tabla (HTML)

```html{22}
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

<mat-paginator [pageSizeOptions]="[5, 10, 25, 100]" showFirstLastButtons></mat-paginator> // [!code ++]
```