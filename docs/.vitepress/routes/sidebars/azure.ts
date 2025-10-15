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
        {
            text: 'Azure',
            collapsed: false,
            items: [
                { text: 'Azure Container Registry (ACR)', link: '/azure/acr' },
                { text: 'Creación de un ACR', link: '/azure/creacion_acr' },
                { text: 'Orquestación de contenedores (AKS)', link: '/azure/aks'},
                { text: 'Creación de un clúster AKS', link: '/azure/creacion_aks' },

            ]
        },
    ]
}