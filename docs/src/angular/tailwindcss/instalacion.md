---
outline: deep
---

# Instalación y Configuraciones

* Tailwindcss
```bash
npm install -D tailwindcss postcss autoprefixer
```

* tailwind.config.js
```bash
npx tailwindcss init
```

* Configurar archivo ``tailwind.config.js``
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

* Agregar directivas de tailwind

::: code-group

```css [styles.css]
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```scss [styles.scss]
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```
:::
