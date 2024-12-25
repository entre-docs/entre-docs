import { DefaultTheme } from "vitepress"

export const sidebarPython = (): DefaultTheme.SidebarItem[] => {
    return [
        {
            text: 'Python',
            collapsed: false,
            items: [
                { text: 'Instalación', link: '/python/instalacion.md' },

            ],
        },

    ]
}