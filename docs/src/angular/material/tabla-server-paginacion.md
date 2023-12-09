---
outline: deep
---

# Paginación (Server side)

## Backend

Para este tipo de paginación es necesario configurar el backend, para que permita
listar registros de acuerdo a los query params: page y limit, donde:
* **page**: Página de los registros
* **limit**: Cantidad de registros por página

## Configuracion de la paginación en el componente 


```ts
@ViewChild(MatPaginator) paginator!: MatPaginator;

listaUsuarios: Usuario[] = []; // [!code ++]
dataSource = new MatTableDataSource(this.listaUsuarios);
displayedColumns: string[] = ['nombre', 'rut', 'edad'];

totalRegistros: number = 0; // [!code ++]
page: number = 1; // [!code ++]
limit: number = 6; // [!code ++] // registros por página

ngOnInit(): void {
    this.obtenerUsuarios();
}

obtenerUsuarios() {

    this.usuariosService.obtenerUsuarios(this.page, this.limit).subscribe({ // [!code ++]
      next: (res) => {
        this.listaUsuarios = res.usuarios; // [!code ++]
        this.totalRegistros = res.totalUsuarios; // [!code ++]

        // Actualizar la fuente de datos sin crear una nueva instancia
        this.dataSource.data = this.listaAlumnos; // [!code ++]

        this.paginator.pageIndex = this.page -1; // [!code ++] // Restar 1 para ajustarse al índice base 0 (pageIndex)
        this.paginator.length = this.totalRegistros; // [!code ++]
      },
      error: (error) => {
        console.log(error)
      }
    });
}

cambioPagina(event: PageEvent){ // [!code ++]
    this.page = event.pageIndex + 1; // [!code ++]
    this.limit = event.pageSize; // [!code ++]
    this.obtenerUsuarios(); // [!code ++]
}

```

## Agregar paginación en la tabla (HTML)

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
   

<mat-paginator #paginator (page)="cambioPagina($event)" // [!code ++]
                [length]="totalRegistros" // [!code ++]
                [pageIndex]="page" // [!code ++] 
                [pageSize]="limit" // [!code ++]
                [pageSizeOptions]="[6, 12, 18, 24]" // [!code ++]
                [showFirstLastButtons]="true"> // [!code ++]
</mat-paginator> // [!code ++]

```