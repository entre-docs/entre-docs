import { DefaultTheme } from "vitepress";


export function sidebarBootstrap(): DefaultTheme.SidebarItem[]{
    return [
        {
            text: 'Bootstrap 5',
            collapsed: false,
            items: [
                { text: 'Instalación', link: '/bootstrap5/instalacion' },
                { text: '¿Qué es Bootstrap 5?', link: '/bootstrap5/bootstrap5' },
            ]
        },
    ]
}