import { DefaultTheme } from "vitepress"

export const sidebarJava = (): DefaultTheme.SidebarItem[] => {
    return [
        {
            text: 'Programación Orientada a Objetos',
            collapsed: false,
            items: [
                { text: 'Tipos de Datos', link: '/java/tipos_de_datos' },
                { text: 'Clases y Objetos', link: '/java/clases_objetos' },
                { text: 'Métodos de una Clase', link: '/java/metodos_de_clase' },
                { text: 'Encapsulamiento', link: '/java/encapsulamiento' },
                { text: 'Abstracción', link: '/java/abstraccion' },
                { text: 'Herencia e Interface', link: '/java/herencia_interface' },
                { text: 'Polimorfismo', link: '/java/polimorfismo' },
            ]
        },
        {
            text: 'Estructuras de Control',
            collapsed: true,
            items: [
                {
                    text: 'Sentencias Condicionales',
                    collapsed: true,
                    items: [
                        { text: 'if else', link: '/java/estructuras_control/if_else' },
                        { text: 'switch', link: '/java/estructuras_control/switch' },
                    ]
                },
                {
                    text: 'Sentencias de Iteración',
                    collapsed: true,
                    items: [
                        { text: 'for', link: '/java/estructuras_control/for' },
                        { text: 'while', link: '/java/estructuras_control/while' },
                        { text: 'do while', link: '/java/estructuras_control/do_while' },
                    ]
                }
            ]
        },
        {
            items: [
                { text: 'Clase String y sus métodos', link: '/java/clase_string_metodos' },
            ]
        },
        {
            text: 'Colecciones',
            collapsed: true,
            items: [
                { text: 'Tipo de colecciones', link: '/java/colecciones/tipo_colecciones' },
            ]
        }

    ]
}