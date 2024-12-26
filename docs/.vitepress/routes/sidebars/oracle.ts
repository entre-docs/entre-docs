import { DefaultTheme } from "vitepress";

export function sidebarOracle(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'DML',
            collapsed: false,
            items: [
                { text: 'Tipos de datos', link: '' },
                { text: 'Creación de Tablas', link: '/oracle/tablas' },
                {
                    text: 'Constraints',
                    collapsed: true,
                    items: [
                                { text: 'primary key', link: '/oracle/constraints/primary_key' },
                                { text: 'foreign key', link: '/oracle/constraints/foreign_key' },
                                { text: 'primary foreign key', link: '/oracle/constraints/primary_foreign_key' },
                            ]
                },

                { text: 'Not Null y Check', link: '/oracle/not_null_check' },
                { text: 'Actualización de tabla', link: '' },
                { text: 'Eliminación de tabla', link: '' },
                { text: 'Insertar registros', link: '' },
                { text: 'Actualizar registros', link: '' },
                { text: 'Eliminar registros', link: '' },
            ]
        },
        {
            text: 'Consultas',
            collapsed: true,
            items: [
                { text: 'Seleccionar Datos', link: '/oracle/consultas' },
                { text: 'Operadores String', link: '/oracle/operadores_string' },
            ]
        },
        {
            text: 'Funciones de una Fila',
            collapsed: true,
            items: [
                { text: 'Creación de Tablas', link: '' },
            ]
        },
        {
            text: 'Funciones de grupo',
            collapsed: true,
            items: [
                { text: 'Funciones de grupo', link: '/oracle/funciones_grupo' },
            ]
        },
        {
            text: 'Join y Operadores Set',
            collapsed: true,
            items: [
                { text: 'Joins', link: '/oracle/join' },
                { text: 'Operadores Set', link: '/oracle/operadores_set' },

            ]
        },
        {
            text: 'Vistas y Secuencias',
            collapsed: true,
            items: [
                { text: 'Vistas', link: '/oracle/vistas' },
                { text: 'Secuencias', link: '/oracle/secuencias' },

            ]
        },
        {
            text: 'Programación PL/SQL',
            collapsed: true,
            items: [
                { text: 'Creación de Tablas', link: '' },
            ]
        }
    ]
}