(() => {
  'use strict';

  const data = window.PORTFOLIO_DATA;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const project = data.projects.find((item) => item.id === id);

  const content = document.getElementById('projectContent');
  const notFound = document.getElementById('projectNotFound');
  document.getElementById('year').textContent = new Date().getFullYear();

  if (!project) {
    notFound.classList.remove('d-none');
    return;
  }

  const setText = (selector, value) => { document.querySelector(selector).textContent = value; };
  const setLink = (selector, href) => { document.querySelector(selector).href = href; };

  document.title = `${project.title} | Guilherme Souza`;
  document.querySelector('meta[name="description"]').setAttribute('content', project.lead);

  setText('#projectCategory', project.category);
  setText('#projectTitle', project.title);
  setText('#projectLead', project.lead);
  setText('#projectSideCategory', project.category);
  setText('#projectSideTitle', project.shortTitle);
  setText('#projectSidePitch', project.lead);
  setLink('#projectGithubTop', project.github);
  setLink('#projectGithub', project.github);

  document.getElementById('projectDescription').innerHTML = project.description
    .map((paragraph) => `<p>${paragraph}</p>`).join('');

  document.getElementById('projectHighlights').innerHTML = project.highlights
    .map((item) => `<li><i class="bi bi-check2-circle"></i><span>${item}</span></li>`).join('');

  document.getElementById('projectTechs').innerHTML = project.techs
    .map((tech) => `<span>${tech}</span>`).join('');

  document.getElementById('projectSideStack').innerHTML = project.techs.slice(0, 5)
    .map((tech) => `<span>${tech}</span>`).join('');

  const contributionSection = document.getElementById('contributionSection');
  if (project.contribution.length) {
    document.getElementById('projectContribution').innerHTML = `<ul class="project-list mb-0">${project.contribution
      .map((item) => `<li><i class="bi bi-arrow-right-short"></i><span>${item}</span></li>`).join('')}</ul>`;
  } else {
    contributionSection.innerHTML = `
      <h2 class="h4"><i class="bi bi-people me-2"></i>Contexto do repositório</h2>
      <p class="section-copy mb-0">O README público deste repositório descreve o projeto e sua stack, mas não detalha uma contribuição individual de Guilherme. Por isso, o portfólio apresenta o trabalho sem atribuir responsabilidades específicas que não estejam documentadas.</p>`;
  }

  const identity = document.getElementById('projectIdentity');
  identity.dataset.tone = project.tone;
  document.getElementById('projectBigIcon').innerHTML = `<i class="${project.icon}"></i>`;

  content.classList.remove('d-none');
})();
