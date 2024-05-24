---
outline: deep
---

# Data Transfer Object 
## DTO Class Validator - Transformer

Las clases ``CreateUserDto`` y ``UpdateUserDto`` representan los datos necesarios para registrar y actualizar un usuario, utilizando la librería class validator para las validaciones de cada campo.

::: code-group
```ts [Create User DTO]
import {
    IsEmail, IsNotEmpty, IsOptional, IsString, MinLength
} from 'class-validator';

export class CreateUserDto {
    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    name: string;

    @IsString()
    @MinLength(5)
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @MinLength(10)
    @IsNotEmpty()
    password: string

    @IsString()
    @IsOptional()
    img?: string
}
```
```ts [Update User DTO]
import {
    IsEmail, IsNumber, IsOptional, IsString, MinLength
} from 'class-validator';

export class UpdateUserDto {

    @IsNumber()
    id: number; 

    @IsString()
    @MinLength(5)
    @IsOptional() 
    name?: string; 

    @IsEmail()
    @IsString()
    @MinLength(5)
    @IsOptional()
    email?: string; 

    @IsString()
    @MinLength(10)
    @IsOptional()
    password?: string;

    @IsString()
    @IsOptional()
    img?: string; 
}
```
:::


## Método validateDto

Valida y transforma un objeto en una instancia de una clase DTO especificada.

```ts
import { ValidationError, validate } from "class-validator";
import { ClassConstructor, plainToInstance } from "class-transformer";

/**
 * @param {object} object - El objeto que se va a transformar y validar.
 * @param {ClassConstructor<T>} cls - La función constructora de clase para la clase DTO objetivo.
 * @returns {Promise<[ValidationError[]?, T?]>} Un array que contiene errores de validación (si los hay) y la instancia transformada del DTO.
 * @template T - El tipo de DTO que se va a crear.
 */
const validateDto = async <T extends object>(object: { [key: string]: any }, cls: ClassConstructor<T>): Promise<[ValidationError[]?, dto?: T]> => {

    const dto = plainToInstance(cls, object);
    const errors = await validate(dto);
    if (errors.length > 0) {

        const error = errors.map(error => (
            {
                property: error.property,
                value: error.value,
                constraints: error.constraints
            }
        ))
        return [error]
    }

    return [undefined, dto]
}
```


## Obtener errores u objecto DTO

```ts
const [error, registerUserDto] = await validateDto(body, CreateUserDto);
```