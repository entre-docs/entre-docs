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

* **describe**: Define un conjunto de pruebas relacionadas. En este caso, pruebas para el componente PruebasUnitariasComponent

* **configureTestingModule**: Configura el módulo de pruebas. Aquí, se indica que importe el módulo PruebasUnitariasComponent. Si el componente tiene dependencias, también se debería proporcionar stubs o mocks para esas dependencias.

* **compileComponents**: Compila los componentes del módulo de pruebas. Angular generalmente compila los componentes de manera asíncrona, por lo que este método se utiliza para esperar a que se completen las operaciones de compilación antes de continuar.

* **TestBed.createComponent**: Crea una instancia del componente PruebasUnitariasComponent.

* **fixture.componentInstance**: Accede a la instancia del componente que se ha creado.

* **fixture.detectChanges()**: Detecta los cambios en el componente y actualiza la vista.

* **it**: Esta prueba verifica si el componente se ha creado correctamente. 

* **expect**: Verifica si component es verdad (**toBeTruthy()**), lo que significa que el componente se ha creado con éxito.


## Ejecución de pruebas unitarias

```ts
ng test
```

Para ejecutar las pruebas unitarias de nuestro proyecto debemos ejecutar en el CMD o terminal de VsCode: **ng test**.
Una vez finalizada la ejecución se abrirá el navegador con el resultado de las pruebas unitarias.