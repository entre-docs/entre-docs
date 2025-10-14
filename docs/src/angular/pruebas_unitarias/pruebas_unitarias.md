---
outline: deep
---

# Pruebas unitarias en Angular

Son esenciales para garantizar la estabilidad y el rendimiento de una aplicación Angular. En Angular, las pruebas unitarias se escriben utilizando un marco de prueba como Jasmine junto con herramientas de Angular.



```ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebasUnitariasComponent } from './pruebas-unitarias.component';

describe('PruebasUnitariasComponent', () => {
    // Instancia del componente que se probará
    let component: PruebasUnitariasComponent;

    /* Instancia de ComponentFixture (permite interactuar 
     con el componente y su vista en las pruebas) */
    let fixture: ComponentFixture<PruebasUnitariasComponent>;
    
    /* Se ejecuta antes de cada prueba.*/
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PruebasUnitariasComponent]
        })
        .compileComponents();
        
        fixture = TestBed.createComponent(PruebasUnitariasComponent); 
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    // Se escribe la prueba especifica usando it
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
```



## Explicación de las funciones

::: info 📘 **Flujo general de pruebas unitarias en Angular**
Esta tabla resume las principales funciones usadas al probar un componente con **Jasmine** y **TestBed**.
:::

| 🧩 Función / Método | 📝 Descripción |
|---------------------|----------------|
| **`describe`** | Agrupa un conjunto de pruebas relacionadas. En este caso, las pruebas del componente `PruebasUnitariasComponent`. |
| **`configureTestingModule`** | Configura el módulo de pruebas. Importa el componente a probar y define *stubs* o *mocks* para sus dependencias si es necesario. |
| **`compileComponents`** | Compila los componentes del módulo de pruebas de forma asíncrona antes de ejecutarlas. |
| **`TestBed.createComponent`** | Crea una instancia del componente `PruebasUnitariasComponent`. |
| **`fixture.componentInstance`** | Accede directamente a la instancia del componente creado. |
| **`fixture.detectChanges()`** | Detecta los cambios y actualiza la vista del componente. |
| **`it`** | Define una prueba individual (caso de prueba). En este caso, verifica que el componente se cree correctamente. |
| **`expect`** | Realiza la verificación: comprueba que el componente exista (`toBeTruthy()`), indicando que se creó con éxito. |





## Ejecución de pruebas unitarias

```ts
ng test
```

Para ejecutar las pruebas unitarias de nuestro proyecto debemos ejecutar en el CMD o terminal de VsCode: **ng test**.
Una vez finalizada la ejecución se abrirá el navegador con el resultado de las pruebas unitarias.