import { DefaultTheme } from "vitepress";

export function sidebarPostgresql(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'PostgreSQL',
            collapsed: true,
            items: [
                { text: 'Conceptos', link: '/postgresql/conceptos' },
                { text: 'Buenas Prácticas', link: '/postgresql/buenas_practicas' },
                { text: 'Diagramas Entidad-Relación', link: '/postgresql/software_diagramas' },
                {
                    text: 'Tablas y Registros',
                    collapsed: true,
                    items: [
                        { text: 'Tablas', link: '/postgresql/tablas/tablas' },
                        { text: 'Columnas y Registros', link: '/postgresql/tablas/columnas_y_registros' },
                    ]
                },
                { text: 'Operadores String y Funciones', link: '/postgresql/operadores_string_funciones' },
                { text: 'Funciones de grupo', link: '/postgresql/funciones_grupo' },
                { text: 'Llaves', link: '/postgresql/llaves' },
                { text: 'Secuencias', link: '/postgresql/secuencias' },
                { text: 'Índices', link: '/postgresql/indices' },
                { text: 'Join-Uniones', link: '/postgresql/join_uniones' },
                { text: 'Fechas', link: '/postgresql/fechas' },
                { text: 'Funciones de PostgreSQL', link: '/postgresql/funciones_unicas' },
                { text: 'Funciones personalizadas', link: '/postgresql/funciones_personalizadas' },
            ]
        },
        {
            text: 'Estructuras de Control',
            collapsed: true,
            items: [
                { text: 'IF, THEN, ELSE, END IF', link: '/postgresql/estructuras_control' },
            ]
        },
        {
            text: 'Vistas y Common Table Expression',
            collapsed: true,
            items: [
                { text: 'Vistas', link: '/postgresql/vistas_cte/vistas' },
                { text: 'Common Table Expression', link: '/postgresql/vistas_cte/common_table_expression' },
            ]
        },
        {
            text: 'Procedimientos Almacenados',
            collapsed: true,
            items: [
                { text: 'Procedimientos Almacenados', link: '/postgresql/procedimientos_almacenados' },
            ]
        },
        {
            text: 'Encriptar contraseñas y Triggers',
            collapsed: true,
            items: [
                { text: 'Encriptar Contraseñas', link: '/postgresql/triggers/encriptar_contrasena' },
                { text: 'Proc.Almac. User Login', link: '/postgresql/triggers/proc_almac_user_login' },
                { text: 'Triggers', link: '/postgresql/triggers/triggers' },
                { text: 'Trigger When', link: '/postgresql/triggers/triggers_when' },
            ]
        }
    ]
}
