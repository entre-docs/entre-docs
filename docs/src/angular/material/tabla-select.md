# Select Checkbox

## Importar en módulo
```ts
import {MatCheckboxModule} from '@angular/material/checkbox';
```

## Importar en componente
```ts
import {SelectionModel} from '@angular/cdk/collections';
```

## Agregar en componente

```ts
// Interfaz de la respuesta
export interface Usuario {
    nombre: string;
    rut: number;
    edad: number;
}

selection = new SelectionModel<Usuario>(true, []);

// Agregar columna select
displayedColumns: string[] = ['select', 'nombre', 'rut', 'edad'];

isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

```

## Agregar columna para los select en componente HTML

```html{4-20}
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

    <!-- Columna select -->
  <ng-container matColumnDef="select">
    <th mat-header-cell *matHeaderCellDef>
      <mat-checkbox color="primary" (change)="$event ? toggleAllRows() : null"
                    [checked]="selection.hasValue() && isAllSelected()"
                    [indeterminate]="selection.hasValue() && !isAllSelected()"
                    [aria-label]="checkboxLabel()">
      </mat-checkbox>
    </th>

    <td mat-cell *matCellDef="let row">
      <mat-checkbox color="primary" (click)="$event.stopPropagation()"
                    (change)="$event ? selection.toggle(row) : null"
                    [checked]="selection.isSelected(row)"
                    [aria-label]="checkboxLabel(row)">
      </mat-checkbox>
    </td>
  </ng-container>

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