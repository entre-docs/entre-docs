import { DefaultTheme } from "vitepress";


export function sidebarAzure(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Devops',
            collapsed: false,
            items: [
                { text: 'Definición de DevOps', link: '/azure/devops' },
                { text: 'Ciclo de vida de las aplicaciones', link: '/azure/ciclo_vida' },
                { text: 'Servicios de Azure DevOps', link: '/azure/servicios_azure'},
            ]
        },
    ]
}