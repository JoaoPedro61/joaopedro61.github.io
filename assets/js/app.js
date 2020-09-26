let lang = true;

const configs = {
  language: [
    'EN',
    'BR'
  ],
  webDevelop: [
    'Web develop',
    'Desenvolvedor Web',
  ],
  webPlatform: [
    'Web Platform',
    'Plataforma Web',
  ],
  backPlatform: [
    'Backend',
    'Backend',
  ],
  operations: [
    'Operations',
    'Operações',
  ],
  about: [
    'About',
    'Sobre'
  ],
  projects: [
    'Projects',
    'Projetos'
  ],
  description: [
    'Web Software Developer, with expertise in Angular working with @nodejs stack, enthusiast Open Source and Free Software.',
    'Desenvolvedor de Software Web, com expertise em Angular trabalhando com @nodejs stack, entusiasta em Open Source e Software Livre.',
  ],
  experience: [
    'Experience',
    'Experiência'
  ],
  startDateJune: [
    'June 2015',
    'Junho de 2015'
  ],
  endDateJune: [
    'present',
    'até o momento'
  ],
  descriptionBusinessTwo: [
    'Brisanet is the 9th largest internet provider in Brazil.',
    'A Brisanet é a 9ª maior provedora de internet do Brasil.'
  ],
  descriptionBusinessTwoRef1: [
    'Works with a highly trained team to deliver incredible products.',
    'Trabalho com uma equipe altamente treinada para entregar produtos incríveis.'
  ],
  descriptionBusinessTwoRef2: [
    'Serves as a developer for Javascript and all web technologies.',
    'Trabalho como desenvolvedor Javascript e com as todas tecnologias da web.'
  ],
  descriptionBusinessTwoRef3: [
    'Expert in version control, code review and CI.',
    'Especialista em controle de versão, revisão de código e CI.'
  ],
  skills: [
    'Skills',
    'Habilidades'
  ],
  talent1: [
    'Web Platform',
    'Plataforma Web'
  ],
  talent2: [
    'Backend',
    'Backend'
  ],
  talent3: [
    'Operations',
    'Operações'
  ],
  talent4: [
    'Tooling',
    'Ferramentas'
  ],
  talentDescribeOne: [
    'Accessibility (ARIA).',
    'Acessibilidade (ARIA).'
  ],
  talentDescribeTwo: [
    'Servers (Apache, Nginx).',
    'Servidores (Apache, Nginx).'
  ],
  talentDescribeThree: [
    'Databases (Postgres, MongoDB).',
    'Bancos de Dados (Postgres, MongoDB).'
  ],
  talentDescribeFour: [
    'Version Control (Git preferred).',
    'Controle de Versão (Git prefido).'
  ],
  talentDescribeFive: [
    'Tracking (GitHub, Jira, Gitlab).',
    'Rastreamento (GitHub, Jira, Gitlab).'
  ],
  talentDescribeSix: [
    'Editors (VSCode, Sublime, Atom).',
    'Editores (VSCode, Sublime, Atom).'
  ],
  descriptionOpenSource: [
    'With experience in open source projects and privates, I already contributes to community and private companies projects.',
    'Com experiência em projetos open source e privados, eu já contribui para projetos da comunide e de empresas privadas.'
  ],
  descriptionOpenSourceTwo: [
    'A simple angular component library built based on the experience gained in web development, made to simplify the construction of administrative software.',
    'Uma simples biblioteca de componentes angular construída com base na experiencia obitida no desenvolvimento web, feita para simplificar a contrução de softwares adiministrativos.'
  ],
  descriptionOpenSourceTwoRef1: [
    'Nice interface.',
    'Interface agradável.',
  ],
  descriptionOpenSourceTwoRef2: [
    'High performance modular components.',
    'Componentes modulares de alta performance.',
  ],
  descriptionOpenSourceTwoRef3: [
    'Highly customizable.',
    'Altamente customizável.',
  ],
  inDevelop: [
    "developing",
    "em desenvolvimento",
  ]
};

const createState = function (state) {
  return new Proxy(state, {
    set(target, property, value) {
      target[property] = value;
      return render();
    }
  });
};

const state = createState({ configs });

const loopKeys = function (nextFunc) { Object.keys(configs).forEach(nextFunc); };

const render = function () {
  loopKeys(function (key) {
    const els = document.querySelectorAll('[data-binding="' + key + '"]');
    if (els && els.length) {
      els.forEach((el) => {
        if (el) {
          el.innerHTML = state[key]
        }
      });
    }
  });
};

const changeLang = function () {
  lang = !lang;
  loopKeys(function (key) { state[key] = configs[key][Number(lang)]; });
};

changeLang();

document.addEventListener('keyup', (evt) => {
  if (evt.ctrlKey) {
    if (evt.code === 'IntlRo' || evt.keyCode === 193 || evt.key === '/') {
      changeLang();
    }
  }
});

