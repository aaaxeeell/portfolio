export const langs = ['en', 'es', 'ca'] as const;
export type Lang = (typeof langs)[number];

export const langPath: Record<Lang, string> = { en: '/', es: '/es/', ca: '/ca/' };
export const langLabel: Record<Lang, string> = { en: 'EN', es: 'ES', ca: 'CA' };

// Set to true once SGA is ready to be shown on the site.
export const showSGA = false;

export const links = {
  github: 'https://github.com/aaaxeeell',
  email: 'axeltorresfernandez@gmail.com',
  // Paste your LinkedIn profile URL here; the button stays hidden while empty.
  linkedin: 'https://www.linkedin.com/in/axeltorresfernandez/',
  // CV download: put a PDF (without phone number) in public/cv/ and set its path here; hidden while empty.
  cv: '',
  dispose: 'https://github.com/aaaxeeell/Dispose',
  disposeRelease: 'https://github.com/aaaxeeell/Dispose/releases/latest',
};

// Logos live in public/img; colors are each brand's, lifted a little for the dark background.
export const skills = [
  { name: 'Python', icon: 'python', color: '#4b8bbe' },
  { name: 'C++', icon: 'cplusplus', color: '#659ad2' },
  { name: 'Swift', icon: 'swift', color: '#f05138' },
  { name: 'PostgreSQL', icon: 'postgresql', color: '#6b8df0' },
  { name: 'Bash', icon: 'gnubash', color: '#4eaa25' },
  { name: 'Linux', icon: 'linux', color: '#fcc624' },
  { name: 'macOS', icon: 'apple', color: '#e4ecf8' },
  { name: 'Git', icon: 'git', color: '#f05032' },
  { name: 'GitHub', icon: 'github', color: '#e4ecf8' },
  { name: 'MATLAB', icon: 'matlab', color: '#e16737' },
  { name: 'LTspice', icon: 'ltspice', color: '#60a5fa' },
  { name: 'LaTeX', icon: 'latex', color: '#5fb3b3' },
];

