import { DefaultTheme } from "vitepress"

export const sidebarVSC = (): DefaultTheme.SidebarItem[] => {
    return [
        {
            text: 'Configuraciones',
            collapsed: false,
            items: [
                { text: 'Editar Etiquetas HTML', link: '/vsc/editar_etiquetas' },
            ]
        }
    ]
}