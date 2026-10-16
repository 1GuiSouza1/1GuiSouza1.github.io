# Portfólio — Guilherme Souza Alves

Portfólio pessoal responsivo desenvolvido com **HTML5, CSS3, JavaScript e Bootstrap 5**. O site apresenta projetos de desenvolvimento web, desktop e mobile, com páginas de detalhes reutilizáveis e conteúdo centralizado para facilitar a manutenção.

- **Site:** https://1guisouza1.github.io/
- **Repositório:** https://github.com/1GuiSouza1/1GuiSouza1.github.io
- **GitHub:** https://github.com/1GuiSouza1
- **LinkedIn:** https://www.linkedin.com/in/guilhermesouza-dev/

## Tecnologias e recursos

- HTML5, CSS3 e JavaScript;
- Bootstrap 5 e Bootstrap Icons;
- Devicon para ícones de tecnologias;
- Layout responsivo e tema visual escuro com detalhes em roxo;
- Dados dos projetos centralizados em `assets/js/data.js`;
- Página de detalhes reutilizável em `projeto.html`, identificada pelo parâmetro `id`;
- Galerias opcionais por projeto, com carrossel do Bootstrap;
- Verificação das mídias disponíveis: o carrossel mostra somente as imagens e os vídeos que já foram adicionados.

## Estrutura do projeto

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
│   │   ├── guilherme-hero.webp
│   │   └── projetos/
│   │       ├── up-barber/
│   │       ├── dri-atelie/
│   │       ├── reserva-labs/
│   │       ├── catalogo-brinquedos/
│   │       └── pilates/
│   └── js/
│       ├── data.js
│       ├── main.js
│       └── project.js
└── README.md
```

As pastas das galerias podem receber imagens e vídeos aos poucos. Os arquivos de mídia não estão incluídos neste pacote; adicione os arquivos com os nomes indicados abaixo.

## Como executar localmente

1. Baixe ou clone o repositório.
2. Abra a pasta do projeto no VS Code.
3. Execute a página por uma extensão de servidor local, como **Live Server**, ou use Python no terminal:

   ```bash
   python -m http.server 8000
   ```

4. Acesse `http://localhost:8000` no navegador.

Usar um servidor local é recomendado para testar os caminhos dos arquivos e as páginas com parâmetros na URL.

## Projetos

A página inicial apresenta sete projetos. Cada card abre `projeto.html` com um identificador próprio:

| Projeto | URL de detalhes |
|---|---|
| Pilates | `projeto.html?id=pilates` |
| Dri Ateliê | `projeto.html?id=dri-atelie` |
| UP Barber — Front-end | `projeto.html?id=up-barber-front` |
| UP Barber — Back-end | `projeto.html?id=up-barber-back` |
| Formulário Lab | `projeto.html?id=formulario-lab` |
| Catálogo de Brinquedos | `projeto.html?id=catalogo-brinquedos` |
| Reserva Labs | `projeto.html?id=reserva-labs` |

Para alterar título, descrição, tecnologias, ícone, cor temática, participação ou link do GitHub, edite o objeto correspondente em `assets/js/data.js`.

## Galerias de imagens e vídeo

As galerias são configuradas em `assets/js/project.js` e usam o carrossel do Bootstrap. Cada projeto pode ter sua própria pasta e quantidade de mídias. O carrossel verifica quais arquivos existem e ignora os que ainda não foram adicionados. No Pilates, o vídeo aparece primeiro e as imagens PNG podem ser incluídas depois; a reprodução não começa automaticamente e é pausada ao trocar de slide.

### UP Barber — Front-end: 4 imagens

Pasta: `assets/img/projetos/up-barber/`

- `up-barber-01.png`
- `up-barber-02.png`
- `up-barber-03.png`
- `up-barber-04.png`

### Dri Ateliê: até 8 imagens

Pasta: `assets/img/projetos/dri-atelie/`

- `dri-atelie-01.png` até `dri-atelie-08.png`

### Reserva Labs: até 8 imagens

Pasta: `assets/img/projetos/reserva-labs/`

- `reserva-labs-01.png` até `reserva-labs-08.png`

### Catálogo de Brinquedos: até 8 imagens

Pasta: `assets/img/projetos/catalogo-brinquedos/`

- `catalogo-brinquedos-01.png` até `catalogo-brinquedos-08.png`

### Pilates: 1 vídeo e até 8 imagens

Vídeo de demonstração (MP4): `assets/video/projetos/pilates/pilates-demo.mp4`

Imagens PNG (quando você quiser adicioná-las): pasta `assets/img/projetos/pilates/`, com os nomes `pilates-01.png` até `pilates-08.png`.

Para melhor compatibilidade, prefira vídeo MP4 codificado em H.264, com resolução e tamanho otimizados para a web. O player usa controles nativos, não reproduz automaticamente e carrega apenas os metadados antes de iniciar a reprodução.

Use os nomes indicados e o formato PNG para que os caminhos funcionem sem alterações. Se utilizar JPG ou WebP, ajuste a extensão em `assets/js/project.js` para corresponder ao formato real dos arquivos; não basta renomear a extensão sem converter a imagem.

Para adicionar outra galeria futuramente, inclua uma configuração em `projectGalleries` no `project.js`, usando como chave o mesmo `id` cadastrado em `assets/js/data.js`. A página `projeto.html` continua sendo reutilizada.

## Foto principal

A composição visual da seção inicial utiliza:

- `assets/img/guilherme-hero.webp` — versão otimizada para o site;
- `assets/img/guilherme-hero.png` — alternativa com transparência.

## Dependências externas

As seguintes bibliotecas são carregadas por CDN:

- Bootstrap 5;
- Bootstrap Icons;
- Devicon.

## Sobre o conteúdo dos projetos

As descrições são baseadas nos READMEs e nos arquivos disponíveis nos repositórios. No Dri Ateliê, o README público contém apenas o título do projeto; por isso, a descrição foi construída a partir das dependências e da configuração do `pom.xml`, sem presumir funcionalidades de negócio que não foi possível confirmar. Quando o repositório não documenta a contribuição individual de Guilherme, o portfólio evita atribuir responsabilidades específicas.
