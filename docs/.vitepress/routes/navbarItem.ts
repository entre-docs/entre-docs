import { type DefaultTheme } from 'vitepress';


export function navbar(): DefaultTheme.NavItem[] {
    return [

        { text: 'Git/Github', link: '/git/' },
        { text: 'Docker', link: '/docker/' },
        { text: 'Node', link: '/node/' },

        {
            text: 'Frameworks',
            items: [
                { text: 'Angular', link: '/angular/' },
            ]
        },

        {
            text: 'Base de datos',
            items: [
                { text: 'Oracle', link: '/oracle/' },
                { text: 'PostgreSQL', link: '/postgresql/' },
            ]
        },

        { text: 'Nosotros', link: '/team' },
    ]
  }