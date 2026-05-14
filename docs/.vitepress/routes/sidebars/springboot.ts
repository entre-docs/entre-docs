import { DefaultTheme } from "vitepress";


export function sidebarSpringboot(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Springboot',
            collapsed: false,
            items: [
                { text: 'Conceptos Básicos', link: '/springboot/conceptos' },
                { text: 'Initializr', link: '/springboot/initializr' },
                { text: 'Inyección de Dependencias', link: '/springboot/inyeccion_dependencias' },
            ]
        },
        {
            text: 'Arquitectura del Proyecto',
            collapsed: false,
            items: [
                { text: 'Estructura del Proyecto', link: '/springboot/estructura_proyecto' },
                { text: 'Entity', link: '/springboot/entity' },
                { text: 'DTO', link: '/springboot/dto' },
                { text: 'Mapper', link: '/springboot/mapper' },
                { text: 'Repository', link: '/springboot/repositories' },
                { text: 'Service', link: '/springboot/services' },
                { text: 'Service Implements', link: '/springboot/service_imp' },
                { text: 'Controller', link: '/springboot/controller' },
                { text: 'Manejo de Excepciones', link: '/springboot/excepciones' },
                { text: 'Logging', link: '/springboot/logging' },
            ]
        },
        {
            text: 'Persistencia y Base de Datos',
            collapsed: false,
            items: [
                { text: 'Introducción a JPA', link: '/springboot/jpa_intro' },
                { text: 'Conexión Oracle + Spring Boot', link: '/springboot/oracle_springboot' },
                { text: 'Wallet Oracle Cloud', link: '/springboot/oracle_wallet' },
                { text: 'Configuración application.yml', link: '/springboot/application_yml' },
                { text: 'Hibernate y ddl-auto', link: '/springboot/hibernate_ddl' },
                { text: 'CRUD con JPA', link: '/springboot/crud_jpa' },
            ]
        },
        {
            items: [
                { text: 'Config. Springboot + Oracle Cloud', link: '/springboot/springboot_oracle' },
            ]
        },
        {
            text: 'Pruebas y Cobertura',
            collapsed: true,
            items: [
                { text: 'Beneficios y Características', link: '/springboot/pruebas_unitarias/benef_caract' },
                { text: 'Pruebas Unitarias', link: '/springboot/pruebas_unitarias/pruebas_unitarias' },
                { text: 'Cobertura de pruebas unitarias (JaCoCo)', link: '/springboot/pruebas_unitarias/cobertura_pruebas' },
                { text: 'Librería HATEOAS', link: '/springboot/pruebas_unitarias/hateoas' },
                { text: 'SonarQube', link: '/springboot/sonarqube' },
            ]
        },
        {
            text: 'Arquetipos',
            collapsed: true,
            items: [
                { text: 'Arquetipos y su creación', link: '/springboot/arquetipos' },
                { text: 'Arquetipos vs Patrones', link: '/springboot/arquetipos_vs_patrones' },
            ]
        },
        {
            text: 'Autenticación y Seguridad',
            collapsed: true,
            items: [
                { text: 'Autenticación', link: '/springboot/autenticacion' },
                { text: 'Spring Security', link: '/springboot/springsecurity' },
            ]
        },
        {
            text: 'Mensajería y Arquitectura Asíncrona',
            collapsed: true,
            items: [
                { text: 'RabbitMQ', link: '/springboot/rabbitmq' },
                { text: 'Sistemas asíncronos', link: '/springboot/sistemas_asincronos' },
                { text: 'Desarrollo de sistema asíncrono más cola', link: '/springboot/sistema_asincrono_cola' },
                {
                    text: 'Apache Kafka',
                    collapsed: true,
                    items: [
                        { text: 'Introducción a Kafka', link: '/springboot/kafka_intro' },
                        { text: 'Topics', link: '/springboot/kafka_topic' },
                        { text: 'Integración Kafka Springboot', link: '/springboot/kafka_springboot' },
                        { text: 'Configuraciones de Kafka', link: '/springboot/kafka_configuracion' },
                    ]
                },
            ]
        },
    ]
}