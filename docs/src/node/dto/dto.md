---
outline: deep
---

# DTO

## DTO Class
Las clases `CreateUserDto` y `UpdateUserDto` representan los datos necesarios para registrar y actualizar un usuario. Proporcionan un método estático para crear instancias de la clase a partir de un objeto, validando los campos necesarios.

::: code-group
```ts [Create DTO]
import { regularExps } from "../../../config";

export class CreateUserDto {
    
    private constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly password: string,
    ){}

    static create(object: {[key:string]: any}): [string?, RegisterUserDto?]{
        const { name, email, password } = object;

        if (!name) return ['Missing name'];
        if (!email) return ['Missing email'];
        if (!regularExps.email.test(email)) return ['Email is not valid'];
        if (!password) return ['Missing password'];
        if (typeof password !== 'string') return ['Password must be a string'];
        if (password.length < 6 ) return ['Password is too short'];

        return [undefined, new RegisterUserDto(name, email, password)];


    }
}
```

```ts [Update DTO]
import { regularExps } from "../../../config";

export class UpdateUserDto {
    
    private constructor(
        public readonly id: number,
        public name?: string,
        public email?: string,
        public password?: string,
    ){}

    static create(object: { [key: string]: any }): [string?, UpdateUserDto?] {
        const { id, name, email, password } = object;

        if (typeof id !== 'number') return ['ID must be a number'];

        const updateDto = new UpdateUserDto(id);

        if (name !== undefined) {
            if (typeof name !== 'string') return ['Name must be a string'];
            if (name.length < 3) return ['Name is too short'];
            updateDto.name = name;
        }

        if (email !== undefined) {
            if (!regularExps.email.test(email)) return ['Email is not valid'];
            updateDto.email = email;
        }

        if (password !== undefined) {
            if (typeof password !== 'string') return ['Password must be a string'];
            if (password.length < 6) return ['Password is too short'];
            updateDto.password = password;
        }

        return [undefined, updateDto];
    }
}

```
:::

## Crear DTO
```ts
const [error, registerUserDto] = RegisterUserDto.create(body);
```
