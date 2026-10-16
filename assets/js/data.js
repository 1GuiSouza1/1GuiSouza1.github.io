window.PORTFOLIO_DATA = {
  technologies: [
    { name: 'PHP', icon: 'devicon-php-plain' },
    { name: 'Java', icon: 'devicon-java-plain' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    { name: 'HTML5', icon: 'devicon-html5-plain' },
    { name: 'CSS3', icon: 'devicon-css3-plain' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
    { name: 'jQuery', icon: 'devicon-jquery-plain' },
    { name: 'C#', icon: 'devicon-csharp-plain' },
    { name: 'Spring', icon: 'devicon-spring-original' },
    { name: 'Thymeleaf', icon: 'devicon-thymeleaf-plain' },
    { name: 'Maven', icon: 'devicon-maven-plain' },
    { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
    { name: 'React Native', icon: 'devicon-react-original' },
    { name: 'Flutter', icon: 'devicon-flutter-plain' },
    { name: 'Lazarus', icon: 'portfolio-icon portfolio-icon-lazarus', symbol: 'L' },
    { name: 'MySQL', icon: 'devicon-mysql-original' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
    { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'Docker', icon: 'devicon-docker-plain' },
    { name: 'Linux', icon: 'devicon-linux-plain' },
    { name: 'PowerShell', icon: 'devicon-powershell-plain' },
    { name: 'Postman', icon: 'devicon-postman-plain' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'SVN', icon: 'devicon-subversion-plain' }
  ],
  projects: [
    {
      id: 'pilates',
      title: 'Estúdio de Pilates',
      shortTitle: 'PI Pilates',
      category: 'Web Full Stack',
      icon: 'bi bi-heart-pulse',
      tone: 'violet',
      lead: 'Aplicação web para gerenciar atividades de um estúdio de pilates, com backend em Spring Boot e interface integrada por Thymeleaf.',
      description: [
        'Projeto desenvolvido em equipe para concentrar rotinas de um estúdio de pilates em uma aplicação web.',
        'O sistema reúne agendamento de aulas, controle de assinaturas e pagamentos, registro de presença e gestão de alunos e professores.'
      ],
      highlights: ['Agendamento de aulas', 'Controle de assinaturas e pagamentos', 'Registro de presença', 'Gestão de alunos e professores', 'Interface web integrada ao backend'],
      contribution: [
        'Atuação principalmente no backend e na integração do frontend com Thymeleaf.',
        'Modelagem e implementação de entidades, repositórios, services e regras de negócio.',
        'Controllers REST, integração com MongoDB e renderização dinâmica de páginas.'
      ],
      techs: ['Java 17+', 'Spring Boot', 'Spring Web', 'Spring Data JPA', 'Thymeleaf', 'MongoDB', 'Maven'],
      github: 'https://github.com/1GuiSouza1/PI-Pilates-backend'
    },
    {
      id: 'dri-atelie',
      title: 'Dri Ateliê — Sistema Web',
      shortTitle: 'Dri Ateliê',
      category: 'Web Full Stack',
      icon: 'bi bi-palette',
      tone: 'magenta',
      lead: 'Aplicação web para o Ateliê Dri, construída com Java 17 e Spring Boot, com interface Thymeleaf, persistência MySQL e suporte a endpoints REST.',
      description: [
        'Projeto web associado ao Ateliê Dri, desenvolvido com Java 17 e Spring Boot 3.5. A aplicação combina os recursos web do Spring com templates Thymeleaf para a camada de apresentação.',
        'A estrutura técnica inclui Spring Data JPA e MySQL para persistência, validação de dados, suporte a endpoints REST e dependências para envio de e-mails. Como o README do repositório não detalha os fluxos funcionais, a descrição se concentra na arquitetura e nos recursos confirmados pelos arquivos de configuração.'
      ],
      highlights: ['Aplicação web com Java 17 e Spring Boot 3.5', 'Páginas renderizadas com Thymeleaf', 'Persistência relacional com Spring Data JPA e MySQL', 'Suporte a endpoints REST', 'Validação de dados', 'Dependência para envio de e-mails'],
      contribution: [],
      techs: ['Java 17', 'Spring Boot 3.5.6', 'Spring Web', 'Thymeleaf', 'Spring Data JPA', 'Spring Data REST', 'MySQL', 'Bean Validation', 'Spring Mail', 'Maven'],
      github: 'https://github.com/TheHive-Atelie/DriAtelie'
    },
    {
      id: 'up-barber-front',
      title: 'UP Barber — App Mobile',
      shortTitle: 'UP Barber Front',
      category: 'Mobile',
      icon: 'bi bi-scissors',
      tone: 'magenta',
      lead: 'Front-end mobile de um sistema de autoatendimento para barbearia, desenvolvido com React Native e Expo.',
      description: [
        'Aplicação mobile pensada como uma experiência de autoatendimento inspirada em totens digitais.',
        'O app consome uma API Spring Boot e trabalha com fluxos de pagamento via PIX e cartão no dispositivo móvel.'
      ],
      highlights: ['Aplicação mobile em React Native', 'Execução e build com Expo', 'Consumo de API por Axios/Fetch', 'Fluxos de pagamento PIX e cartão', 'Navegação entre telas'],
      contribution: [],
      techs: ['React Native', 'Expo', 'JavaScript', 'TypeScript', 'Axios / Fetch', 'React Navigation'],
      github: 'https://github.com/1GuiSouza1/UP_Barber_Front'
    },
    {
      id: 'up-barber-back',
      title: 'UP Barber — API REST',
      shortTitle: 'UP Barber Back',
      category: 'Backend / API',
      icon: 'bi bi-server',
      tone: 'indigo',
      lead: 'API REST para o sistema de autoatendimento UP Barber, com Spring Boot, PostgreSQL, pagamentos PIX e ambiente Docker.',
      description: [
        'Backend do sistema de autoatendimento de barbearia, criado para sustentar funcionalidades consumidas pelo aplicativo mobile.',
        'A API utiliza Spring Boot, persistência com Spring Data JPA, PostgreSQL e integração de pagamento PIX com EFI Pay.'
      ],
      highlights: ['API REST com Spring Boot', 'Persistência com Spring Data JPA', 'Banco PostgreSQL', 'Integração PIX com EFI Pay', 'Ambiente de desenvolvimento com Docker Compose'],
      contribution: [],
      techs: ['Java 21', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Docker', 'EFI Pay SDK'],
      github: 'https://github.com/1GuiSouza1/UP_Barber_Back'
    },
    // {
    //   id: 'formulario-lab',
    //   title: 'Formulário de Reserva — SALA',
    //   shortTitle: 'Formulário Lab',
    //   category: 'Front-end',
    //   icon: 'bi bi-ui-checks',
    //   tone: 'blueviolet',
    //   lead: 'Prova de conceito de interface para reserva de laboratório, com formulário responsivo e interações em JavaScript.',
    //   description: [
    //     'Mini projeto criado para praticar interface visual e comportamento do usuário em uma tela de reserva de laboratório de um sistema fictício.',
    //     'O foco é a experiência do formulário e a aplicação de conceitos básicos de front-end, sem dependência de backend ou banco de dados.'
    //   ],
    //   highlights: ['Formulário com diferentes tipos de campos', 'Feedback visual de campos obrigatórios', 'Contador de caracteres em tempo real', 'Interface responsiva', 'Validações leves em JavaScript'],
    //   contribution: [
    //     'Desenvolvimento completo do layout da tela de reservas.',
    //     'Implementação das interações JagitvaScript, validações leves e contador de caracteres.',
    //     'Design da interface com HTML e CSS criado do zero.'
    //   ],
    //   techs: ['HTML5', 'CSS3', 'JavaScript'],
    //   github: 'https://github.com/1GuiSouza1/Formulario-Lab'
    // },
    {
      id: 'catalogo-brinquedos',
      title: 'Catálogo de Brinquedos',
      shortTitle: 'Catálogo de Brinquedos',
      category: 'Web Full Stack',
      icon: 'bi bi-controller',
      tone: 'purple',
      lead: 'Sistema web full stack para gerenciamento de produtos em um catálogo de brinquedos, com CRUD e área administrativa.',
      description: [
        'Aplicação acadêmica criada para aplicar conceitos de desenvolvimento full stack com Java, Spring Boot, Thymeleaf e MySQL.',
        'O sistema simula um catálogo de loja, com gerenciamento de brinquedos, categorias, upload de imagens e uma interface pública para navegação.'
      ],
      highlights: ['Cadastro, edição, exclusão e visualização de brinquedos', 'Organização por categorias', 'Upload de imagens', 'Área administrativa protegida', 'Interface responsiva com Thymeleaf'],
      contribution: [
        'Participação na camada backend, exceto na parte de segurança.',
        'Atuação em serviços, repositórios, entidades e controladores.',
        'Prototipação, páginas com Thymeleaf e ajustes no front-end.'
      ],
      techs: ['Java 17+', 'Spring Boot', 'Spring Data JPA', 'Thymeleaf', 'MySQL', 'HTML5', 'CSS3'],
      github: 'https://github.com/1GuiSouza1/Catalogo-brinquedos'
    },
    {
      id: 'reserva-labs',
      title: 'Sistema de Agendamento de Aulas',
      shortTitle: 'Reserva Labs',
      category: 'Web / API REST',
      icon: 'bi bi-calendar2-check',
      tone: 'lavender',
      lead: 'Sistema interdisciplinar para cadastro, organização e agendamento de aulas e salas, com arquitetura MVC e API RESTful.',
      description: [
        'Projeto full stack voltado ao agendamento de aulas e à gestão de salas, com validação de disponibilidade e prevenção de conflitos de horário.',
        'A solução combina backend PHP estruturado em MVC, frontend em Vue.js e persistência em MySQL, conectados por uma API RESTful.'
      ],
      highlights: ['Cadastro e gerenciamento de usuários', 'Gestão de salas', 'Agendamento com validação de conflitos', 'Autenticação e permissões', 'API RESTful entre Vue.js e PHP'],
      contribution: [
        'Prototipação da interface e proposta de navegação do sistema.',
        'Contribuições em views interativas com Vue.js e integração com a API.',
        'Desenvolvimento de partes da camada Model e algumas rotas básicas em PHP.'
      ],
      techs: ['PHP', 'Vue.js', 'JavaScript', 'CSS3', 'MySQL', 'API REST'],
      github: 'https://github.com/1GuiSouza1/Reserva_labs'
    }
  ]
};
