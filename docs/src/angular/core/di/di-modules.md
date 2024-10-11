---
outline: deep
---


# Inyección de dependencias a nivel de Módulos

## Servicio Task

::: code-group
```ts [task-generic.service.ts]
import { Signal } from "@angular/core";
import { Task } from "../../interfaces/task.interface";

export abstract class BaseTaskService {

    abstract taskList: Signal<Task[]>;

    abstract addTask(title: string): void
    abstract changeTaskStatus(id: number): void
    abstract deleteTask(taskId: number): void
    abstract editTask(taskItem: Task, newTaskTitle: string): void
}
```

```ts [task.service.ts]
@Injectable()
export class TodoService extends BaseTaskService {
  public _taskList = signal<Task[]>([]);
  public taskList = computed( () => this._taskList() )

  constructor(private localStorageService: StorageService) {
    super();
  }


  /* Guardar nueva tarea */
  public addTask(title: string) {
  }

  /* Actualizar estado de una tarea */
  public changeTaskStatus(id: number): void {
  }

  /* Eliminar tarea */
  public deleteTask(taskId: number){
  }

  /* Editar título de una tarea */
  public editTask(taskItem: Task, newTaskTitle: string){
    
  }
}

```
:::

## Módulos
::: code-group
```ts [task-page.module.ts]

const routes: Routes = [
  { path: '', component: LocalstoragePageComponent },
];

@NgModule({
  declarations: [
    LocalstoragePageComponent,
    TaskListComponent,
    TaskItemComponent,
    AddInputTaskComponent,
    TaskFilterPipe,
    DeteleTaskModalComponent,
    EditTaskModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgbModule
  ],
  providers: [
    { provide: BaseTaskService, useClass: TodoService }
  ]
})
export class LocalstoragePageModule { }

```
:::

### Uso del servicio

* **provide: BaseTaskService:**
Este campo indica qué token o servicio Angular debería buscar cuando se intenta inyectar una dependencia. En este caso, BaseTaskService es el token, que puede ser una clase, un valor, un string o un InjectionToken. Cuando un componente o servicio solicita BaseTaskService mediante inyección de dependencias, Angular utilizará esta configuración para determinar qué devolver.

* **useClass: TodoService:**
Aquí le estás diciendo a Angular que, en lugar de proporcionar una instancia de BaseTaskService directamente, debe proporcionar una instancia de TodoService.
Esto significa que cada vez que alguien solicite BaseTaskService como dependencia, Angular inyectará una instancia de TodoService en su lugar.