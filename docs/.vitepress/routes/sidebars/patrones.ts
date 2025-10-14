import { DefaultTheme } from "vitepress";

export function sidebarPatrones(): DefaultTheme.SidebarItem[] {
    return [
        { text: 'Patrones de Diseño', link: '/patrones/patrones_diseno' },
        {
            text: 'Patrones Creacionales',
            collapsed: false,
            items: [
                { text: 'Builder', link: '/patrones/creacionales/builder' },
                { text: 'Factory Method', link: '/patrones/creacionales/factory_method' },

            ]
        },
        {
            text: 'Patrones Estructurales',
            collapsed: false,
            items: [
                //{ text: 'Versionamiento Remoto', link: '/git/github' }
            ]
        },
        {
            text: 'Patrones de Comportamiento',
            collapsed: false,
            items: [
                //{ text: 'SSH Windows', link: '/git/windows-ssh.md' },
            ]
        }
    ]
}