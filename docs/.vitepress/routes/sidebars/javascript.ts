import { DefaultTheme } from "vitepress";

export function sidebarJavascript(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'JavaScript',
            collapsed: false,
            items: [
                { text: 'Estructuras de Control', link: '/javascript/estructuras_control' },
                { text: 'Funciones', link: '/javascript/funciones' },
                //{ text: 'Manipulación del DOM', link: '/javascript/manipulacion_dom' },
                {
                    text: 'Seleccionar Elementos y Modificar Contenido',
                    collapsed: true,

                    items: [
                        { text: 'Manipulación del DOM', link: '/javascript/manipulacion_dom' },
                        { text: 'Cambiar clases y estilos', link: '/javascript/cambiar_clases_estilos' },
                        { text: 'Animaciones y transiciones', link: '/javascript/animaciones_transiciones' },

                    ]
                }

            ]
        },
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