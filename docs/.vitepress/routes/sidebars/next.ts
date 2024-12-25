import { DefaultTheme } from "vitepress"

export const sidebarNext = (): DefaultTheme.SidebarItem[] => {
    return [
        {
            text: 'Configuraciones',
            collapsed: false,
            items: [
                { text: 'Instalación', link: '/next/config/instalaciones' },
            ]
        }
    ]
}