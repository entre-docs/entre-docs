import { type DefaultTheme } from 'vitepress';

export function sidebarDocker(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Docker',
            collapsed: false,
            items: [
                { text: 'Instalación', link: '/docker/instalacion-docker' },
                { text: 'Imágenes', link: '/docker/imagen' },
                { text: 'Contenedores', link: '/docker/contenedor' },
                { text: 'Volúmenes', link: '/docker/volumen' },
                { text: 'Network', link: '/docker/network' },
                { text: 'Compose', link: '/docker/compose' },
                { text: 'Dockerfile', link: '/docker/docker-file' },
                { text: 'DockerHub', link: '/docker/docker-hub' },
                { text: 'Buildx', link: '/docker/buildx' }


            ]
        }
    ]
}

export function sidebarAngular(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Angular Core',
            collapsed: false,
            items: [
                { text: 'Instalación', link: '/angular/instalacion-angular' },
                { text: 'Angular CLI', link: '/angular/angular-cli' },
                {
                    text: 'Directivas Estructurales',
                    collapsed: true,

                    items: [
                        { text: 'ngIf', link: '/angular/ng-if' },
                        { text: 'ngFor', link: '/angular/ng-for' },
                        { text: 'ngSwitch', link: '/angular/ng-switch' },
                    ]
                },
                { text: 'Estilos', link: '/angular/angular-styles' },
                {
                    text: 'Decoradores',
                    collapsed: true,
                    items: [
                        { text: '@Input()', link: '/angular/input' },
                        { text: '@Output()', link: '/angular/output' },
                        { text: '@ViewChild()', link: '/angular/viewChild' },

                    ]
                },
                { text: 'Inyección de Dependencias', link: '/angular/di' }
            ]
        },
        {
            text: 'HTTP',
            collapsed: true,
            items: [
                { text: 'HTTP Client', link: '/angular//http/http' },
                { text: 'Peticiones', link: '/angular/http/http-requests' }
            ]
        },
        {
            text: 'Angular 17+',
            collapsed: true,
            items: [
                {
                    text: 'Directivas Estructurales',
                    items: [
                        { text: '@if', link: '/angular/angular17/@if' },
                        { text: '@for', link: '/angular/angular17/@for' },
                        { text: '@switch', link: '/angular/angular17/@switch' },
                    ]
                },
            ]
        },
        {
            text: 'Angular Material',
            collapsed: true,
            items: [
                { text: 'Instalación', link: '/angular/material/instalacion-material' },
                {
                    text: 'Tablas',
                    collapsed: true,
                    items: [
                        { text: 'Tabla básica', link: '/angular/material/tabla-material' },
                        { text: 'Paginación', link: '/angular/material/tabla-paginacion' },
                        { text: 'Paginación (Server side)', link: '/angular/material/tabla-server-paginacion' },
                        { text: 'Select checkbox', link: '/angular/material/tabla-select' },
                    ]
                },
                {
                    text: 'DatePicker',
                    collapsed: true,
                    items: [
                        { text: 'mat-calendar', link: '/angular/material/mat-calendar' },
                    ]

                },

            ]
        },
    ]
}

export const sidebarReact = (): DefaultTheme.SidebarItem[] => {
    return [
        {
            text: 'Vite Config',
            collapsed: false,
            items: [
                { text: 'Crear Proyecto', link: '/react/vite-instalacion' },
                { text: 'Variables de entorno', link: '/react/vite-env' }

            ]
        },
        {
            text: 'React Core',
            collapsed: true,
            items : [
               { text: 'Interpolación de cadenas', link: '/react/string-interpolation'},
               { text: 'Properties', link: '/react/props'}
            ]
        },
        {
            text: 'React Redux',
            collapsed: true,
            items : [
               { text: 'Redux', link: '/react/redux/redux'},
               { text: 'Redux Toolkit', link: '/react/redux/redux-toolkit'},


            ]
        },
        {
            text: 'Testing',
            collapsed: true,
            items : [
               { text: 'Vitest', link: '/react/tests/vitest-conf.md'}
               

            ]
        }
    ]
}


export function sidebarGit(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Git',
            collapsed: false,
            items: [
                { text: 'Configuración', link: '/git/configuracion' },
                { text: 'Versionamiento', link: '/git/versionamiento' },
                { text: 'Ramas', link: '/git/ramas' },
                { text: 'Stash', link: '/git/stash' },
                { text: 'Tags', link: '/git/tags' },
                { text: 'Conventional Commit', link: '/git/conventional_commit' }

            ]
        },
        {
            text: 'GitHub',
            collapsed: false,
            items: [
                { text: 'Versionamiento Remoto', link: '/git/github' }
            ]
        }
    ]
}

