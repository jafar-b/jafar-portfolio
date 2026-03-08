import {
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/jafar-b",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/jafar-beldar-2593b11a3/",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/zafer_ig/",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
    {
    skill_name: "NestJS",
    image: "nestjs.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "Laravel",
    image: "laravel.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
    {
    skill_name: "Spring Boot",
    image: "spring.png",
    width: 110,
    height: 120,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
] as const;

export const DEPLOYMENT_SKILL = [
  {
    skill_name: "Git",
    image: "git.png",
    width: 60,
    height: 60,
  },

  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Linux",
    image: "linux.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "AWS",
    image: "aws.svg",
    width: 70,
    height: 70,
  },
] as const;


export const PROJECT_MANAGEMENT_SKILL = [
  {
    skill_name: "Jira",
    image: "jira.png",
    width: 90,
    height: 90,
  },
  {
    skill_name: "PowerBI",
    image: "powerbi.png",
    width: 320,
    height: 320,
  },
  {
    skill_name: "Excel",
    image: "excel.png",
    width: 80,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    title: "Freelance Platform",
    description:
      "A platform for freelancers and clients to connect, post jobs, and collaborate. Built with MERN stack (React + Node.js) and NestJS backend using PostgreSQL database.",
    image: "/projects/freelanceproject.png",
    link: "https://github.com/jafar-b/nodejs/tree/master/js-files/freelance",
  },
  {
    title: "Cashew Factory Management System",
    description:
      "A desktop-based system to manage cashew factory operations like inventory, employee tracking, and reports. Developed using Python (Tkinter) and SQLite as the database.",
    image: "/projects/cfcs.png",
    link: "https://github.com/jafar-b/Cashew-Factory-Coordination-System",
  },
  {
    title: "Tailor Website",
    description:
      "An online clothing website with ecommerce functionality. Built with MERN stack featuring product listings, shopping cart, and checkout system.",
    image: "/projects/yax tailors ss.png",
    link: "https://github.com/jafar-b/yax-tailors-website",
  },
  {
    title: "Motivational Quotes App",
    description:
      "A motivational quotes application built using Flutter and Firebase. Features daily motivational content, bookmarking, and sharing capabilities. Developed as part of internship at Pleximus Inc.",
    image: "/projects/motivationalquotesapp.jpeg",
    link: "https://github.com/jafar-b",
  },
  {
    title: "News Website",
    description:
      "A news website built with Next.js and Tailwind CSS. News articles are fetched through Open News API with real-time updates and filtering capabilities.",
    image: "/projects/news-site.png",
    link: "https://github.com/jafar-b",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/jafar-b",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/jafar-beldar-2593b11a3/",
      },
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/zafer_ig/",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com/Beldarjafar",
      },
      {
        name: "Email",
        icon: null,
        link: "mailto:beldarjafar@gmail.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "About Me",
        icon: null,
        link: "#about-me",
      },
      {
        name: "My Projects",
        icon: null,
        link: "#projects",
      },
      {
        name: "Resume",
        icon: null,
        link: "/Jafar_Beldar_IT.pdf",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/jafar-b",
};
