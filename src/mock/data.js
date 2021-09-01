import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kaori Hirata',
  subtitle: 'Front-end Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
  paragraphTwo: 'bbbbbbbbb',
  paragraphThree: 'cccccc',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Nanny from Japan',
    info: 'Nanny from Japan is a matching application between nanny and family',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
    techs: ['react', 'gant'],
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'COS',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Fandine',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
