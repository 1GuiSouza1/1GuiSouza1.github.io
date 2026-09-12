# Portfólio — Guilherme Souza Alves

Portfólio pessoal responsivo construído com **HTML5, CSS3, JavaScript e Bootstrap 5**. O projeto foi organizado para ser simples de manter: o conteúdo dos seis projetos e a lista de tecnologias ficam centralizados em `assets/js/data.js`.

## Estrutura

```text
portfolio-guilherme/
├── index.html
├── projeto.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   ├── favicon.svg
│   │   ├── guilherme-hero.png
│   │   └── guilherme-hero.webp
│   └── js/
│       ├── data.js
│       ├── main.js
│       └── project.js
└── README.md
```

## Como abrir

Abra `index.html` diretamente no navegador. Para testar em um servidor local, também é possível usar qualquer extensão de servidor estático do VS Code ou:

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Projetos

A home exibe exatamente seis projetos. Cada card direciona para uma página reutilizável:

```text
projeto.html?id=pilates
projeto.html?id=up-barber-front
projeto.html?id=up-barber-back
projeto.html?id=formulario-lab
projeto.html?id=catalogo-brinquedos
projeto.html?id=reserva-labs
```

Para editar título, descrição, tecnologias, ícone, cor temática, participação ou link do GitHub, altere apenas o objeto correspondente em `assets/js/data.js`.

## Imagens dos projetos

Não existe galeria de screenshots. Os cards e as páginas internas usam **ícones e composições gráficas em CSS** para representar o tema de cada projeto, deixando o foco nas informações e no código disponível no GitHub.

## Foto principal

A composição de foto utilizada na seção inicial está em:

- `assets/img/guilherme-hero.webp` — versão otimizada para o site.
- `assets/img/guilherme-hero.png` — fallback com transparência.

## Dependências externas

Carregadas por CDN:

- Bootstrap 5
- Bootstrap Icons
- Devicon

## Conteúdo

Os textos profissionais foram escritos a partir do relatório de estágio fornecido e do perfil/repositórios públicos do GitHub. As descrições dos projetos seguem as informações presentes nos READMEs públicos. Quando um README não documenta uma contribuição individual específica, o site evita atribuí-la.
