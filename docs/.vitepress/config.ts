import { defineConfig, type DefaultTheme } from 'vitepress'
import { sidebarDocker } from './routes/sidebars';
import {
    navbar, sidebarNode, sidebarAngular, sidebarGit, sidebarOracle,
    sidebarPostgresql, sidebarJavascript
} from './routes'
import { sidebarJava, sidebarLinux, sidebarNext, sidebarPython, sidebarReact, sidebarTypeScript, sidebarVSC, sidebarWindows } from './routes/sidebarItem'


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
            '/python/': sidebarPython(),
            '/os/linux/': sidebarLinux(),
            '/os/windows/': sidebarWindows(),
            '/next/': sidebarNext(),
            '/vsc/': sidebarVSC(),
            '/java/': sidebarJava(),
            

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



