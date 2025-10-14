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
            text: 'Lenguajes/ Frameworks',
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
                {
                    text: 'Apps móviles',
                    items: [
                        //{ text: 'Flutter', link: '/flutter/' },
                        //{ text: 'React Native', link: '/react-native/' },
                        { text: 'Kotlin', link: '/kotlin/' },
                    ]
                }
            ]
        },
        {
            text: 'Estilos',
            items: [
                { text: 'Bootstrap 5', link: '/bootstrap5/' },
            ]
        },
        {
            text: 'Infraestructura',
            items: [
                { text: 'AWS', link: '/aws/' },
                { text: 'Azure', link: '/azure/' },
                { text: 'Docker', link: '/docker/' },
                //{ text: 'Introducción a DevOps', link: '/devops/' },
                //{ text: 'CI/CD', link: '/devops/ci-cd/' },
                //{ text: 'Jenkins', link: '/devops/jenkins/' },
            ]
        },
        {
            text: 'Arquitectura/ Diseño',
            items: [
                //{ text: 'SOLID', link: '/arquitectura/solid/' },
                { text: 'Patrones de Diseño', link: '/patrones/' },
                //{ text: 'Clean Architecture', link: '/arquitectura/clean-architecture/' },
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
