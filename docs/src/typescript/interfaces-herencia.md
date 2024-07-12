---
outline: deep
---

# Interfaces con herencia

En TypeScript, la herencia en interfaces permite a una interfaz heredar propiedades y métodos de otra interfaz. Esto proporciona una forma de reutilizar y extender la definición de interfaces existentes para crear nuevas interfaces más específicas o complejas.

## Sintaxis
```ts
interface InterfazBase {
  propiedadBase: string;
}

interface InterfazHija extends InterfazBase {
  propiedadExtendida: number;
}
```

## Herencia simple

```ts
interface Animal {
  nombre: string;
  hacerSonido(): void;
}

interface Perro extends Animal {
  raza: string;
}

const miPerro: Perro = {
  nombre: 'Rex',
  raza: 'Labrador',
  hacerSonido() {
    console.log('Guau Guau');
  }
};

miPerro.hacerSonido(); // Guau Guau

```

## Herencia múltiple
```ts
interface SerVivo {
  respirar(): void;
}

interface Movil {
  moverse(): void;
}

interface Humano extends SerVivo, Movil {
  nombre: string;
  hablar(): void;
}

const persona: Humano = {
  nombre: 'Alicia',
  respirar() {
    console.log('Respirando');
  },
  moverse() {
    console.log('Moviéndose');
  },
  hablar() {
    console.log('Hola, soy Alicia');
  }
};

persona.respirar(); // Respirando
persona.moverse();  // Moviéndose
persona.hablar();   // Hola, soy Alicia

```

## Clase implementando interfaces
```ts
interface Vehiculo {
  marca: string;
  modelo: string;
  conducir(): void;
}

class Coche implements Vehiculo {
  marca: string;
  modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }

  conducir() {
    console.log(`Conduciendo un ${this.marca} ${this.modelo}`);
  }
}

const miCoche = new Coche('Toyota', 'Corolla');
miCoche.conducir(); // Conduciendo un Toyota Corolla

```
