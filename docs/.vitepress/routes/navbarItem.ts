import { type DefaultTheme } from 'vitepress';


export function navbar(): DefaultTheme.NavItem[] {
    return [
        { text: 'VSC', link: '/vsc/' },
        {
            text: 'Lenguajes',
            items: [
                { text: 'Java', link: '/java/' },
                { text: 'JavaScript', link: '/javascript/' },
                { text: 'Python', link: '/python/' },
                { text: 'TypeScript', link: '/typescript/' },

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
                { text: 'Next.js', link: '/next/' },
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