---
outline: deep
---

# @Input()

Define una propiedad que puede ser enviada desde el padre hacia el componente hijo.

## Componente Hijo

```ts
@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

}
```

## Componente Padre: ts

```ts
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  public characters: Character[] = [
    {
      name: 'Trunks',
      power: 20000
    },
    {
      name: 'Goku',
      power: 35000
    }
  ]
}

```

## Componente Padre: html

```html
<div class="row mt-4">
    <div class="col-lg-4">
        <dbz-list [characterList]="characters" ></dbz-list>// [!code ++]
    </div>

    <div class="col-lg-5 ps-5">
        <dbz-form></dbz-form>
    </div>
</div>
```