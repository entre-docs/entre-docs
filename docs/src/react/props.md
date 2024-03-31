---
outline: deep
---

# Properties

Mecanismo para pasar datos de un componente padre a un componente hijo.
Cuando un componente es renderizado en otro componente, puede aceptar argumentos que son pasados como props.
Estas props son accesibles dentro del componente hijo y pueden ser utilizadas para personalizar su comportamiento o contenido.

```tsx
interface Props = {
  message: string;
};

const App = ({ message }: Props) => {
    return (
        <div>{message}</div>
    )        
};
```