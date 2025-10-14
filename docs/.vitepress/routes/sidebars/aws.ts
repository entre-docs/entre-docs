import { DefaultTheme } from "vitepress";


export function sidebarAWS(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'AWS',
            collapsed: false,
            items: [
                { text: 'Computador vs Máquinas Virtuales', link: '/aws/computador_maq_virtuales' },
                { text: 'Máquinas Virtuales', link: '/aws/maquinas_virtuales' },
                { text: 'Lanzamiento de instancia EC2', link: '/aws/lanzamiento_instancia_ec2' },
            ]
        },
        {
            text: 'Servicios de AWS',
            collapsed: true,
            items: [
                { text: 'Modelo de Servicios', link: '/aws/modelo_de_servicios/modelo_servicios' },
                { text: 'IaaS', link: '/aws/modelo_de_servicios/iaas' },
                { text: 'PaaS', link: '/aws/modelo_de_servicios/paas' },
                { text: 'SaaS', link: '/aws/modelo_de_servicios/saas' },
                { text: 'Modelo de Responsabilidad Compartida', link: '/aws/modelo_responsab_compartida' },
            ]
        },
        {
            text: 'Recursos en la nube',
            collapsed: true,
            items: [
                { text: 'Productos de AWS', link: '/aws/productos_de_aws' },
                { text: 'Regiones y Zonas de Disponibilidad', link:'/aws/regiones_zonas' },
            ]
        },
        { text: 'Elastic File System (EFS)', link: '/aws/elastic_file_system' },
        {
            text: 'Comandos Linux',
            collapsed: true,
            items: [
                { text: 'Comandos básicos', link: '/aws/comandos_basicos' },
                { text: 'Comandos avanzados', link: '/aws/comandos_avanzados' },
                { text: 'Usuarios y Permisos', link: '/aws/comandos_usuarios_y_permisos' },
                { text: 'Comandos Cron y Rsync', link: '/aws/comandos_cron_y_rsync' },
            ]
        }
    ]
}