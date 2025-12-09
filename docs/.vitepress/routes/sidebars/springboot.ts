import { DefaultTheme } from "vitepress";


export function sidebarSpringboot(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Springboot',
            collapsed: false,
            items: [
                { text: 'Conceptos Básicos', link: '/springboot/conceptos' },
                { text: 'Initializr', link: '/springboot/initializr' },
            ]
        },
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
            text: 'Pruebas y Cobertura',
            collapsed: true,
            items: [
                { text: 'Beneficios y Características', link: '/springboot/pruebas_unitarias/benef_caract' },
                { text: 'Pruebas Unitarias', link: '/springboot/pruebas_unitarias/pruebas_unitarias' },
                { text: 'Cobertura de pruebas unitarias (JaCoCo)', link: '/springboot/pruebas_unitarias/cobertura_pruebas' },
                { text: 'Librería HATEOAS', link: '/springboot/pruebas_unitarias/hateoas' },
            ]
        },
        {
            text: 'Arquetipos',
            collapsed: true,
            items: [
                { text: 'Arquetipos y su creación', link: '/springboot/arquetipos' },
                { text: 'Arquetipos vs Patrones', link: '/springboot/arquetipos_vs_patrones'},
            ]
        },
        {
            text: 'Autenticación y Seguridad',
            collapsed: true,
            items: [
                { text: 'Autenticación', link: '/springboot/autenticacion' },
            ]
        },
    ]
}