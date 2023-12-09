import { defineConfig, type DefaultTheme } from 'vitepress'
import {
    navbar, sidebarNode ,sidebarDocker, sidebarAngular, sidebarGit, sidebarOracle,
    sidebarPostgresql,
} from './routes'


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
            '/git/': sidebarGit(),
            '/oracle/': sidebarOracle(),
            '/postgresql/': sidebarPostgresql(),
            '/node/': sidebarNode()

          },
    }

})



