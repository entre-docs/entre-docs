import { defineConfig, type DefaultTheme } from 'vitepress'
import {
    navbar, sidebarNode ,sidebarDocker, sidebarAngular, sidebarGit, sidebarOracle,
    sidebarPostgresql, sidebarJavascript
} from './routes'
import { sidebarReact, sidebarTypeScript } from './routes/sidebarItem'


export default defineConfig({

    // Source Dir
    srcDir: './src',

    // site-level options
    title: 'Entre Docs',
    description: 'Documentación y apuntes',

    lastUpdated: true,

    themeConfig: {

        // NAVBAR
        nav: navbar(),

        // SIDEBAR
        sidebar: {
            '/docker/': sidebarDocker(),
            '/angular/': sidebarAngular(),
            '/react': sidebarReact(),
            '/git/': sidebarGit(),
            '/oracle/': sidebarOracle(),
            '/postgresql/': sidebarPostgresql(),
            '/node/': sidebarNode(),
            '/javascript/': sidebarJavascript(),
            '/typescript/': sidebarTypeScript(),

        },

        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: 'Buscar'
                    },
                    modal: {
                        displayDetails: "Ver detalles",
                        noResultsText: 'No se encontraron coincidencias para: ',
                        resetButtonTitle: 'Borrar',
                        footer: {
                            closeText: 'Cerrar',
                            navigateText: 'Navegar',
                            selectText: 'Seleccionar',
                        }
                    }
                }
            }
          }
    }

})



