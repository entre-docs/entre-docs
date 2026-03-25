import { DefaultTheme } from "vitepress";


export function sidebarAzure(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Devops',
            collapsed: false,
            items: [
                { text: 'Definición de DevOps', link: '/azure/devops' },
                { text: 'Ciclo de vida de las aplicaciones', link: '/azure/ciclo_vida' },
                { text: 'Servicios de Azure DevOps', link: '/azure/servicios_azure' },
            ]
        },
        {
            text: 'Azure',
            collapsed: true,
            items: [
                { text: 'Azure Container Registry (ACR)', link: '/azure/acr' },
                { text: 'Creación de un ACR', link: '/azure/creacion_acr' },
                { text: 'Orquestación de contenedores (AKS)', link: '/azure/aks' },
                { text: 'Creación de un clúster AKS', link: '/azure/creacion_aks' },

            ]
        },
        {
            text: 'Seguridad e Identidad',
            collapsed: true,
            items: [
                { text: 'Identity as a Service (IDaaS)', link: '/azure/idaas' },
                { text: 'Json Web Token (JWT)', link: '/azure/jwt' },
                { text: 'API Manager', link: '/azure/api_manager' },
            ]
        },
        {
            text: 'Integración Aplicaciones Cloud',
            collapsed: true,
            items: [
                { text: 'Frontend Angular con MSAL', link: '/azure/angular_msal' },
                { text: 'Backend BFF con Spring Security', link: '/azure/bff_security' },
                { text: 'Usuarios y Claims en Azure AD B2C', link: '/azure/adb2c' },
            ]
        },
        {
            text: 'Arquitectura Serverless',
            collapsed: true,
            items: [
                { text: 'Function as a Service (FaaS)', link: '/azure/serverless_faas' },
            ]
        }
    ]
}