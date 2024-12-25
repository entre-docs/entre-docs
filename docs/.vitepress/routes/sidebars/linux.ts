import { DefaultTheme } from "vitepress"

export const sidebarLinux = (): DefaultTheme.SidebarItem[] => {
    return [
        {
            text: 'Bash',
            collapsed: false,
            items: [
                { text: 'Comandos', link: '/os/linux/bash-comandos' },
                { text: 'Permisos', link: '/os/linux/permisos' },

            ]
        }
    ]
}