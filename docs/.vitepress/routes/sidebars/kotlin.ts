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
     /*    {
            items: [
                { text: 'Implementación de Base de datos', link: '/kotlin/bbdd'}
            ]
        },
 */
    ]
}