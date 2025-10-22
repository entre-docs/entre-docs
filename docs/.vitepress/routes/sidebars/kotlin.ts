import { DefaultTheme } from "vitepress";


export function sidebarKotlin(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'POO, operadores y flujos',
            collapsed: true,
            items: [
                { text: 'Propiedades de clases', link: '/kotlin/propiedades_clase' },
                { text: 'Constructores de clase', link: '/kotlin/constructores' },
                { text: 'Herencia', link: '/kotlin/herencia' },
                { text: 'Interface', link: '/kotlin/interface' },
                { text: 'Colecciones', link: '/kotlin/colecciones' },
                { text: 'Operadores y Flujos', link: '/kotlin/operadores_flujos' }
            ]
        },
        {
            text: 'Android Studio y Jetpack Compose',
            collapsed: false,
            items: [
                { text: 'Estructura del Proyecto', link: '/kotlin/estructura_proyecto' },
                { text: 'Conceptos Básicos', link: '/kotlin/jetpack_compose/basico' },
                { text: 'Componentes UI', link: '/kotlin/jetpack_compose/componentes_ui' },
                { text: 'Manejo de estado', link: '/kotlin/jetpack_compose/estado' },
                { text: 'Navegación', link: '/kotlin/jetpack_compose/navegacion' },
                { text: 'Scaffold', link: '/kotlin/jetpack_compose/scaffold' }
            ]
        },
        {
            items: [
                { text: 'Componentes Frontend en Kotlin', link: '/kotlin/componentes_frontend'}
            ]
        },
        {
            text: 'Implementación de Base de datos',
            collapsed: true,
            items: [
                { text: 'Persistencia de datos', link: '/kotlin/persistencia'},
                { text: 'Persistencia en memoria', link: '/kotlin/persistencia_memoria' },
                { text: 'Persistencia en archivos', link: '/kotlin/persistencia_archivos' },
                { text: 'Persistencia en base de datos', link: '/kotlin/persistencia_bbdd' },
            ]
        },

    ]
}