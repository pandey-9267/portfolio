import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import "./App.css";


import { useState } from "react";
import axios from "axios";

import youtubeImg from "./assets/youtube.png";
import netflixImg from "./assets/netflix.png";
import taskmanagerImg from "./assets/task-manager.png";
import profileImg from "./assets/profile.png";
import quickcartImg from "./assets/quickcart.png";

import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

import {
  UserCircle,
  Home,
  User,
  Briefcase,
  Mail,
  ArrowRight,
  MapPin,
} from "lucide-react";



function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://portfolio-3kt4.onrender.com/api/contact",
        formData
      );

      setStatus("Message sent successfully ✅");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      console.log(res.data);
    } catch (error) {
      setStatus("Failed to send message ❌");
      console.log(error);
    }
  };


  const navItems = [
    { id: "home", label: "Home", Icon: Home },
    { id: "about", label: "About", Icon: User },
    { id: "experience", label: "Experience", Icon: Briefcase },
    { id: "projects", label: "Projects", Icon: Briefcase },
    { id: "contact", label: "Contact", Icon: Mail },
  ];

  return (
    <div className="bg-surface text-on-surface min-h-screen font-[var(--font-body)]">
      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-surface-variant">
        <div className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 w-full max-w-[1280px] mx-auto gap-2">
          <span className="font-[var(--font-display)] text-lg md:text-2xl font-bold tracking-tight text-primary shrink-0">
            PORTFOLIO
          </span>
          <nav className="flex gap-1 md:gap-6 items-center overflow-x-auto">
            {navItems.map(({ id, label, Icon }, i) => (
              <a
                key={id}
                href={`#${id}`}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg font-semibold text-xs md:text-sm tracking-widest uppercase hover:text-secondary transition-colors ${i === 0 ? "text-primary font-bold" : "text-on-surface-variant"
                  }`}
              >
                <Icon className="size-4" />
                <span className="hidden md:inline">{label}</span>
              </a>
            ))}
          </nav>
          <div className="relative group shrink-0">
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-all"
              aria-label="Account"
            >
              <UserCircle className="text-primary size-8 hover:scale-110 transition-all" />
            </button>

            <div className="absolute right-0 mt-2 w-64 bg-white shadow-xl rounded-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

              <a
                href="/Abhishek_Pandey_Resume.docx"
                download
                className="block px-4 py-3 text-sm font-medium hover:bg-gray-100"
              >
                Download Resume
              </a>



              <a
                href="https://www.linkedin.com/in/abhishek-pandey-03a4b4304"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-sm font-medium hover:bg-gray-100"
              >
                LinkedIn
              </a>

              <a
                href="https://leetcode.com/u/pandey-9267/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-sm font-medium hover:bg-gray-100"
              >
                LeetCode
              </a>

              <a
                href="https://github.com/pandey-9267"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-sm font-medium hover:bg-gray-100 rounded-b-xl"
              >
                GitHub
              </a>

            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 overflow-x-hidden">
        {/* Hero */}
        <section
          id="home"
          className="px-6 max-w-[1280px] mx-auto min-h-screen flex flex-col justify-center items-start gap-8 py-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 w-full">
            <div className="space-y-4 max-w-2xl">
              <p className="text-sm font-semibold text-secondary uppercase tracking-widest">
                Available for Hire
              </p>
              <h1 className="font-[var(--font-display)] font-extrabold text-[40px] sm:text-[52px] md:text-[64px] leading-[1.1] tracking-tight text-primary">
                Hi, I'm Abhishek Pandey.
              </h1>

              <p className="text-xl md:text-2xl font-semibold text-secondary">
                MERN Stack Developer | React Developer
              </p>

              <h2 className="font-[var(--font-display)] font-bold text-[28px] sm:text-[40px] md:text-[56px] leading-tight text-on-primary-container">
                Turning ideas into fast, scalable MERN applications.
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                MERN Stack Developer and B.Tech CSE student passionate about building modern web applications using React.js, Node.js, Express.js, and MongoDB.

                Currently seeking internship opportunities to apply my skills, contribute to real-world projects, and grow as a software developer.

              </p>
              <div className="flex flex-wrap gap-4 pt-6">
                <a
                  href="#projects"
                  className="bg-primary text-on-primary px-8 py-4 rounded-xl text-sm font-semibold tracking-widest uppercase hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  View My Work
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#contact"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-xl text-sm font-semibold tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all"
                >
                  Let's Connect
                </a>
              </div>
            </div>

            {/* add photo here */}

            {/* for moving the photo a little bit up and right and adding a white border around it and also adding a shadow to it */}

            <div className="flex justify-center md:justify-end">
              <img
                src={profileImg}
                alt="Abhishek Pandey"
                className="w-[220px] sm:w-[260px] md:w-[300px] h-auto object-cover rounded-3xl shadow-xl border-4 border-white md:-translate-y-12 md:translate-x-10"
              />
              {/* edit the translate values for moving all side  */}
            </div>

          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-[80px] px-6 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 rounded-xl overflow-hidden shadow-md">
              <img src={profileImg} alt="Designer working in a bright studio" className="w-full aspect-square object-cover" />
            </div>
            <div className="md:col-span-7 space-y-6">
              <h2 className="font-[var(--font-display)] font-bold text-[32px] md:text-[40px] leading-tight tracking-tight text-primary">
                About Me
              </h2>
              <p className="text-lg text-on-surface-variant">
                I'm a curious and passionate MERN Stack Developer currently pursuing B.Tech in Computer Science Engineering. I enjoy building responsive, user-friendly web applications using React.js, Node.js, Express.js, and MongoDB.
              </p>

              <p className="text-lg text-on-surface-variant">
                Currently working as a Full Stack Developer Intern at Talking Crooks, contributing to real-world web applications using React.js, Node.js, Express.js, and MongoDB.
              </p>

              <p className="text-lg text-on-surface-variant">
                I'm actively learning Data Structures & Algorithms and modern web technologies while seeking opportunities to grow as a software developer and contribute to impactful projects.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div>
                  <p className="font-[var(--font-display)] font-extrabold text-[40px] text-secondary leading-none">
                    5+
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant mt-1">
                    Projects Done
                  </p>
                </div>
                <div>
                  <p className="font-[var(--font-display)] font-extrabold text-[40px] text-secondary leading-none">
                    2 mo
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant mt-1">
                    Internship Experience
                  </p>
                </div>
                <div>
                  <p className="font-[var(--font-display)] font-extrabold text-[40px] text-secondary leading-none">
                    10+
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant mt-1">
                    GitHub Repos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mt-[80px] px-6 max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] font-bold text-[32px] md:text-[40px] text-primary">
              Tech Stack
            </h2>

            <p className="text-base text-on-surface-variant">
              Technologies I use to build modern web applications.
            </p>
          </div>

          {/* Core Tech Stack */}



          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">


            {[
              { icon: <FaHtml5 size={40} color="#E34F26" />, name: "HTML5" },
              { icon: <FaCss3Alt size={40} color="#1572B6" />, name: "CSS3" },
              { icon: <FaJs size={40} color="#F7DF1E" />, name: "JavaScript" },
              { icon: <FaReact size={40} color="#61DAFB" />, name: "React.js" },
              { icon: <FaNodeJs size={40} color="#339933" />, name: "Node.js" },
              { icon: <SiExpress size={40} color="#000000" />, name: "Express.js" },
              { icon: <SiMongodb size={40} color="#47A248" />, name: "MongoDB" },
              { icon: <SiTailwindcss size={40} color="#06B6D4" />, name: "Tailwind CSS" },
            ].map((tech) => (
              <div key={tech.name} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center gap-3 hover:-translate-y-2 transition-all">
                {tech.icon}
                <span className="font-semibold text-primary">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Tools & Platforms */}
          <div className="mt-12 text-center mb-6">
            <h3 className="font-semibold text-lg text-on-surface-variant uppercase tracking-widest">
              Tools & Platforms
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { icon: <FaGitAlt size={40} color="#F05032" />, name: "Git" },
              { icon: <FaGithub size={40} color="#181717" />, name: "GitHub" },
              { icon: <SiVercel size={40} color="#000000" />, name: "Vercel" },
            ].map((tech) => (
              <div key={tech.name} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center gap-3 hover:-translate-y-2 transition-all">
                {tech.icon}
                <span className="font-semibold text-primary">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>



        {/* Experience */}
        <section
          id="experience"
          className="mt-[80px] px-6 max-w-[1280px] mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] font-bold text-[32px] md:text-[40px] tracking-tight text-primary">
              Experience
            </h2>
            <p className="text-base text-on-surface-variant">
              Professional experience and industry exposure.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  Full Stack Developer Intern
                </h3>

                <p className="text-lg font-semibold text-blue-600 mt-1">
                  Talking Crooks
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    React.js
                  </span>

                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    Node.js
                  </span>

                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                    MongoDB
                  </span>

                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    Git & GitHub
                  </span>
                </div>
              </div>

              <span className="text-sm font-semibold text-gray-500">
                June 2026 – Present
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Developed responsive web interfaces using React.js and Tailwind CSS.</li>

              <li>• Built reusable frontend components for scalable applications.</li>

              <li>• Collaborated with team members using Git and GitHub workflows.</li>

              <li>• Improved website performance, UI consistency, and user experience.</li>

              <li>• Participated in real-world development, testing, and deployment processes.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}

        <section id="projects" className="mt-[80px] px-6 max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] font-bold text-[32px] md:text-[40px] tracking-tight text-primary">
              Projects
            </h2>

            <p className="text-base text-on-surface-variant">
              Realizing ideas through design and code.
            </p>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            autoHeight={false}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {[
              {
                img: taskmanagerImg,
                tags: ["MERN", "Full Stack"],
                title: "TaskFlow",
                desc: "A full-stack task management web application built using MongoDB, Express.js, React.js, and Node.js with task creation, updating, and authentication features.",
                live: "https://mern-task-manager-abhishek.vercel.app/",
                github: "https://github.com/pandey-9267/MERN-task-manager",
              },
              {
                img: quickcartImg,
                tags: ["React", "Frontend"],
                title: "QuickCart Dashboard",
                desc: "A responsive e-commerce dashboard built using React.js with modern UI and real-time data visualization.",
                live: "https://quick-cart-dash-board.vercel.app/",
                github: "https://github.com/pandey-9267/quickcart-dashboard",
              },
              {
                img: netflixImg,
                tags: ["HTML", "CSS"],
                title: "Netflix Clone",
                desc: "A responsive Netflix homepage clone built using pure HTML and CSS with modern UI styling and responsive layout.",
                live: "https://clone-netfllx.vercel.app/",
                github: "https://github.com/pandey-9267/Netflix-clone",
              },
              {
                img: youtubeImg,
                tags: ["HTML", "CSS"],
                title: "YouTube Clone",
                desc: "A responsive YouTube homepage clone built using pure HTML and CSS.",
                live: "https://clone-y0utube.netlify.app/",
                github: "https://github.com/pandey-9267/youtube-clone",
              },


            ].map((p) => (
              <SwiperSlide key={p.title} className="h-full">
                <div className="group rounded-xl overflow-hidden shadow-sm bg-surface-container-lowest border border-outline-variant hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 space-y-3 flex flex-col flex-1">
                    <div className="flex gap-2 flex-wrap">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 bg-surface-variant text-on-surface-variant text-[10px] uppercase font-bold rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-bold text-2xl text-primary">
                      {p.title}
                    </h3>

                    <p className="text-base text-on-surface-variant">
                      {p.desc}
                    </p>


                    <div className="flex gap-3 mt-auto pt-4">
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                      >
                        Live Demo
                      </a>

                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-100 transition"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>


        {/* Coding Profiles */}
        <section className="mt-[80px] px-6 max-w-[1280px] mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] font-bold text-[32px] md:text-[40px] text-primary">
              Coding Profiles
            </h2>

            <p className="text-base text-on-surface-variant">
              Platforms where I practice, learn, and build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <a
              href="https://github.com/pandey-9267"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="mb-3">
                <FaGithub size={40} color="#181717" />
              </div>
              <h3 className="text-xl font-bold">GitHub</h3>
              <p className="text-gray-600 mt-2">
                10+ repositories, projects, and contributions.
              </p>
            </a>

            <a
              href="https://leetcode.com/u/pandey-9267/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="mb-3">
                <SiLeetcode size={40} color="#FFA116" />
              </div>
              <h3 className="text-xl font-bold">LeetCode</h3>
              <p className="text-gray-600 mt-2">
                Active learner focused on DSA and problem solving.
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/abhishek-pandey-03a4b4304/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="mb-3">
                <FaLinkedin size={40} color="#0A66C2" />
              </div>
              <h3 className="text-xl font-bold">LinkedIn</h3>
              <p className="text-gray-600 mt-2">
                Professional profile, networking, and career updates.
              </p>
            </a>

          </div>
        </section>








        {/* Contact */}
        <section
          id="contact"
          className="mt-[80px] mx-4 md:mx-auto max-w-[1280px] py-8 bg-primary-container rounded-3xl text-on-primary"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div className="space-y-6">
              <h2 className="font-[var(--font-display)] font-bold text-[32px] md:text-[40px] tracking-tight text-white">
                Let's Connect
              </h2>
              <p className="text-lg text-on-primary-container">
                I'm always looking for new opportunities to collaborate and learn. Whether you have a
                question or just want to say hi, my inbox is always open.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                    <Mail className="text-on-secondary-container size-5" />
                  </div>
                  <span className="text-base text-white">abhishekpandey9267@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                    <MapPin className="text-on-secondary-container size-5" />
                  </div>
                  <span className="text-base text-white">New Delhi, India</span>
                </div>
              </div>
            </div>

            <form
              className="glass-card p-8 rounded-2xl space-y-4 shadow-xl"
              onSubmit={handleSubmit}
            >
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-widest text-on-tertiary-container">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-white border border-outline-variant rounded-xl p-3 text-on-surface focus:ring-2 focus:ring-secondary-container outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-widest text-on-tertiary-container">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className="w-full bg-white border border-outline-variant rounded-xl p-3 text-on-surface focus:ring-2 focus:ring-secondary-container outline-none transition-all"
                />
              </div>
             

             
              <div className="space-y-2">
                <label>Message</label>

                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white border border-outline-variant rounded-xl p-3 text-on-surface focus:ring-2 focus:ring-secondary-container outline-none transition-all"
                />
              </div>

              {status && (
                <p className="text-center text-white font-medium">
                  {status}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-secondary-container text-on-secondary-container py-4 rounded-xl text-sm font-semibold uppercase tracking-widest hover:brightness-105 active:scale-95 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
        `</main>

      {/* Footer */}
      <footer className="w-full py-8 mt-[120px] border-t border-surface-variant bg-surface-container-lowest">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-[1280px] mx-auto gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-[var(--font-display)] font-semibold text-2xl text-primary">
              PORTFOLIO
            </span>
            <span className="text-sm text-on-surface-variant">
              Building scalable web apps, one project at a time.
            </span>
            <span className="text-xs text-on-surface-variant">
              © 2026 Abhishek Pandey. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.linkedin.com/in/abhishek-pandey-03a4b4304" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant hover:text-primary hover:underline transition-all">
              LinkedIn
            </a>
            <a href="https://github.com/pandey-9267" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant hover:text-primary hover:underline transition-all">
              GitHub
            </a>
            <a href="https://leetcode.com/u/pandey-9267/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant hover:text-primary hover:underline transition-all">
              LeetCode
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;