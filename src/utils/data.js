import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { BiLogoJavascript } from 'react-icons/bi';
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from 'react-icons/si';
import {
  VscVscode,
  VscCommentUnresolved,
  VscTerminalPowershell,
} from 'react-icons/vsc';
import { FaGitAlt, FaXTwitter, FaDribbble } from 'react-icons/fa6';
import { MdGroups3 } from 'react-icons/md';

import PROJECT_IMG_1 from '../assets/images/project-1.png';
import PROJECT_IMG_2 from '../assets/images/project-2.png';
import PROJECT_IMG_3 from '../assets/images/project-3.png';
import PROJECT_IMG_4 from '../assets/images/project-4.png';
import PROJECT_IMG_5 from '../assets/images/project-5.png';
import PROJECT_IMG_6 from '../assets/images/project-6.png';

export const MENU_LINKS = [
  { id: '01', label: 'Home', offset: -100, to: 'hero' },
  { id: '02', label: 'Skills', offset: -80, to: 'skills' },
  { id: '03', label: 'About Me', offset: -80, to: 'about' },
  { id: '04', label: 'Projects', offset: -80, to: 'projects' },
  { id: '05', label: 'Contact', offset: -80, to: 'contact' },
];

export const STATS = [
  { id: '01', count: '10', label: 'Years of \nExperience' },
  { id: '02', count: '12', label: 'Certifications \nEarned' },
  { id: '03', count: '43', label: 'Projects \nCompleted' },
  { id: '04', count: '17+', label: 'Happy \nClients' },
];

export const SKILL_TABS = [
  { id: '01', label: 'All', value: 'all' },
  { id: '02', label: 'Frontend', value: 'frontend' },
  { id: '03', label: 'Backend', value: 'backend' },
  { id: '04', label: 'Tools', value: 'tools' },
  { id: '05', label: 'Skills', value: 'soft-skills' },
];

export const SKILLS = [
  {
    id: '1',
    icon: FaReact,
    skill: 'React JS',
    progress: 95,
    type: 'frontend',
    description:
      'Experienced in building scalable, components-driven web applications using React.js.',
  },
  {
    id: '2',
    icon: FaHtml5,
    skill: 'HTML',
    progress: 99,
    type: 'frontend',
    description:
      'Experienced in building scalable, components-driven web applications using React.js.',
  },
  {
    id: '3',
    icon: FaCss3,
    skill: 'CSS',
    progress: 65,
    type: 'frontend',
    description:
      'Experienced in building scalable, components-driven web applications using React.js.',
  },
  {
    id: '4',
    icon: FaReact,
    skill: 'React JS',
    progress: 95,
    type: 'frontend',
    description:
      'Experienced in building scalable, components-driven web applications using React.js.',
  },
  {
    id: '5',
    icon: FaReact,
    skill: 'React JS',
    progress: 95,
    type: 'frontend',
    description:
      'Experienced in building scalable, components-driven web applications using React.js.',
  },
  {
    id: '6',
    icon: FaReact,
    skill: 'React JS',
    progress: 95,
    type: 'frontend',
    description:
      'Experienced in building scalable, components-driven web applications using React.js.',
  },
];

export const ABOUT_ME = {
  content: `I'm a passionate developer with a strong foundation in building responsive, user-friendly websites.`,
  socialLinks: [
    { id: '01', label: 'Facebook', icon: FaFacebook, link: '#' },
    { id: '02', label: 'Instagram', icon: FaInstagram, link: '#' },
    { id: '03', label: 'Twitter', icon: FaXTwitter, link: '#' },
    { id: '04', label: 'LinkedIn', icon: FaLinkedin, link: '#' },
  ],

  email: 'siddarth2801@gmail.com',
  phone: '+91-7209582296',
  website: 'yupppp',
};

export const PROJECTS = [
  {
    id: 1,
    title:
      'Full Stack Notes App using MERN | MongoDB, Express, React JS, Node JS',
    image: PROJECT_IMG_1,
    tags: ['React, Express.js', 'MongoDB', 'Node.js'],
  },
  {
    id: 2,
    title:
      'Full Stack Notes App using MERN | MongoDB, Express, React JS, Node JS',
    image: PROJECT_IMG_1,
    tags: ['React, Express.js', 'MongoDB', 'Node.js'],
  },
  {
    id: 3,
    title:
      'Full Stack Notes App using MERN | MongoDB, Express, React JS, Node JS',
    image: PROJECT_IMG_1,
    tags: ['React, Express.js', 'MongoDB', 'Node.js'],
  },
  {
    id: 4,
    title:
      'Full Stack Notes App using MERN | MongoDB, Express, React JS, Node JS',
    image: PROJECT_IMG_1,
    tags: ['React, Express.js', 'MongoDB', 'Node.js'],
  },
  {
    id: 5,
    title:
      'Full Stack Notes App using MERN | MongoDB, Express, React JS, Node JS',
    image: PROJECT_IMG_1,
    tags: ['React, Express.js', 'MongoDB', 'Node.js'],
  },
  {
    id: 6,
    title:
      'Full Stack Notes App using MERN | MongoDB, Express, React JS, Node JS',
    image: PROJECT_IMG_1,
    tags: ['React, Express.js', 'MongoDB', 'Node.js'],
  },
];
