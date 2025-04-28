import { DefaultTheme } from "vitepress";


export function sidebarSpringboot(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Primeros Pasos',
            collapsed: true,
            items: [
                { text: 'Conceptos Básicos', link: '/springboot/conceptos' },
                { text: 'Initializr', link: '/springboot/initializr' },
                {
                    text: 'Arquitectura de Proyecto Básico',
                    collapsed: true,
                    items: [
                        { text: 'Estructura de un Proyecto', link: '/springboot/estructura_proyecto' },
                        { text: 'Entity', link: '/springboot/entity' },
                        { text: 'Service', link: '/springboot/services' },
                        { text: 'Service Implements', link: '/springboot/service_imp' },
                        { text: 'Repository', link: '/springboot/repositories' },
                        { text: 'Controller', link: '/springboot/controller' },
                    ]
                },

            ]
        }
    ]
}