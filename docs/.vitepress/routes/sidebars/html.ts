import { DefaultTheme } from "vitepress"

export const sidebarHTML = (): DefaultTheme.SidebarItem[] => {
    return [
        {
            text: 'Etiquetas HTML',
            collapsed: false,
            items: [
                { text: 'Estructura Principal', link: '/html/estructura_principal' },
                { text: 'Etiquetas semánticas', link: '/html/etiquetas_semanticas' },
                { text: 'Texto y Contenido', link: '/html/texto_y_contenido' },
                { text: 'Listas, tablas y Formularios', link: '/html/listas_tablas_formularios'},
            ]
        },
        {
            text: 'Propiedades comunes de CSS',
            collapsed: false,
            items: [
                { text: 'Colores y Texto', link: '/html/colores_texto' },
                { text: 'Espacio, bordes y tamaño', link: '/html/espacio_bordes_tamano'},
                { text: 'Diseño, distribución y posición', link: '/html/diseno_distribucion'},
                { text: 'Efectos visuales', link: '/html/efectos_visuales'},
            ]
        },
    ]
}