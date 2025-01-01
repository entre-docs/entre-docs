import { DefaultTheme } from "vitepress";

export function sidebarGit(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Git',
            collapsed: false,
            items: [
                { text: 'Configuración', link: '/git/configuracion' },
                {
                    text: 'Versionamiento',
                    collapsed: true,
                    items: [
                        { text: 'Inicio de proyecto', link: 'git/versionamiento/inicio_proyecto' },
                        { text: 'Gestión de archivos', link: 'git/versionamiento/seguimiento' },
                        { text: 'Commits', link: '/git/versionamiento/commits' },
                    ]
                },
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