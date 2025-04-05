import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaFacebook,
  FaLinkedin,
} from 'react-icons/fa';
import { BiLogoJavascript } from 'react-icons/bi';
import { SiExpress, SiMongodb, SiMysql } from 'react-icons/si';
import {
  VscVscode,
  VscCommentUnresolved,
  VscTerminalPowershell,
} from 'react-icons/vsc';
import { FaGithubSquare } from 'react-icons/fa';

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
  { id: '01', count: '1', label: 'Years of \nExperience' },
  { id: '03', count: '2+', label: 'Projects \nCompleted' },
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
    progress: 60,
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
      'Experienced in HTML5, Semantic HTML, and building responsive layouts.',
  },
  {
    id: '3',
    icon: FaCss3,
    skill: 'CSS',
    progress: 65,
    type: 'frontend',
    description:
      'Experienced in using Tailwind CSS, Bootstrap for beautiful UI designs.',
  },
  {
    id: '4',
    icon: FaNodeJs,
    skill: 'Node JS',
    progress: 60,
    type: 'backend',
    description:
      'Experienced in building RESTful APIs and server-side applications using Node.js.',
  },
  {
    id: '5',
    icon: BiLogoJavascript,
    skill: 'JavaScript',
    progress: 50,
    type: 'frontend',
    description:
      'Experienced in building dynamic web applications using JavaScript and ES6 features.',
  },
  {
    id: '6',
    icon: BiLogoJavascript,
    skill: 'JavaScript',
    progress: 60,
    type: 'backend',
    description:
      'Experienced in building dynamic web applications using JavaScript and ES6 features. JavaScript is a versatile language that can be used for both frontend and backend development.',
  },
  {
    id: '7',
    icon: SiExpress,
    skill: 'Express JS',
    progress: 60,
    type: 'backend',
    description:
      'Experienced in building RESTful APIs and server-side applications using Express.js.',
  },
  {
    id: '7',
    icon: SiMongodb,
    skill: 'MongoDB',
    progress: 60,
    type: 'backend',
    description:
      'Experienced in using MongoDB for database management and data modeling.',
  },
  {
    id: '8',
    icon: SiMysql,
    skill: 'MySQL',
    progress: 60,
    type: 'backend',
    description:
      'Experienced in using MySQL for database management and data modeling. Fimiliar with SQL queries and database design principles.',
  },
  {
    id: '9',
    icon: VscVscode,
    skill: 'VsCode',
    progress: 80,
    type: 'tools',
    description:
      'Experienced in using Visual Studio Code for development and debugging.',
  },
  {
    id: '10',
    icon: VscCommentUnresolved,
    skill: 'GitHub & Git',
    progress: 80,
    type: 'soft-skills',
    description:
      'Experienced in using GitHub for version control applications. Solving unresolved issues and collaborating with other developers.',
  },
  {
    id: '11',
    icon: VscTerminalPowershell,
    skill: 'Terminal',
    progress: 80,
    type: 'tools',
    description:
      'Experienced in using terminal commands for development and debugging. Efficient in using command-line tools and scripts.',
  },
];

export const ABOUT_ME = {
  content: `\nI'm a passionate developer with a strong foundation in building responsive, user-friendly websites. have a keen interest in web development and a strong desire to learn and grow in this field. I am always eager to take on new challenges and expand my skill set.
  \nI am proficient in HTML, CSS, JavaScript, and React.js, and I have experience working with Node.js and Express.js for backend development. I am also familiar with MongoDB and MySQL for database management. I have a strong understanding of web development principles and best practices, and I am always looking for ways to improve my skills and stay up-to-date with the latest technologies.
  \nI am a quick learner and a team player, and I enjoy collaborating with others to create innovative solutions. I am excited to take on new challenges and contribute to meaningful projects that make a difference. I am also passionate about DSA solving more than 1200+ questions on different OJs like LeetCode, CodeChef, and HackerRank. I am always looking for opportunities to learn and grow, and I am excited to learning something new every day.`,
  socialLinks: [
    {
      id: '01',
      label: 'Facebook',
      icon: FaFacebook,
      link: 'https://www.facebook.com/siddarth.banerjee.90/',
    },
    {
      id: '02',
      label: 'GitHub',
      icon: FaGithubSquare,
      link: 'https://github.com/Sid-bit28',
    },
    {
      id: '03',
      label: 'LinkedIn',
      icon: FaLinkedin,
      link: 'https://www.linkedin.com/in/siddarth-banerjee-163101202/',
    },
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
