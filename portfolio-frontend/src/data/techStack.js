import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaLaptopCode,
  FaServer,
  FaTools,
  FaLayerGroup,
  FaDatabase,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

export const techCategories = [
  {
    title: "Languages",
    icon: FaLaptopCode,
    skills: [
      {
        icon: FaJava,
        color: "#007396",
        name: "Java",
      },
      {
        icon: FaJs,
        color: "#F7DF1E",
        name: "JavaScript",
      },
      {
        icon: FaHtml5,
        color: "#E34F26",
        name: "HTML5",
      },
      {
        icon: FaCss3Alt,
        color: "#1572B6",
        name: "CSS3",
      },
    ],
  },

  {
    title: "Frontend",
    icon: FaLayerGroup,
    skills: [
      {
        icon: FaReact,
        color: "#61DAFB",
        name: "React.js",
      },
      {
        icon: SiTailwindcss,
        color: "#06B6D4",
        name: "Tailwind CSS",
      },
    ],
  },

  {
    title: "Backend",
    icon: FaServer,
    skills: [
      {
        icon: FaNodeJs,
        color: "#339933",
        name: "Node.js",
      },
      {
        icon: SiExpress,
        color: "#000000",
        name: "Express.js",
      },
    ],
  },

  {
    title: "Database",
    icon: FaDatabase,
    skills: [
      {
        icon: SiMongodb,
        color: "#47A248",
        name: "MongoDB",
      },
    ],
  },

  {
    title: "Tools",
    icon: FaTools,
    skills: [
      {
        icon: FaGitAlt,
        color: "#F05032",
        name: "Git",
      },
      {
        icon: FaGithub,
        color: "#181717",
        name: "GitHub",
      },
      {
        icon: SiVercel,
        color: "#000000",
        name: "Vercel",
      },
    ],
  },
];