export function sidebarOracle(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Oracle',
            collapsed: false,
            items: [
                { text: 'Creación de Tablas', link: '/oracle/tablas' },
                { text: 'Insertar datos', link: '/oracle/insert' },
                { text: 'Consultas a la bbdd', link: '/oracle/consultas' },
                { text: 'Funciones de grupo', link: '/oracle/funciones_grupo' },
            ]
        }
    ]
}

export function sidebarPostgresql(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'PostgreSQL',
            collapsed: true,
            items: [
                { text: 'Conceptos', link: '/postgresql/conceptos' },
                { text: 'Buenas Prácticas', link: '/postgresql/buenas_practicas' },
                { text: 'Diagramas Entidad-Relación', link: '/postgresql/software_diagramas' },
                { text: 'Tablas y Registros', link: '/postgresql/tablas_y_registros' },
                { text: 'Operadores String y Funciones', link: '/postgresql/operadores_string_funciones' },
                { text: 'Funciones de grupo', link: '/postgresql/funciones_grupo' },
                { text: 'Llaves', link: '/postgresql/llaves' },
                { text: 'Secuencias', link: '/postgresql/secuencias' },
                { text: 'Índices', link: '/postgresql/indices' },
                { text: 'Join-Uniones', link: '/postgresql/join_uniones' },
                { text: 'Fechas', link: '/postgresql/fechas' },
                { text: 'Funciones de PostgreSQL', link: '/postgresql/funciones_unicas' },
                { text: 'Funciones personalizadas', link: '/postgresql/funciones_personalizadas' },

                { text: 'Pistas Importantes', link: '/postgresql/pistas' },
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


export function sidebarNode(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Node Config',
            collapsed: false,
            items: [
                { text: 'Configurar TS-Nodemon', link: '/node/config/configuracion_ts' },
                { text: 'Configurar ts-node-dev', link: '/node/config/ts-node-dev' },

            ]
        },
        {
            text: 'DTO - Entity',
            collapsed: false,
            items: [
               {text: 'DTO', link: '/node/dto/dto'},
               {text: 'DTO Class Validator', link: '/node/dto/dto-classValidator'},

            ]
        },
        {
            text: 'REST API',
            collapsed: false,
            items: [
                { text: 'Configurar servidor', link: '/node/rest-api/server' },
                { text: 'Rutas', link: '/node/rest-api/routes' },

            ]
        },
        
    ]
}


export function sidebarJavascript(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Array',
            collapsed: false,
            items: [
                { text: 'Métodos', link: '/javascript/array' },
            ]
        },
        {
            text: 'Objectos',
            collapsed: false,
            items: [
                { text: 'Iteración de objetos', link: '/javascript/obj-iterator' },
            ]
        }
    ]
}

export const  sidebarTypeScript = () : DefaultTheme.SidebarItem[] => {
    return [
        {
            text: 'Interfaces',
            collapsed: true,
            items: [
                { text: 'Definicion', link: '/typescript/interfaces' },
                { text: 'Interfaces con funciones', link: '/typescript/interfaces-func' },
                { text: 'Interfaces con herencia', link: '/typescript/interfaces-herencia' },
            ],
        },
        {
            text: 'Types',
            collapsed: true,
            items: [
                { text: 'Definicion', link: '/typescript/types' },
            ]
        },
        {
            text: 'Genéricos',
            collapsed: true,
            items: [
                { text: 'Definicion', link: '/typescript/generics' },
                { text: 'Record', link: '/typescript/record-ts' },

            ]
        },
        {
            items: [
                { text: 'Enum', link: '/typescript/enum' },
            ]
        },
    ]
}

export const sidebarPython = () : DefaultTheme.SidebarItem[] => {
    return [
        {
            text: 'Python',
            collapsed: false,
            items: [
                { text: 'Instalación', link: '/python/instalacion.md' },
               
            ],
        },
       
    ]
}


export const sidebarLinux = (): DefaultTheme.SidebarItem[] => {
    return [
        {
            text: 'Bash',
            collapsed: false,
            items: [
                { text: 'Comandos', link: '/os/linux/bash-comandos' },
            ]
        }
    ]
}


export const sidebarWindows = (): DefaultTheme.SidebarItem[] => {
    return [
        {
            text: 'PowerShell',
            collapsed: false,
            items: [
                { text: 'Comandos', link: '/os/windows/powershell-comandos' },
            ]
        }
    ]
}

export const sidebarNext = (): DefaultTheme.SidebarItem[] => {
    return [
        {
            text: 'Configuraciones',
            collapsed: false,
            items: [
                { text: 'Instalación', link: '/next/config/instalaciones' },
            ]
        }
    ]
}