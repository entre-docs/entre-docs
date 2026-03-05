---
outline: deep
---

# Genéricos

En TypeScript, un genérico es una herramienta poderosa que permite definir componentes (clases, funciones, interfaces, etc.) que pueden trabajar con múltiples tipos de datos sin perder el tipo de información. Los genéricos proporcionan una forma de crear código que es más flexible y reutilizable, permitiendo que los tipos se especifiquen como parámetros en el momento de la invocación o declaración.

## Nivel Básico

### Función genérica

La forma más simple de genérico: una función que acepta y retorna el mismo tipo.

```ts
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hello World"); // tipo: string
let output2 = identity<number>(42);            // tipo: number
let output3 = identity(true);                  // TypeScript infiere: boolean
```

### Array genérico

```ts
function firstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

const first = firstElement([1, 2, 3]);   // tipo: number | undefined
const name  = firstElement(["Ana", "Luis"]); // tipo: string | undefined
```

### Múltiples parámetros de tipo

```ts
function pair<K, V>(key: K, value: V): [K, V] {
    return [key, value];
}

const entry = pair("nombre", 42); // tipo: [string, number]
```

### Interfaz genérica

```ts
interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
    data: { name: "Ana", age: 30 },
    status: 200,
    message: "OK",
};
```

---

## Nivel Medio

### Restricciones con `extends`

Limita los tipos aceptados a aquellos que cumplan cierta forma.

```ts
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(arg: T): T {
    console.log(arg.length);
    return arg;
}

logLength("hola");         // string tiene length
logLength([1, 2, 3]);      // array tiene length
logLength({ length: 5 });  // objeto con length
// logLength(42);           // Error: number no tiene length
```

### Restricción con `keyof`

Garantiza que una clave exista en el objeto recibido.

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = { name: "Ana", age: 30, active: true };

const name   = getProperty(user, "name");   // tipo: string
const age    = getProperty(user, "age");    // tipo: number
// getProperty(user, "email");        // Error: "email" no existe en el tipo
```

### Clase genérica

```ts
class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    get size(): number {
        return this.items.length;
    }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // 2

const stringStack = new Stack<string>();
stringStack.push("a");
stringStack.push("b");
console.log(stringStack.peek()); // "b"
```

### Valores por defecto en genéricos

```ts
interface PaginatedResult<T = unknown> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
}

// Sin especificar T, usa `unknown` por defecto
const result: PaginatedResult<string> = {
    items: ["Ana", "Luis"],
    total: 2,
    page: 1,
    pageSize: 10,
};
```

### Función genérica con retorno condicional

```ts
function wrapInArray<T>(value: T | T[]): T[] {
    return Array.isArray(value) ? value : [value];
}

wrapInArray(1);         // [1]
wrapInArray([1, 2, 3]); // [1, 2, 3]
wrapInArray("hola");    // ["hola"]
```

---

## Nivel Avanzado

### Tipos condicionales genéricos

```ts
type IsArray<T> = T extends any[] ? true : false;

type A = IsArray<string[]>; // true
type B = IsArray<number>;   // false

// Extraer el tipo interno de un array
type Unwrap<T> = T extends (infer U)[] ? U : T;

type C = Unwrap<string[]>; // string
type D = Unwrap<number>;   // number
```

### `infer` para extraer tipos

```ts
// Extraer el tipo de retorno de una función
type ReturnType<T extends (...args: any[]) => any> =
    T extends (...args: any[]) => infer R ? R : never;

function fetchUser(): { name: string; age: number } {
    return { name: "Ana", age: 30 };
}

type UserType = ReturnType<typeof fetchUser>;//{ name: string; age: number }

// Extraer el tipo del primer argumento
type FirstArg<T extends (...args: any[]) => any> =
    T extends (first: infer F, ...rest: any[]) => any ? F : never;

type F = FirstArg<(id: number, name: string) => void>; // number
```

### Genéricos con `Partial`, `Required`, `Readonly` personalizados

```ts
// Implementación manual de DeepReadonly
type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

type Config = {
    server: { host: string; port: number };
    debug: boolean;
};

type ImmutableConfig = DeepReadonly<Config>;
// Ahora ni config.server ni config.server.host son modificables
```

### Tipos mapeados genéricos

```ts
// Convierte todas las propiedades en opcionales y con valor o null
type Nullable<T> = { [K in keyof T]: T[K] | null };

// Prefija todas las claves con "get"
type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type User = { name: string; age: number };

type UserGetters = Getters<User>;
// { getName: () => string; getAge: () => number }
```

### Patrón Builder genérico

```ts
class QueryBuilder<T extends Record<string, unknown>> {
    private filters: Partial<T> = {};
    private _limit = 10;
    private _offset = 0;

    where<K extends keyof T>(key: K, value: T[K]): this {
        this.filters[key] = value;
        return this;
    }

    limit(n: number): this {
        this._limit = n;
        return this;
    }

    offset(n: number): this {
        this._offset = n;
        return this;
    }

    build(): { filters: Partial<T>; limit: number; offset: number } {
        return {
            filters: this.filters, limit: this._limit, offset: this._offset
            };
    }
}

type Product = { name: string; price: number; category: string };

const query = new QueryBuilder<Product>()
    .where("category", "electronics")
    .where("price", 500)
    .limit(5)
    .offset(0)
    .build();

// { filters: { category: "electronics", price: 500 }, limit: 5, offset: 0 }
```

### Función `merge` con genéricos variádicos

```ts
function merge<T extends object, U extends object>(a: T, b: U): T & U {
    return { ...a, ...b };
}

const obj1 = { name: "Ana", age: 30 };
const obj2 = { role: "admin", active: true };

const merged = merge(obj1, obj2);
// tipo: { name: string; age: number } & { role: string; active: boolean }
console.log(merged.name);   // "Ana"
console.log(merged.role);   // "admin"
```

### Repositorio genérico (patrón real)

```ts
interface Entity {
    id: number;
}

interface Repository<T extends Entity> {
    findById(id: number): Promise<T | undefined>;
    findAll(): Promise<T[]>;
    save(entity: Omit<T, "id">): Promise<T>;
    delete(id: number): Promise<void>;
}

class InMemoryRepository<T extends Entity> implements Repository<T> {
    private store: T[] = [];
    private nextId = 1;

    async findById(id: number): Promise<T | undefined> {
        return this.store.find(e => e.id === id);
    }

    async findAll(): Promise<T[]> {
        return [...this.store];
    }

    async save(entity: Omit<T, "id">): Promise<T> {
        const newEntity = { ...entity, id: this.nextId++ } as T;
        this.store.push(newEntity);
        return newEntity;
    }

    async delete(id: number): Promise<void> {
        this.store = this.store.filter(e => e.id !== id);
    }
}

// Uso
interface User extends Entity {
    name: string;
    email: string;
}

const userRepo = new InMemoryRepository<User>();
await userRepo.save({ name: "Ana", email: "ana@example.com" });
const users = await userRepo.findAll();
```
