import { defineConfig, type DefaultTheme } from 'vitepress'
import { sidebarDocker, sidebarAngular, sidebarOracle, sidebarPostgresql, sidebarGit, sidebarJava,
    sidebarReact, sidebarNode, sidebarJavascript, sidebarTypescript, sidebarPython, sidebarNext,
    sidebarLinux, sidebarWindows, sidebarVSC, sidebarSpringboot
 } from './routes/sidebars';
import { navbar } from './routes'
import { sidebarBootstrap } from './routes/sidebars/bootstrap5';
import { sidebarCloudComputing } from './routes/sidebars/cloud_computing';


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
            '/typescript/': sidebarTypescript(),
            '/python/': sidebarPython(),
            '/os/linux/': sidebarLinux(),
            '/os/windows/': sidebarWindows(),
            '/next/': sidebarNext(),
            '/vsc/': sidebarVSC(),
            '/java/': sidebarJava(),
            '/springboot/': sidebarSpringboot(),
            '/bootstrap5/': sidebarBootstrap(),
            '/cloud_computing/':sidebarCloudComputing(),
            
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



