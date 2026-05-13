import { DefaultTheme } from "vitepress";


export function sidebarKubernetes(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Kubernetes',
            collapsed: false,
            items: [
                { text: 'Conceptos', link: '/kubernetes/conceptos' },
                { text: 'Minikube', link: '/kubernetes/minikube' },
                { text: 'Comandos básicos', link: '/kubernetes/comandos' },
                {
                    text: 'Laboratorios',
                    collapsed: false,
                    items: [
                        { text: 'PostgreSQL + pgAdmin', link: '/kubernetes/postgres-pgadmin' },
                        { text: 'Backend App', link: '/kubernetes/backend' },
                    ]
                }
            ]
        }
    ]
}