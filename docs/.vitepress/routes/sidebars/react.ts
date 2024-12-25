import { DefaultTheme } from "vitepress"

export const sidebarReact = (): DefaultTheme.SidebarItem[] => {
    return [
        {
            text: 'Vite Config',
            collapsed: false,
            items: [
                { text: 'Crear Proyecto', link: '/react/vite-instalacion' },
                { text: 'Variables de entorno', link: '/react/vite-env' }

            ]
        },
        {
            text: 'React Core',
            collapsed: true,
            items: [
                { text: 'Interpolación de cadenas', link: '/react/string-interpolation' },
                { text: 'Properties', link: '/react/props' }
            ]
        },
        {
            text: 'React Redux',
            collapsed: true,
            items: [
                { text: 'Redux', link: '/react/redux/redux' },
                { text: 'Redux Toolkit', link: '/react/redux/redux-toolkit' },


            ]
        },
        {
            text: 'Testing',
            collapsed: true,
            items: [
                { text: 'Vitest', link: '/react/tests/vitest-conf.md' }


            ]
        }
    ]
}