import { DefaultTheme } from "vitepress";

export function sidebarOracle(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'DDL/DML',
            collapsed: true,
            items: [
                { text: 'Conceptos', link:'/oracle/conceptos_oracle' },
                { text: 'Tipos de datos', link: '/oracle/tipo_datos_oracle' },
                {
                    text: 'Tablas y Registros',
                    collapsed: true,
                    items:[
                        { text: 'Tablas y Columnas', link: '/oracle/tablas/tablas_columnas' },
                        { text: 'Registros', link: 'oracle/tablas/registros' }
                    ]
                },
                {
                    text: 'Constraints',
                    collapsed: true,
                    items: [
                                { text: 'Primary Key', link: '/oracle/constraints/primary_key' },
                                { text: 'Foreign Key', link: '/oracle/constraints/foreign_key' },
                                { text: 'Primary Foreign Key', link: '/oracle/constraints/primary_foreign_key' },
                            ]
                },

                { text: 'Not Null y Check', link: '/oracle/not_null_check' },
            ]
        },
        {
            items: [
                { text: 'Variables de Sustitución (&-&&)', link: '/oracle/variables_sustitucion' },
            ]
        },
        {
            text: 'Funciones de una Fila',
            collapsed: true,
            items: [
                { text: '¿Que son la funciones de Fila?', link: '/oracle/funciones_fila/explicacion_func_fila' },
                { text: 'Funciones con Caracteres', link: '/oracle/funciones_fila/funciones_caracteres' },
                { text: 'Funciones con Números', link: '/oracle/funciones_fila/funciones_numeros' },
                { text: 'Funciones con Fechas', link: '/oracle/funciones_fila/funciones_fechas' },
                { text: 'Funciones de Conversión', link: '/oracle/funciones_fila/funciones_conversion' },
                { text: 'Validar valores nulos', link: '/oracle/funciones_fila/validar_valores_nulos' },
                { text: 'Funciones Anidadas', link: '/oracle/funciones_fila/funciones_anidadas' },
                { text: 'Expresiones Condicionales', link: '/oracle/funciones_fila/expresiones_condicionales' },
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
            text: 'Subconsultas',
            collapsed: true,
            items: [
                { text: 'Subconsultas en cláusulas', link: '/oracle/subconsultas/subconsultas' },
                { text: 'Subconsultas para crear tablas', link: '/oracle/subconsultas/subconsultas_crear_tablas' },

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
            text: 'Índices y Sinónimos',
            collapsed: true,
            items: [
                { text: 'Índices', link: '/oracle/indices' },
                { text: 'Sinónimos', link: '/oracle/sinonimos' },
            ]
        },
        {
            items: [
                { text: 'Privilegios y Roles', link: '/oracle/privilegios_roles' },
            ]
        },
        {
            items: [
                { text: 'Fases de Procesamiento - SQL Tuning', link: '/oracle/sql_tuning' },
            ]
        },
        {
            items: [
                { text: 'Ejemplos prácticos de Consultas', link: '/oracle/actividades_ejemplos' },
            ]
        },
        {
            text: 'Programación PL/SQL',
            collapsed: true,
            items: [
                { text: 'PL/SQL', link: '' },
            ]
        }
    ]
}