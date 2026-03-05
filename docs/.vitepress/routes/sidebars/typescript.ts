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
                { text: 'Definición', link: '/typescript/types' },
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
            text: 'Arrays',
            collapsed: true,
            items: [
                { text: 'Métodos de Arrays', link: '/typescript/arrays' },
            ]
        },
        {
            items: [
                { text: 'Enum', link: '/typescript/enum' },
            ]
        },
    ]
}