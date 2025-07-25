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
        {
            text: 'Recursos en la nube',
            collapsed: true,
            items: [
                { text: 'Productos de AWS', link: '/cloud_computing/productos_de_aws' },
                { text: 'Regiones y Zonas de Disponibilidad', link:'/cloud_computing/regiones_zonas' },
            ]
        },
        { text: 'Elastic File System (EFS)', link: '/cloud_computing/elastic_file_system' },
        {
            text: 'Comandos Linux',
            collapsed: true,
            items: [
                { text: 'Comandos básicos', link: '/cloud_computing/comandos_basicos' },
                { text: 'Comandos avanzados', link: '/cloud_computing/comandos_avanzados' },
                { text: 'Usuarios y Permisos', link: '/cloud_computing/comandos_usuarios_y_permisos' },
                { text: 'Comandos Cron y Rsync', link: '/cloud_computing/comandos_cron_y_rsync' },
            ]
        }
    ]
}