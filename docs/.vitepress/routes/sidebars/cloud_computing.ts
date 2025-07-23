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
        },
        {
            text: 'Servicios de AWS',
            collapsed: true,
            items: [
                { text: 'Modelo de Servicios', link: '/cloud_computing/modelo_de_servicios/modelo_servicios' },
                { text: 'IaaS', link: '/cloud_computing/modelo_de_servicios/iaas' },
                { text: 'PaaS', link: '/cloud_computing/modelo_de_servicios/paas' },
                { text: 'SaaS', link: '/cloud_computing/modelo_de_servicios/saas' },
                { text: 'Modelo de Responsabilidad Compartida', link: '/cloud_computing/modelo_responsab_compartida' },
            ]
        },
        /* {
            text: 'Productos de AWS',
            collapsed: true,
            items: [
                { text: 'Productos de AWS', link: '/cloud_computing/productos_de_aws' },
            ]
        }, */
        { text: 'Productos de AWS', link: '/cloud_computing/productos_de_aws' },
        { text: 'Regiones y Zonas de Disponibilidad', link:'/cloud_computing/regiones_zonas' },

    ]
}