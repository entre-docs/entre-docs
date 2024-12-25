import { DefaultTheme } from "vitepress"

export const sidebarWindows = (): DefaultTheme.SidebarItem[] => {
    return [
        {
            text: 'PowerShell',
            collapsed: false,
            items: [
                { text: 'Comandos', link: '/os/windows/powershell-comandos' },
            ]
        }
    ]
}