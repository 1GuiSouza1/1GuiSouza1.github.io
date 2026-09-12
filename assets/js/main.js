(() => {
  'use strict';

  const data = window.PORTFOLIO_DATA;
  const projectsGrid = document.getElementById('projectsGrid');
  const techTrack = document.getElementById('techTrack');
  const navbar = document.querySelector('.site-navbar');

  const escapeHtml = (value) => String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const renderTechs = () => {
    const set = data.technologies.map((tech) => {
      const icon = tech.symbol
        ? `<span class="${escapeHtml(tech.icon)}" aria-hidden="true">${escapeHtml(tech.symbol)}</span>`
        : `<i class="${escapeHtml(tech.icon)}" aria-hidden="true"></i>`;
      return `<div class="tech-item" title="${escapeHtml(tech.name)}">${icon}<span>${escapeHtml(tech.name)}</span></div>`;
    }).join('');

    // Repetição intencional para criar o carrossel contínuo sem salto visual.
    techTrack.innerHTML = set + set;
  };

  const renderProjects = () => {
    projectsGrid.innerHTML = data.projects.map((project, index) => `
      <div class="col-md-6 col-xl-4 reveal" style="--reveal-delay:${(index % 3) * 90}ms">
        <article class="project-card h-100" data-tone="${escapeHtml(project.tone)}">
          <a class="project-visual" href="projeto.html?id=${encodeURIComponent(project.id)}" aria-label="Conhecer ${escapeHtml(project.title)}">
            <span class="project-visual-grid" aria-hidden="true"></span>
            <span class="project-main-icon"><i class="${escapeHtml(project.icon)}"></i></span>
            <span class="project-index">0${index + 1}</span>
            <span class="project-code" aria-hidden="true">&lt;/&gt;</span>
          </a>
          <div class="project-card-body">
            <span class="project-label">${escapeHtml(project.category)}</span>
            <h3>${escapeHtml(project.shortTitle)}</h3>
            <p>${escapeHtml(project.lead)}</p>
            <div class="project-tech-preview">${project.techs.slice(0, 3).map((tech) => `<span>${escapeHtml(tech)}</span>`).join('')}</div>
            <div class="d-flex justify-content-between align-items-center gap-3 mt-auto pt-4">
              <a href="projeto.html?id=${encodeURIComponent(project.id)}" class="text-link">Conhecer projeto <i class="bi bi-arrow-right"></i></a>
              <a href="${escapeHtml(project.github)}" target="_blank" rel="noreferrer" class="icon-link" aria-label="Abrir ${escapeHtml(project.title)} no GitHub"><i class="bi bi-github"></i></a>
            </div>
          </div>
        </article>
      </div>
    `).join('');
  };

  const setupNavbar = () => {
    const onScroll = () => navbar?.classList.toggle('is-scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    document.querySelectorAll('#mainNav .nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        const nav = document.getElementById('mainNav');
        const collapse = bootstrap.Collapse.getInstance(nav);
        if (collapse && window.innerWidth < 992) collapse.hide();
      });
    });
  };

  const setupReveal = () => {
    const items = [...document.querySelectorAll('.reveal')];
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    items.forEach((item) => observer.observe(item));
  };

  renderTechs();
  renderProjects();
  document.getElementById('year').textContent = new Date().getFullYear();
  setupNavbar();
  setupReveal();
})();
