import taskmanagerImg from "../assets/task-manager.webp";
import quickcartImg from "../assets/quickcart.webp";
import RPSImg from "../assets/rock-paper-scissor.webp";
import calculatorImg from "../assets/calculator.webp";
import netflixImg from "../assets/netflix.webp";
import youtubeImg from "../assets/youtube.webp";

const projects = [
  {
    img: taskmanagerImg,
    tags: ["MERN", "Full Stack"],
    title: "TaskFlow",
    desc: "A full-stack task management web application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js) featuring task creation, updates, and authentication.",
    live: "https://mern-task-manager-abhishek.vercel.app/",
    github: "https://github.com/pandey-9267/MERN-task-manager",
  },
  {
    img: quickcartImg,
    tags: ["HTML", "CSS", "API Calls"],
    title: "QuickCart Dashboard",
    desc: "A modern e-commerce dashboard built with HTML, CSS, and JavaScript, featuring a clean UI and responsive layout.",
    live: "https://quick-cart-dash-board.vercel.app/",
    github: "https://github.com/pandey-9267/quickcart-dashboard",
  },
  {
    img: RPSImg,
    tags: ["HTML", "CSS", "JavaScript"],
    title: "Rock Paper Scissors Game",
    desc: "A fun Rock Paper Scissors game built with HTML, CSS, and JavaScript for smooth gameplay and a polished user experience.",
    live: "https://quick-rps.vercel.app/",
    github: "https://github.com/pandey-9267/Rock-Paper--Scissors--GAME-",
  },
  {
    img: calculatorImg,
    tags: ["HTML", "CSS", "JavaScript"],
    title: "Calculator App",
    desc: "A simple calculator app built with HTML, CSS, and JavaScript, offering a clean interface and smooth functionality.",
    live: "https://abhi-clac.vercel.app/",
    github: "https://github.com/pandey-9267/Calculator",
  },
  {
    img: netflixImg,
    tags: ["HTML", "CSS", "JavaScript"],
    title: "Netflix Clone",
    desc: "A responsive Netflix-inspired homepage clone built with HTML, CSS, and JavaScript.",
    live: "https://clone-netfllx.vercel.app/",
    github: "https://github.com/pandey-9267/Netflix-clone",
  },
  {
    img: youtubeImg,
    tags: ["HTML", "CSS", "JavaScript"],
    title: "YouTube Clone",
    desc: "A responsive YouTube-style homepage clone built with HTML, CSS, and JavaScript.",
    live: "https://clone-y0utube.netlify.app/",
    github: "https://github.com/pandey-9267/youtube-clone",
  },
];

export default projects;