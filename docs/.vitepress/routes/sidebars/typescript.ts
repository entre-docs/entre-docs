import { DefaultTheme } from "vitepress"

export const sidebarTypescript = (): DefaultTheme.SidebarItem[] => {
    return [
        {
            text: 'Interfaces',
            collapsed: true,
            items: [
                { text: 'Definicion', link: '/typescript/interfaces' },
                { text: 'Interfaces con funciones', link: '/typescript/interfaces-func' },
                { text: 'Interfaces con herencia', link: '/typescript/interfaces-herencia' },
            ],
        },
        {
            text: 'Types',
            collapsed: true,
            items: [
                { text: 'Definicion', link: '/typescript/types' },
            ]
        },
        {
            text: 'Genéricos',
            collapsed: true,
            items: [
                { text: 'Definicion', link: '/typescript/generics' },
                { text: 'Record', link: '/typescript/record-ts' },

            ]
        },
        {
            items: [
                { text: 'Enum', link: '/typescript/enum' },
            ]
        },
    ]
}