import { defineConfig, type DefaultTheme } from 'vitepress'
import {
    sidebarDocker, sidebarAngular, sidebarOracle, sidebarPostgresql, sidebarGit, sidebarJava,
    sidebarReact, sidebarNode, sidebarJavascript, sidebarTypescript, sidebarPython, sidebarNext,
    sidebarLinux, sidebarWindows, sidebarVSC, sidebarSpringboot
} from './routes/sidebars';
import { navbar } from './routes'
import { sidebarBootstrap } from './routes/sidebars/bootstrap5';
import { sidebarAWS } from './routes/sidebars/aws';
import { sidebarPatrones } from './routes/sidebars/patrones';
import { sidebarAzure } from './routes/sidebars/azure';
import { sidebarKotlin } from './routes/sidebars/kotlin';


export default defineConfig({

    // Source Dir
    srcDir: './src',

    // site-level options
    title: 'Entre Docs',
    description: 'Documentación y apuntes',

    lastUpdated: true,

    head: [
        // icono svg+xml especifica que el favicon es un svg para que el navegador lo interprete correctamente
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo-dev.svg'}]
    ],

    themeConfig: {

        // NAVBAR
        nav: navbar(),

        // SIDEBAR
        sidebar: {
            '/angular/': sidebarAngular(),
            '/aws/': sidebarAWS(),
            '/azure/': sidebarAzure(),
            '/bootstrap5/': sidebarBootstrap(),
            '/docker/': sidebarDocker(),
            '/git/': sidebarGit(),
            '/java/': sidebarJava(),
            '/javascript/': sidebarJavascript(),
            '/kotlin/': sidebarKotlin(),
            '/next/': sidebarNext(),
            '/node/': sidebarNode(),
            '/oracle/': sidebarOracle(),
            '/os/linux/': sidebarLinux(),
            '/os/windows/': sidebarWindows(),
            '/patrones/': sidebarPatrones(),
            '/postgresql/': sidebarPostgresql(),
            '/python/': sidebarPython(),
            '/react': sidebarReact(),
            '/springboot/': sidebarSpringboot(),
            '/typescript/': sidebarTypescript(),
            '/vsc/': sidebarVSC(),

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



