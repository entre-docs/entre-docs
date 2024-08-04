import { type DefaultTheme } from 'vitepress';


export function navbar(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Lenguajes',
            items: [
                { text: 'JavaScript', link: '/javascript/' },
                { text: 'TypeScript', link: '/typescript/' },
                { text: 'Python', link: '/python/' },


            ]
        },
        { text: 'Git/Github', link: '/git/' },
        { text: 'DevOps',
            items: [
                { text: 'Docker', link: '/docker/' },
            ]
        },
        { text: 'Node', link: '/node/' },
        {
            text: 'Frameworks',
            items: [
                { text: 'Angular', link: '/angular/' },
                { text: 'React', link: '/react/' },

            ]
        },

        {
            text: 'Base de datos',
            items: [
                { text: 'Oracle', link: '/oracle/' },
                { text: 'PostgreSQL', link: '/postgresql/' },
            ]
        },
        {
            text: 'OS',
            items: [
                { text: 'Linux', link: '/os/linux/' },
                { text: 'Windows', link: '/os/windows/' },

            ]
        },
        { text: 'Nosotros', link: '/team' },
    ]
  }