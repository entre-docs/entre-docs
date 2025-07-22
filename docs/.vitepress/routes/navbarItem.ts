import { type DefaultTheme } from 'vitepress';

export function navbar(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Herramientas',
            items: [
                { text: 'VSC', link: '/vsc/' },
                { text: 'Git/GitHub', link: '/git/' },
                { text: 'Node.js', link: '/node/' },
            ]
        },
        {
            text: 'Lenguajes y Frameworks',
            items: [
                {
                    text: 'Lenguajes',
                    items: [
                        { text: 'Java', link: '/java/' },
                        { text: 'JavaScript', link: '/javascript/' },
                        { text: 'Python', link: '/python/' },
                        { text: 'TypeScript', link: '/typescript/' },
                    ]
                },
                {
                    text: 'Frameworks',
                    items: [
                        { text: 'Angular', link: '/angular/' },
                        { text: 'Next.js', link: '/next/' },
                        { text: 'React', link: '/react/' },
                        { text: 'Springboot', link: '/springboot/' },
                    ]
                },
                /* {
                    text: 'Apps móviles',
                    items: [
                        { text: 'Flutter', link: '/mobile/flutter/' },
                        { text: 'React Native', link: '/mobile/react-native/' },
                        { text: 'Kotlin', link: '/mobile/kotlin/' },
                    ]
                }, */
            ]
        },
        {
            text: 'Estilos',
            items: [
                { text: 'Bootstrap 5', link: '/bootstrap5/' },
                // Aquí podrías agregar Tailwind, Material UI, etc.
            ]
        },
        {
            text: 'Infraestructura',
            items: [
                {
                    text: 'DevOps',
                    items: [
                        // { text: 'Introducción a DevOps', link: '/devops/' },
                        { text: 'Docker', link: '/docker/' },
                        //{ text: 'CI/CD', link: '/devops/ci-cd/' },
                        //{ text: 'Jenkins', link: '/devops/jenkins/' },
                    ]
                },
                {
                    text: 'Cloud Computing',
                    items: [
                        { text: 'Cloud Computing', link: '/cloud_computing/' },
                        //{ text: 'AWS', link: '/cloud/aws/' },
                        //{ text: 'Azure', link: '/cloud/azure/' },
                        //{ text: 'Google Cloud', link: '/cloud/gcp/' },
                    ]
                }
            ]
        },
        {
            text: 'Bases de Datos',
            items: [
                { text: 'Oracle', link: '/oracle/' },
                { text: 'PostgreSQL', link: '/postgresql/' },
            ]
        },
        { text: 'Nosotros', link: '/team' },
    ];
}
