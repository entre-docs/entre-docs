import { DefaultTheme } from "vitepress";

export function sidebarNode(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Instalación',
            collapsed: false,
            items: [
                { text: 'NVM Windows', link: '/node/installation/installation-windows' },
                { text: 'NVM Linux', link: '/node/installation/installation-linux' },

            ]
        },
        {
            text: 'Node Config',
            collapsed: false,
            items: [
                { text: 'Configurar TS-Nodemon', link: '/node/config/configuracion_ts' },
                { text: 'Configurar ts-node-dev', link: '/node/config/ts-node-dev' },

            ]
        },
        {
            text: 'DTO - Entity',
            collapsed: false,
            items: [
                { text: 'DTO', link: '/node/dto/dto' },
                { text: 'DTO Class Validator', link: '/node/dto/dto-classValidator' },

            ]
        },
        {
            text: 'REST API',
            collapsed: false,
            items: [
                { text: 'Configurar servidor', link: '/node/rest-api/server' },
                { text: 'Rutas', link: '/node/rest-api/routes' },

            ]
        },

    ]
}