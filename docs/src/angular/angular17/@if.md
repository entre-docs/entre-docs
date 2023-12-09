# @if - @else

La directiva estructural **@if** muestra condicionalmente su contenido cuando la expresión a evaluar es verdadera.

## component.ts

```ts
@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export default class ControlFlowComponent {

  public showContent: boolean = false
}
```

## component.html

```html
<section >

    @if ( showContent ) {
        <h2 >Mostrar contenido si showContent es true</h2>
    }
    @else {
        <h2>Muestra el contenido si showContent es false</h2>
    }

</section>
```