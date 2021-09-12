import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kaori Hirata', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: "Welcome to Kaori's portfolio", // e.g: Welcome to my website
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
  paragraphOne: `Kaori is a Vancouver-based Front-end developer with over 5 years of experience in Canada and Japan.`,
  paragraphTwo:
    'Highly experienced in Web application with React, Typescript. I am naturally curious, and perpetually working on improving my developer skills',
  paragraphThree:
    "Personality, an outside activity lover who likes camping, hiking, and snowboarding. let's collaborate to create amazing works!",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'ECE from Japan',
    info: 'ECE from Japan is a matching application between Japanese childcare workers and families who are looking for a nanny.',
    info2: '',
    url: 'https://ecefromjapan.com/',
    repo: '', // if no repo, the button will not show up
    techs: ['React', 'Typescript', 'GAS'],
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'COS',
    info: 'COS is a professional consultant company that supports students who want to study abroad and professionals who start their careers in Canada.',
    info2: '',
    url: 'https://cosvancouver.com/',
    repo: '', // if no repo, the button will not show up
    techs: ['React', 'Typescript', 'WordPress'],
  },
  {
    id: nanoid(),
    img: 'fandine.jpg',
    title: 'Fandine',
    info: 'FanDine is a food ordering app that allows you to pre-order, pre-pay, skip the line and book a reservation at your favourite restaurants.',
    info2: '',
    url: 'https://www.fandine.com/',
    repo: '', // if no repo, the button will not show up
    techs: ['HTML', 'CSS', 'JavaScript'],
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'kaori55194@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kaori-hirata-3184a2b7/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/hikaori',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
