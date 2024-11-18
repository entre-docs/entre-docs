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
                { text: 'Instalación', link: '/angular/core/instalacion-angular' },
                { text: 'Angular CLI', link: '/angular/core/angular-cli' },
                {
                    text: 'Directivas Estructurales',
                    collapsed: true,

                    items: [
                        { text: 'ngIf', link: '/angular/core/ng-if' },
                        { text: 'ngFor', link: '/angular/core/ng-for' },
                        { text: 'ngSwitch', link: '/angular/core/ng-switch' },
                        { text: '@if', link: '/angular/core/@if' },
                        { text: '@for', link: '/angular/core/@for' },
                        { text: '@switch', link: '/angular/core/@switch' },
                    ]
                },
                { text: 'Estilos', link: '/angular/core/angular-styles' },
                {
                    text: 'Decoradores',
                    collapsed: true,
                    items: [
                        { text: '@Input()', link: '/angular/core/input' },
                        { text: '@Output()', link: '/angular/core/output' },
                        { text: '@ViewChild()', link: '/angular/core/viewChild' },

                    ]
                },
                {
                    text: 'Inyección de Dependencias',
                    collapsed: true,
                    items: [
                        { text: 'Global', link: '/angular/core/di/di' },
                        { text: 'Módulos', link: '/angular/core/di/di-modules' }

                    ]
                },
                {
                    text: 'Signals',
                    collapsed: true,
                    items: [
                        { text: 'Operaciones basicas', link: '/angular/core/signals/' },
                        { text: 'Effect', link: '/angular/core/signals/effect' },
                        { text: 'Signal Inputs', link: '/angular/core/signals/signal-inputs' },
                        { text: 'linkedsignal', link: '/angular/core/signals/linkedSignal' },



                    ]
                },
                { text: 'output()', link: '/angular/core/output-func/' }


            ]
        },
        {
            text: 'Routing',
            collapsed: true,
            items: [
                {
                    text: 'Simple routes',
                    collapsed: true,
                    items: [
                        { text: 'Modules', link: '/angular/routing/simple-module-routing' },
                        { text: 'Standalone', link: '/angular/routing/simple-salone-routing' },

                    ]
                },
                {
                    text: 'Lazy Loading routes',
                    collapsed: true,
                    items: [
                        { text: 'Modules', link: '/angular/routing/lazyloading-m-routing' },
                        { text: 'Standalone', link: '/angular/routing/lazyloading-s-routing' },


                    ]
                },
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
            text: 'RxJS',
            collapsed: true,
            items: [
                {text: 'switchMap', link:'/angular//rxjs/switchMap'},
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
        {
            text: 'Tailwind CSS',
            collapsed: true,
            items: [
                { text: 'Instalación', link: '/angular/tailwindcss/instalacion' },
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
            items: [
                { text: 'Interpolación de cadenas', link: '/react/string-interpolation' },
                { text: 'Properties', link: '/react/props' }
            ]
        },
        {
            text: 'React Redux',
            collapsed: true,
            items: [
                { text: 'Redux', link: '/react/redux/redux' },
                { text: 'Redux Toolkit', link: '/react/redux/redux-toolkit' },


            ]
        },
        {
            text: 'Testing',
            collapsed: true,
            items: [
                { text: 'Vitest', link: '/react/tests/vitest-conf.md' }


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
        },
        {
            text: 'Múltiples Cuentas',
            collapsed: false,
            items: [
                { text: 'SSH Windows', link: '/git/windows-ssh.md' },
                { text: 'SSH Ubuntu', link: '/git/ubuntu-ssh.md' },
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


export function sidebarNode(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Instalación',
            collapsed: false,
            items: [
                { text: 'NVM Windows', link: '/node/installation/installation-windows' },
                { text: 'NVM Linux', link: '/node/installation/installation-linux' },

            ]
        },
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
                { text: 'DTO', link: '/node/dto/dto' },
                { text: 'DTO Class Validator', link: '/node/dto/dto-classValidator' },

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

export const sidebarTypeScript = (): DefaultTheme.SidebarItem[] => {
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

export const sidebarPython = (): DefaultTheme.SidebarItem[] => {
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
                { text: 'Permisos', link: '/os/linux/permisos' },

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

export const sidebarVSC = (): DefaultTheme.SidebarItem[] => {
    return [
        {
            text: 'Configuraciones',
            collapsed: false,
            items: [
                { text: 'Editar Etiquetas HTML', link: '/vsc/editar_etiquetas' },
            ]
        }
    ]
}

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