import { DefaultTheme } from "vitepress";


export function sidebarCloudComputing(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Cloud Computing',
            collapsed: false,
            items: [
                { text: 'Computador vs Máquinas Virtuales', link: '/cloud_computing/computador_maq_virtuales' },
                { text: 'Máquinas Virtuales', link: '/cloud_computing/maquinas_virtuales' },
                { text: 'Lanzamiento de instancia', link: '/cloud_computing/lanzamiento_instancia' },
            ]
        }
    ]
}