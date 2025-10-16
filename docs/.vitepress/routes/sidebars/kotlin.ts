import { DefaultTheme } from "vitepress";


export function sidebarKotlin(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Clases y Objetos',
            collapsed: false,
            items: [
                { text: 'Propiedades de clases', link: '/kotlin/propiedades_clase' },
                { text: 'Constructores de clase', link: '/kotlin/constructores' },
                { text: 'Herencia', link: '/kotlin/herencia' },
                { text: 'Interface', link: '/kotlin/interface' },
                { text: 'Colecciones', link: '/kotlin/colecciones' },
            ]
        },
        {
            text: 'Introducción a Android Studio',
            collapsed: true,
            items: [
                { text: 'Estructura e Inicio del proyecto', link: '/kotlin/estructura_proyecto' },
                { text: 'Jetpack Compose', link: '/kotlin/jetpack_compose' },
            ]
        }
    ]
}