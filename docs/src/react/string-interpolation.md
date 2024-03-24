---
outline: deep
---

# Interpolación de cadenas

Consiste en incrustar valores o expresiones dinámicas dentro del JSX

## Ejemplo 1:  Renderizar variables

```tsx

export const FirstApp = () => {

    const title: string = 'React 18';
    const subtitle: string = 'Vitepress docs';
    const message: string = 'My message';

    return (
        <>
            <h1>{title}</h1>
            <h3 >{subtitle}</h3>
            <p>Function getMessage: {message}</p>
        </>
    )
}
```

## Ejemplo 2: Renderizar elementos de un array

```tsx
export const ListComponent = () => {
  const items: string[] = ['Foo', 'Alice', 'Bar'];

  return (
    <div>
      <h2>My list</h2>

      <ul>
        {
            items.map((item, index) => (
                <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
};
```

## Ejemplo 3: Atributos HTML
```tsx
export const Card = ({ url, title }: Props) => {
  
  return (
    <div className="card">
        <img src={ url } alt={title} />
    </div>
  )
}
```