import { DefaultTheme } from "vitepress";


export function sidebarSpringboot(): DefaultTheme.SidebarItem[] {
    return [
        {
            items: [
                { text: 'Conceptos Básicos', link: '/springboot/conceptos' },
                { text: 'Initializr', link: '/springboot/initializr' },
                {
                    text: 'Arquitectura del Proyecto',
                    collapsed: false,
                    items: [
                        { text: 'Estructura del Proyecto', link: '/springboot/estructura_proyecto' },
                        { text: 'Entity', link: '/springboot/entity' },
                        { text: 'DTO', link: '/springboot/dto' },
                        { text: 'Repository', link: '/springboot/repositories' },
                        { text: 'Service', link: '/springboot/services' },
                        { text: 'Service Implements', link: '/springboot/service_imp' },
                        { text: 'Controller', link: '/springboot/controller' },
                    ]
                },
                {
                    text: 'Pruebas Unitarias',
                    collapsed: false,
                    items: [
                        { text: 'Beneficios y Características', link: '/springboot/pruebas_unitarias/benef_caract' },
                        { text: 'Pruebas Unitarias', link: '/springboot/pruebas_unitarias/pruebas_unitarias' },
                        { text: 'Librería HATEOAS', link: '/springboot/pruebas_unitarias/hateoas' },
                    ]
                },
            ]
        }
    ]
}