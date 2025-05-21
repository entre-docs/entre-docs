import { DefaultTheme } from "vitepress";


export function sidebarSpringboot(): DefaultTheme.SidebarItem[] {
    return [
        {
            items: [
                { text: 'Conceptos Básicos', link: '/springboot/conceptos' },
                { text: 'Initializr', link: '/springboot/initializr' },
                {
                    text: 'Arquitectura del Proyecto',
                    collapsed: true,
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

            ]
        }
    ]
}