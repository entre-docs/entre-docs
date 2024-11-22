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