export const t = {
  en: {
    meta: {
      title: 'Axel Torres Fernández · Portfolio',
      description:
        'Computer Science and Electronic Engineering student at UAB. Builder of Dispose, a scrolling window manager for macOS.',
    },
    nav: { projects: 'Projects', studies: 'Studies', experience: 'Experience', contact: 'Contact' },
    hero: {
      kicker: 'Double-degree student · Computer Science & Electronic Engineering',
      title: 'I build software close to the system.',
      lead: 'Double-degree student in Computer Science and Electronic Engineering. I care about computer architecture, native software and making things feel smooth.',
      ctaProjects: 'See my work',
      ctaContact: 'Get in touch',
      cv: 'Download CV',
    },
    projects: {
      title: 'Projects',
      dispose: {
        tag: 'macOS · Swift',
        status: 'Released · v0.3',
        summary:
          'A scrolling window manager for macOS. Windows sit side by side on one endless horizontal strip, never overlap, and glide into view as you move between them from the keyboard.',
        points: [
          'Native Swift menu-bar app built on the macOS Accessibility API',
          'Spring-based animation that can be redirected mid-motion',
          'Keyboard-driven: focus, move and resize columns with ⌃⌥ shortcuts',
          'No kernel extensions, no SIP changes, no network access',
        ],
        repo: 'Source code',
        download: 'Download',
      },
      sga: {
        tag: 'Warehouse · WMS',
        status: 'In development',
        summary:
          'A warehouse management system (SGA) inspired by my day job in a logistics block: locations, stock, orders and the picking routes operators follow.',
      },
    },
    studies: {
      title: 'Studies',
      degree: {
        badge: 'Double Degree',
        majors: ['Computer Science', 'Electronic Engineering'],
        detail: 'Computer Engineering specialization',
        where: 'Universitat Autònoma de Barcelona',
        when: 'In progress',
      },
      skillsTitle: 'Technologies',
      languagesTitle: 'Languages',
      languages: ['Catalan · native', 'Spanish · native', 'English · B2'],
    },
    experience: {
      title: 'Experience',
      role: 'Order picker',
      company: 'Mercadona S.A. · Logistics block, Sant Sadurní d’Anoia',
      when: 'Feb 2025 – present',
      points: [
        'Order preparation in a high-turnover logistics block, following picking routes assigned by the warehouse management system (SGA).',
        'Sustained productivity of 105–110%, above the platform’s standard targets.',
        'Spotting improvements in preparation and using digital tools to track inventory, within Mercadona’s Total Quality Model.',
      ],
      note: 'Working alongside my degree taught me discipline and organization, and it’s where the idea for SGA came from.',
    },
    contact: {
      title: 'Let’s talk',
      lead: 'Looking for my first opportunity in software or computer engineering. If you have a role, a project or just a question, write to me.',
      email: 'Send an email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: 'Built with Astro.',
  },

  es: {
    meta: {
      title: 'Axel Torres Fernández · Portfolio',
      description:
        'Estudiante de Ingeniería Informática e Ingeniería Electrónica de Telecomunicaciones en la UAB. Creador de Dispose, un gestor de ventanas con scroll para macOS.',
    },
    nav: { projects: 'Proyectos', studies: 'Estudios', experience: 'Experiencia', contact: 'Contacto' },
    hero: {
      kicker: 'Estudiante del Doble Grado en Ingeniería Informática e Ingeniería Electrónica de Telecomunicaciones',
      title: 'Construyo software cerca del sistema.',
      lead: 'Estudiante del doble grado en Ingeniería Informática e Ingeniería Electrónica de Telecomunicaciones. Me interesan la arquitectura de computadores, el software nativo y que las cosas se sientan fluidas.',
      ctaProjects: 'Ver mi trabajo',
      ctaContact: 'Contactar',
      cv: 'Descargar CV',
    },
    projects: {
      title: 'Proyectos',
      dispose: {
        tag: 'macOS · Swift',
        status: 'Publicado · v0.3',
        summary:
          'Un gestor de ventanas con scroll para macOS. Las ventanas se colocan una al lado de otra en una tira horizontal infinita, nunca se solapan y se deslizan a la vista mientras te mueves entre ellas con el teclado.',
        points: [
          'App nativa en Swift para la barra de menús, basada en la API de Accesibilidad de macOS',
          'Animaciones con muelles que pueden redirigirse a mitad de movimiento',
          'Control por teclado: enfoca, mueve y redimensiona columnas con atajos ⌃⌥',
          'Sin extensiones de kernel, sin tocar SIP y sin acceso a la red',
        ],
        repo: 'Código fuente',
        download: 'Descargar',
      },
      sga: {
        tag: 'Almacén · SGA',
        status: 'En desarrollo',
        summary:
          'Un sistema de gestión de almacenes (SGA) inspirado en mi trabajo en un bloque logístico: ubicaciones, stock, pedidos y las rutas de picking que siguen los operarios.',
      },
    },
    studies: {
      title: 'Estudios',
      degree: {
        badge: 'Doble Grado',
        majors: ['Ingeniería Informática', 'Ingeniería Electrónica de Telecomunicaciones'],
        detail: 'Mención en Ingeniería de Computadores',
        where: 'Universitat Autònoma de Barcelona',
        when: 'En curso',
      },
      skillsTitle: 'Tecnologías',
      languagesTitle: 'Idiomas',
      languages: ['Catalán · nativo', 'Español · nativo', 'Inglés · B2'],
    },
    experience: {
      title: 'Experiencia',
      role: 'Preparador de pedidos',
      company: 'Mercadona S.A. · Bloque logístico, Sant Sadurní d’Anoia',
      when: 'Feb 2025 – actualidad',
      points: [
        'Preparación de pedidos en un bloque logístico de alta rotación, siguiendo las rutas de recogida asignadas por el sistema SGA.',
        'Productividad sostenida entre el 105 % y el 110 %, por encima de los objetivos estándar de la plataforma.',
        'Identificación de mejoras en la preparación y uso de herramientas digitales para el seguimiento del inventario, dentro del Modelo de Calidad Total de Mercadona.',
      ],
      note: 'Compaginar el trabajo con la carrera me ha dado disciplina y organización, y de ahí nació la idea de SGA.',
    },
    contact: {
      title: 'Hablemos',
      lead: 'Busco mi primera oportunidad en el desarrollo de software o la ingeniería de computadores. Si tienes una oferta, un proyecto o una pregunta, escríbeme.',
      email: 'Enviar un email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: 'Hecho con Astro.',
  },

  ca: {
    meta: {
      title: 'Axel Torres Fernández · Portfolio',
      description:
        'Estudiant d’Enginyeria Informàtica i Enginyeria Electrònica de Telecomunicació a la UAB. Creador de Dispose, un gestor de finestres amb desplaçament per a macOS.',
    },
    nav: { projects: 'Projectes', studies: 'Estudis', experience: 'Experiència', contact: 'Contacte' },
    hero: {
      kicker: 'Estudiant del Doble Grau en Enginyeria Informàtica i Enginyeria Electrònica de Telecomunicació',
      title: 'Construeixo programari a prop del sistema.',
      lead: 'Estudiant del doble grau en Enginyeria Informàtica i Enginyeria Electrònica de Telecomunicació. M’interessen l’arquitectura de computadors, el programari natiu i que les coses es notin fluides.',
      ctaProjects: 'Veure la meva feina',
      ctaContact: 'Contactar',
      cv: 'Descarregar CV',
    },
    projects: {
      title: 'Projectes',
      dispose: {
        tag: 'macOS · Swift',
        status: 'Publicat · v0.3',
        summary:
          'Un gestor de finestres amb desplaçament per a macOS. Les finestres es col·loquen una al costat de l’altra en una tira horitzontal infinita, mai no se superposen i llisquen fins a la vista mentre et mous entre elles amb el teclat.',
        points: [
          'App nativa en Swift per a la barra de menús, basada en l’API d’Accessibilitat de macOS',
          'Animacions amb molles que es poden redirigir a mig moviment',
          'Control per teclat: enfoca, mou i redimensiona columnes amb dreceres ⌃⌥',
          'Sense extensions de nucli, sense tocar SIP i sense accés a la xarxa',
        ],
        repo: 'Codi font',
        download: 'Descarregar',
      },
      sga: {
        tag: 'Magatzem · SGA',
        status: 'En desenvolupament',
        summary:
          'Un sistema de gestió de magatzems (SGA) inspirat en la meva feina en un bloc logístic: ubicacions, estoc, comandes i les rutes de picking que segueixen els operaris.',
      },
    },
    studies: {
      title: 'Estudis',
      degree: {
        badge: 'Doble Grau',
        majors: ['Enginyeria Informàtica', 'Enginyeria Electrònica de Telecomunicació'],
        detail: 'Menció en Enginyeria de Computadors',
        where: 'Universitat Autònoma de Barcelona',
        when: 'En curs',
      },
      skillsTitle: 'Tecnologies',
      languagesTitle: 'Idiomes',
      languages: ['Català · natiu', 'Castellà · natiu', 'Anglès · B2'],
    },
    experience: {
      title: 'Experiència',
      role: 'Preparador de comandes',
      company: 'Mercadona S.A. · Bloc logístic, Sant Sadurní d’Anoia',
      when: 'Febr. 2025 – actualitat',
      points: [
        'Preparació de comandes en un bloc logístic d’alta rotació, seguint les rutes de recollida assignades pel sistema SGA.',
        'Productivitat sostinguda d’entre el 105 % i el 110 %, per sobre dels objectius estàndard de la plataforma.',
        'Identificació de millores en la preparació i ús d’eines digitals per al seguiment de l’inventari, dins del Model de Qualitat Total de Mercadona.',
      ],
      note: 'Compaginar la feina amb la carrera m’ha donat disciplina i organització, i d’aquí va néixer la idea de SGA.',
    },
    contact: {
      title: 'Parlem',
      lead: 'Busco la meva primera oportunitat en el desenvolupament de programari o l’enginyeria de computadors. Si tens una oferta, un projecte o una pregunta, escriu-me.',
      email: 'Enviar un correu',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    footer: 'Fet amb Astro.',
  },
} satisfies Record<Lang, unknown>;
