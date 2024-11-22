import { type DefaultTheme } from 'vitepress';

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
                {text: 'tap', link:'/angular//rxjs/tap'},

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