import { DefaultTheme } from "vitepress"

export const sidebarJava = (): DefaultTheme.SidebarItem[] => {
    return [
        {
            text: 'Introducción a Java',
            collapsed: false,
            items: [
                { text: 'Descarga e Instalación de IntelliJ y JDK', link: '/java/intellij_y_jdk' },
                { text: 'Fundamentos del lenguaje Java', link: '/java/fundamentos_java' },
                { text: 'Tipos de Datos', link: '/java/tipos_de_datos' },
                { text: 'Java y Javac', link: '/java/java_javac' },
                { text: 'Clase Scanner', link: '/java/clase_scanner' },
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
            text: 'Clases y Objetos',
            collapsed: true,
            items: [
                { text: 'Clase y objeto', link: '/java/clase_objeto' },
                { text: 'Métodos y Accesadores', link: '/java/metodos_y_accesadores' },
                { text: 'Clases Wrapper', link: '/java/clases_wrapper' },
                { text: 'Clase String', link: '/java/clase_string' },
                { text: 'Atributo de Instancia vs Atributo static', link: '/java/atributo_instancia_vs_atributo_static' },
                { text: 'Bloque static', link: '/java/bloque_static' },
                { text: 'Método Main', link: '/java/metodo_main' },
                { text: 'Dependencia entre clases', link: '/java/dependencia_entre_clases' }, 
            ]
        },
        {
            text: 'Programación Orientada a Objetos',
            collapsed: true,
            items: [
                { text: 'Encapsulamiento', link: '/java/encapsulamiento' },
                { text: 'Abstracción', link: '/java/abstraccion' },
                { text: 'Herencia e Interface', link: '/java/herencia_interface' },
                { text: 'Polimorfismo', link: '/java/polimorfismo' },
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