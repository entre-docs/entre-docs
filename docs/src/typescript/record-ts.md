---
outline: deep
---

# Record

`Record<K, T>` en TypeScript es un tipo genérico que representa un objeto cuyas claves son del tipo `K` y cuyos valores son del tipo `T`. Esto es útil cuando quieres definir un tipo que describe un objeto con propiedades específicas y tipos para esas propiedades.

## Ejemplo 1:  Employee Records 
```ts
type Employee = {
    name: string;
    age: number;
};

const employees: Record<string, Employee> = {
    '001': { name: 'John', age: 30 },
    '002': { name: 'Mary', age: 25 },
    '003': { name: 'Peter', age: 35 },
};

// Accessing an employee by key
const employeeJohn = employees['001'];
console.log(employeeJohn.name); // Output: John
```
## Ejemplo 2: Configuration Map
```ts
type Configuration = 'mode' | 'theme' | 'language';

const defaultConfig: Record<Configuration, string> = {
    mode: 'dark',
    theme: 'blue',
    language: 'english',
};

// Using the configuration
console.log(defaultConfig.mode); // Output: dark
console.log(defaultConfig.language); // Output: english
```

## Ejemplo 3: Error Messages Management
```ts
type ErrorCode = '404' | '500' | '403';

const errorMessages: Record<ErrorCode, string> = {
    '404': 'Page not found',
    '500': 'Internal server error',
    '403': 'Access denied',
};

// Function to get error message
function getErrorMessage(code: ErrorCode): string {
    return errorMessages[code] || 'Unknown error';
}

console.log(getErrorMessage('404')); // Output: Page not found
console.log(getErrorMessage('503')); // Output: Unknown error

```