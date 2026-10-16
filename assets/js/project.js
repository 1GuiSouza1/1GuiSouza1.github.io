
(() => {
  'use strict';

  const data = window.PORTFOLIO_DATA;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const project = data.projects.find((item) => item.id === id);

  /*
   * O portfólio está publicado na raiz do domínio:
   * https://1guisouza1.github.io/
   *
   * Por isso, os recursos começam em /assets/.
   * Não usamos o nome do arquivo HTML para calcular a raiz.
   */
  const basePath = '/';

  /*
   * Galerias por projeto.
   * Os caminhos usam basePath para localizar os arquivos.
   */
  const projectGalleries = {
    'up-barber-front': {
      heading: 'Telas do aplicativo',
      items: [
        {
          type: 'image',
          src: `${basePath}assets/img/projetos/up-barber/up-barber-01.png`,
          alt: 'Tela 1 do aplicativo UP Barber'
        },
        {
          type: 'image',
          src: `${basePath}assets/img/projetos/up-barber/up-barber-02.png`,
          alt: 'Tela 2 do aplicativo UP Barber'
        },
        {
          type: 'image',
          src: `${basePath}assets/img/projetos/up-barber/up-barber-03.png`,
          alt: 'Tela 3 do aplicativo UP Barber'
        },
        {
          type: 'image',
          src: `${basePath}assets/img/projetos/up-barber/up-barber-04.png`,
          alt: 'Tela 4 do aplicativo UP Barber'
        }
      ]
    },

    'catalogo-brinquedos': {
      heading: 'Telas do sistema',
      items: [
        {
          type: 'image',
          src: `${basePath}assets/img/projetos/catalogo-brinquedos/catalogo-brinquedos-01.png`,
          alt: 'Tela 1 do Catálogo de Brinquedos'
        },
        {
          type: 'image',
          src: `${basePath}assets/img/projetos/catalogo-brinquedos/catalogo-brinquedos-02.png`,
          alt: 'Tela 2 do Catálogo de Brinquedos'
        },
        {
          type: 'image',
          src: `${basePath}assets/img/projetos/catalogo-brinquedos/catalogo-brinquedos-03.png`,
          alt: 'Tela 3 do Catálogo de Brinquedos'
        },
        {
          type: 'image',
          src: `${basePath}assets/img/projetos/catalogo-brinquedos/catalogo-brinquedos-04.png`,
          alt: 'Tela 4 do Catálogo de Brinquedos'
        }
      ]
    },

    'reserva-labs': {
      heading: 'Telas do sistema',
      items: [
        {
          type: 'image',
          src: `${basePath}assets/img/projetos/reserva-labs/reserva-labs-01.png`,
          alt: 'Tela 1 do Reserva Labs'
        },
        {
          type: 'image',
          src: `${basePath}assets/img/projetos/reserva-labs/reserva-labs-02.png`,
          alt: 'Tela 2 do Reserva Labs'
        },
        {
          type: 'image',
          src: `${basePath}assets/img/projetos/reserva-labs/reserva-labs-03.png`,
          alt: 'Tela 3 do Reserva Labs'
        },
        {
          type: 'image',
          src: `${basePath}assets/img/projetos/reserva-labs/reserva-labs-04.png`,
          alt: 'Tela 4 do Reserva Labs'
        }
      ]
    },

    'dri-atelie': {
      heading: 'Telas do sistema',
      items: [
        {
          type: 'image',
          src: `${basePath}assets/img/projetos/dri-atelie/dri-atelie-01.png`,
          alt: 'Tela 1 do dri atelie'
        },
        {
          type: 'image',
          src: `${basePath}assets/img/projetos/dri-atelie/dri-atelie-02.png`,
          alt: 'Tela 2 do dri atelie'
        },
        {
          type: 'image',
          src: `${basePath}assets/img/projetos/dri-atelie/dri-atelie-03.png`,
          alt: 'Tela 3 do dri atelie'
        },
        {
          type: 'image',
          src: `${basePath}assets/img/projetos/dri-atelie/dri-atelie-04.png`,
          alt: 'Tela 4 do dri atelie'
        },
        {
          type: 'image',
          src: `${basePath}assets/img/projetos/dri-atelie/dri-atelie-05.png`,
          alt: 'Tela 5 do dri atelie'
        }
      ]
    }
  };

  const content = document.getElementById('projectContent');
  const notFound = document.getElementById('projectNotFound');

  document.getElementById('year').textContent =
    new Date().getFullYear();

  if (!project) {
    notFound.classList.remove('d-none');
    return;
  }

  const setText = (selector, value) => {
    document.querySelector(selector).textContent = value;
  };

  const setLink = (selector, href) => {
    document.querySelector(selector).href = href;
  };

  document.title = `${project.title} | Guilherme Souza Alves`;

  document
    .querySelector('meta[name="description"]')
    .setAttribute('content', project.lead);

  setText('#projectCategory', project.category);
  setText('#projectTitle', project.title);
  setText('#projectLead', project.lead);
  setText('#projectSideCategory', project.category);
  setText('#projectSideTitle', project.shortTitle);
  setText('#projectSidePitch', project.lead);

  setLink('#projectGithubTop', project.github);
  setLink('#projectGithub', project.github);

  document.getElementById('projectDescription').innerHTML =
    project.description
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join('');

  document.getElementById('projectHighlights').innerHTML =
    project.highlights
      .map((item) => `
        <li>
          <i class="bi bi-check2-circle"></i>
          <span>${item}</span>
        </li>
      `)
      .join('');

  document.getElementById('projectTechs').innerHTML =
    project.techs
      .map((tech) => `<span>${tech}</span>`)
      .join('');

  document.getElementById('projectSideStack').innerHTML =
    project.techs
      .slice(0, 5)
      .map((tech) => `<span>${tech}</span>`)
      .join('');

  const contributionSection =
    document.getElementById('contributionSection');

  if (project.contribution.length) {
    document.getElementById('projectContribution').innerHTML = `
      <ul class="project-list mb-0">
        ${project.contribution
          .map((item) => `
            <li>
              <i class="bi bi-arrow-right-short"></i>
              <span>${item}</span>
            </li>
          `)
          .join('')}
      </ul>
    `;
  } else {
    contributionSection.innerHTML = `
      <h2 class="h4">
        <i class="bi bi-people me-2"></i>
        Contexto do repositório
      </h2>
      <p class="section-copy mb-0">
        O repositório não detalha com clareza quais partes foram
        desenvolvidas individualmente por Guilherme. Por isso, esta
        página descreve o projeto e as tecnologias identificadas sem
        atribuir responsabilidades específicas que não estejam
        documentadas.
      </p>
    `;
  }

  const identity = document.getElementById('projectIdentity');

  identity.dataset.tone = project.tone;

  document.getElementById('projectBigIcon').innerHTML =
    `<i class="${project.icon}"></i>`;

  /*
   * Verifica se um vídeo pode ser carregado.
   * Evita adicionar vídeos inexistentes à galeria.
   */
  const videoExists = (src) => new Promise((resolve) => {
    const video = document.createElement('video');
    let settled = false;

    const finish = (exists) => {
      if (settled) return;

      settled = true;
      video.removeAttribute('src');
      video.load();

      resolve(exists);
    };

    video.preload = 'metadata';

    video.addEventListener(
      'loadedmetadata',
      () => finish(true),
      { once: true }
    );

    video.addEventListener(
      'error',
      () => finish(false),
      { once: true }
    );

    video.src = src;
    video.load();

    window.setTimeout(() => finish(false), 4000);
  });

  /*
   * Monta o carrossel de imagens e vídeos.
   */
  const renderGallery = (galleryConfig, gallery) => {
    const galleryId = `projectGallery-${project.id}`;

    const videoCount = gallery.filter(
      (media) => media.type === 'video'
    ).length;

    const imageCount = gallery.length - videoCount;

    const mediaSummary = [
      videoCount
        ? `${videoCount} ${videoCount === 1 ? 'vídeo' : 'vídeos'}`
        : '',
      imageCount
        ? `${imageCount} ${imageCount === 1 ? 'imagem' : 'imagens'}`
        : ''
    ]
      .filter(Boolean)
      .join(' · ');

    const indicators = gallery.length > 1
      ? gallery.map((media, index) => `
          <button
            type="button"
            data-bs-target="#${galleryId}"
            data-bs-slide-to="${index}"
            ${index === 0
              ? 'class="active" aria-current="true"'
              : ''}
            aria-label="Ir para a mídia ${index + 1}">
          </button>
        `).join('')
      : '';

    const indicatorsMarkup = gallery.length > 1
      ? `<div class="carousel-indicators">${indicators}</div>`
      : '';

    const controlsMarkup = gallery.length > 1
      ? `
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#${galleryId}"
            data-bs-slide="prev"
            aria-label="Mídia anterior">
            <span
              class="carousel-control-prev-icon"
              aria-hidden="true">
            </span>
          </button>

          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#${galleryId}"
            data-bs-slide="next"
            aria-label="Próxima mídia">
            <span
              class="carousel-control-next-icon"
              aria-hidden="true">
            </span>
          </button>
        `
      : '';

    const slides = gallery.map((media, index) => {
      const activeClass = index === 0 ? 'active' : '';

      if (media.type === 'video') {
        return `
          <div class="carousel-item ${activeClass}">
            <video
              class="d-block w-100"
              controls
              playsinline
              preload="metadata"
              aria-label="${media.alt}"
              style="
                height: clamp(320px, 60vh, 480px);
                object-fit: contain;
                background: rgba(8, 5, 13, .65);
              ">
              <source src="${media.src}" type="video/mp4">
              Seu navegador não oferece suporte
              à reprodução de vídeo HTML5.
            </video>
          </div>
        `;
      }

      return `
        <div class="carousel-item ${activeClass}">
          <img
            src="${media.src}"
            class="d-block w-100"
            alt="${media.alt}"
            ${index === 0
              ? 'fetchpriority="high"'
              : 'loading="lazy"'}
            style="
              height: clamp(320px, 60vh, 480px);
              object-fit: contain;
              background: rgba(8, 5, 13, .65);
            ">
        </div>
      `;
    }).join('');

    const galleryMarkup = `
      <section
        class="project-gallery mb-4"
        aria-label="${galleryConfig.heading}">

        <div
          class="d-flex justify-content-between align-items-center
                 gap-2 mb-3">

          <h3 class="h5 mb-0">
            <i class="bi bi-collection-play me-2"></i>
            ${galleryConfig.heading}
          </h3>

          <span class="project-label">
            ${mediaSummary}
          </span>
        </div>

        <div
          id="${galleryId}"
          class="carousel slide"
          data-bs-interval="false">

          ${indicatorsMarkup}

          <div
            class="carousel-inner rounded-4 overflow-hidden"
            style="
              border: 1px solid rgba(255, 255, 255, .12);
              background: rgba(8, 5, 13, .65);
            ">
            ${slides}
          </div>

          ${controlsMarkup}
        </div>

        <p class="project-note mt-3 mb-0">
          Use as setas ou os indicadores para navegar pelas mídias.
          O vídeo só é reproduzido quando você clicar em reproduzir.
        </p>
      </section>
    `;

    const identityPattern = identity.querySelector(
      '.project-identity-pattern'
    );

    if (identityPattern) {
      identityPattern.insertAdjacentHTML(
        'afterend',
        galleryMarkup
      );
    } else {
      identity.insertAdjacentHTML(
        'afterbegin',
        galleryMarkup
      );
    }

    /*
     * Interrompe o vídeo ao trocar de slide.
     */
    const carouselElement = document.getElementById(galleryId);

    carouselElement.addEventListener(
      'slide.bs.carousel',
      () => {
        carouselElement.querySelectorAll('video').forEach(
          (video) => video.pause()
        );
      }
    );

    /*
     * Oculta os elementos substituídos pela galeria.
     */
    [
      '#projectBigIcon',
      '#projectSideCategory',
      '#projectSideTitle',
      '#projectSidePitch',
      '#projectSideStack'
    ].forEach((selector) => {
      document.querySelector(selector).classList.add('d-none');
    });

    /*
     * Registra falhas de carregamento para facilitar o diagnóstico.
     */
    carouselElement.querySelectorAll('img').forEach((img) => {
      img.addEventListener('error', () => {
        console.error(
          'Não foi possível carregar a imagem:',
          img.currentSrc || img.src
        );
      });
    });
  };

  /*
   * Inicializa a galeria do projeto selecionado.
   */
  const initializePage = async () => {
    const galleryConfig = projectGalleries[project.id];

    if (!galleryConfig) return;

    const galleryItems = [];

    for (const item of galleryConfig.items) {
      if (
        item.type !== 'video' ||
        await videoExists(item.src)
      ) {
        galleryItems.push(item);
      }
    }

    if (galleryItems.length > 0) {
      renderGallery(galleryConfig, galleryItems);
    }
  };

  content.classList.remove('d-none');

  initializePage();
})();
