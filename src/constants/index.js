import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  meta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import learnovate from '../assets/company/learnovate.png';
import codesoft from '../assets/company/codesoft.png';
import gcloud from '../assets/company/gcloud.png';
import internshala from '../assets/company/internshala.jpeg';
import netflix from '../assets/company/Netflix.png';
import eduhome from '../assets/company/eduhome.png';
import weatherApp from '../assets/company/weatherApp.png';


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Structures",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];


const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Learnovate Enterprises",
    icon: learnovate,
    iconBg: "#383E56",
    date: "June 2025 - July 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Internshala Student Partner",
    company_name: "Internshala",
    icon: internshala,
    iconBg: "#E6DEDD",
    date: "June 2024 - Ongoing",
    points: [
      " A Foundation for Skill Development and Resume Enhancement.",
      "Provides a fertile ground for students to expand their professional network and cultivate leadership skills. By interacting with fellow students, college faculty, and the Internshala team, partners develop a robust network.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Google Cloud Skills Boost",
    company_name: "Google Cloud Platform",
    icon: gcloud,
    iconBg: "#383E56",
    date: "May 2023 - Jan 2024",
    points: [
      "Hands-On Learning with Free Credits,These credits allow students to experiment with and learn various Google Cloud services without any financial investment. This hands-on experience is invaluable, as it enables them to build real-world projects.",
      " Development of In-Demand Skills,The badges serve as verifiable credentials of their proficiency, which can be showcased on their resumes and professional networking profiles, demonstrating their capabilities to potential employers.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Campus Ambassador",
    company_name: "CodeSoft",
    icon: codesoft,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Becoming a Campus Ambassador for CodeSoft offered a unique opportunity for students to gain valuable experience.This role serves as a vital link between the innovative tech company and the academic community, providing a platform for ambassadors to emerge as leaders and influencers on their respective campuses.",
      "Talent Acquisition ,Gaining insights into the recruitment process and learning how to identify promising candidates.",
      "Campus Outreach, Mastering the art of communication and marketing to a student audience.",
      "Professional Networking: As a CodeSoft Campus Ambassador, students have the unparalleled opportunity to connect with industry professionals, mentors, and peers from across the country",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "EduHome Master",
    description:
      "Eduhome provides supplemental learning materials and digital resources including English coursebooks, storybooks, illustrations, PPTs, and interactive learning tools designed for students, parents, and teachers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: eduhome,
    source_code_link: "https://github.com/isaksham2003/eduhome-master",
  },
  {
    name: "Weather App with Live API",
    description:
      "This Weather App is a responsive and minimal web application built using React, Vite, and Tailwind CSS, which fetches real-time weather data using the OpenWeatherMap API. The app allows users to search for any city and instantly view current weather conditions such as temperature, humidity, wind speed, and weather descriptions, all in a clean and modern UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: weatherApp,
    source_code_link: "https://github.com/isaksham2003/weather-React-with-vite",
  },
  {
    name: "Netflix Clone",
    description:
      "A Netflix clone created using only HTML and CSS is a static, visual replica of the Netflix user interface. It focuses on recreating the look and feel of the platform—its layout, color scheme, and typography—but does not include dynamic functionality like video streaming, user logins, or content updates. It's an excellent project for practicing front-end development skills.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/isaksham2003/NETFLIX-clone",
  },
];

export { services,technologies, experiences, testimonials, projects,learnovate,internshala,codesoft,gcloud,netflix,eduhome,weatherApp };