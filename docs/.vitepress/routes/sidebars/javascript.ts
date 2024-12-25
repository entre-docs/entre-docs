import { DefaultTheme } from "vitepress";

export function sidebarJavascript(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Array',
            collapsed: false,
            items: [
                { text: 'Métodos', link: '/javascript/array' },
            ]
        },
        {
            text: 'Objetos',
            collapsed: false,
            items: [
                { text: 'Iteración de objetos', link: '/javascript/obj-iterator' },
            ]
        },
        {
            text: 'Date',
            collapsed: false,
            items: [
                { text: 'Métodos', link: '/javascript/date/methods' },
                { text: 'Luxon', link: '/javascript/date/luxon' },

            ]
        },
        {
            text: 'Storage',
            collapsed: false,
            items: [
                { text: 'LocalStorage', link: '/javascript/storage/localStorage' },
            ]
        }
    ]
}