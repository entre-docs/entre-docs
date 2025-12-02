import { DefaultTheme } from "vitepress";

export function sidebarPatrones(): DefaultTheme.SidebarItem[] {
    return [
        { text: 'Patrones de Diseño', link: '/patrones/patrones_diseno' },
        {
            text: 'Patrones Creacionales',
            collapsed: false,
            items: [
                { text: 'Builder', link: '/patrones/builder' },
                { text: 'Factory Method', link: '/patrones/factory_method' },

            ]
        },
        {
            text: 'Patrones Estructurales',
            collapsed: false,
            items: [
                //{ text: 'Builder', link: '/patrones/builder' },

            ]
        },
        {
            text: 'Patrones de Comportamiento',
            collapsed: false,
            items: [
                //{ text: 'Builder', link: '/patrones/builder' },
            
            ]
        }
    ]
}