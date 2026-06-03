import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import "./App.css";

import youtubeImg from "./assets/youtube.png";
import netflixImg from "./assets/netflix.png";
import taskmanagerImg from "./assets/task-manager.png";



import {
  UserCircle,
  Home,
  User,
  Briefcase,
  Mail,
  ArrowRight,
  Palette,
  Code,
  MonitorSmartphone,
  Gauge,
  MapPin,
} from "lucide-react";



const ABOUT_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuANI9rAAjGnSTxjteoKrYbneU0T8Sa25woK_RWYuTh5rnid0y7wSuDvvIr3l0HpxMVwdVd4nJLVZ8CdOaF-SV1OYrFTQsXQC3fVA81IFGhLiJgOXwWJ7_PIpTnw-lMBzPci3OvmapgrEGqPABlmXNMAVRqQTtFgvpiE1RoOlx-4tPtasC2iP8YzSVqzXlScK08HlOBuQecICa0EJcTC6xMUzS7WMzgXbu-HeeoOSJe4GSvF5bDyQsbS4G5ay5uyXl2cvfuUdtGKcdgH";
const PROJECT1_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAGYoNP6EujoTyvy-jM7z5Z6GjhmN4eC8g-qxNVA6qNm-gd0AXE25eQ-irHT4fgkqx2mAqqUqhI36zfbbnGCfmXv8TvCtw2e71GVZlJdd4kBsBdgSGoNlXBf-DgNAxkemtLf6RWFAAABa_sRXtmxy-by1UR9a6PkXhVcKayqg2hOatIg8PlC8R5PTtHS7IrwtBVjqfO1QoKxOi0cQUYKJtr7eixunxUkbHvb2nec-hxjujsXGWm7PYCn1i3c1x0YRf47kN1BvejjODv";




function App() {
  const navItems = [
    { id: "home", label: "Home", Icon: Home },
    { id: "about", label: "About", Icon: User },
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
                <Icon className="size-4 md:hidden" />
                <span className="hidden md:inline">{label}</span>
                <span className="md:hidden">{label}</span>
              </a>
            ))}
          </nav>
          <div className="relative group shrink-0">
            <button
              className="p-2 active:scale-95 transition"
              aria-label="Account"
            >
              <UserCircle className="text-primary" />
            </button>

            <div className="absolute right-0 mt-2 w-52 bg-white shadow-xl rounded-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

              <a
                href="/resume.pdf"
                download
                className="block px-4 py-3 text-sm font-medium hover:bg-gray-100 rounded-t-xl"
              >
                Download Resume
              </a>



            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 overflow-x-hidden">
        {/* Hero */}
        <section
          id="home"
          className="px-6 max-w-[1280px] mx-auto min-h-[707px] flex flex-col justify-center items-start gap-8 py-8"
        >
         <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 w-full">
            <div className="space-y-4 max-w-2xl">
              <p className="text-sm font-semibold text-secondary uppercase tracking-widest">
                Available for Hire
              </p>
              <h1 className="font-[var(--font-display)] font-extrabold text-[52px] md:text-[64px] leading-[1.1] tracking-tight text-primary">
                Hi, I'm Abhishek pandey. <br />
                <span className="text-on-primary-container">Crafting digital experiences.</span>
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                A passionate beginner designer and developer focused on building clean, user-centric,
                and accessible interfaces. Currently exploring the intersection of creative code and
                modern minimalism.
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
                  className="border border-outline text-primary px-8 py-4 rounded-xl text-sm font-semibold tracking-widest uppercase hover:bg-surface-variant transition-all"
                >
                  Let's Connect
                </a>
              </div>
          </div>

<div className="flex justify-center md:justify-end">

{/* add photo here */}

  {/* <img
    src="/profile.png"
    alt="Abhishek Pandey"className="w-[260px] h-[320px] object-cover rounded-3xl shadow-xl border-4 border-white"
    
  /> */}

  
</div>

</div>
        </section>

        {/* About */}
        <section id="about" className="mt-[120px] px-6 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 rounded-xl overflow-hidden shadow-md">
              <img src={ABOUT_IMG} alt="Designer working in a bright studio" className="w-full aspect-square object-cover" />
            </div>
            <div className="md:col-span-7 space-y-6">
              <h2 className="font-[var(--font-display)] font-bold text-[32px] md:text-[40px] leading-tight tracking-tight text-primary">
                Warm Introduction
              </h2>
              <p className="text-lg text-on-surface-variant">
                I’m a curious and passionate MERN Stack Developer currently pursuing B.Tech in Computer Science Engineering. My journey into tech started with a simple interest in how websites and apps actually work behind the scenes, and over time, that curiosity turned into a genuine passion for web development.
              </p>

              <p className="text-lg text-on-surface-variant">
                Based in Delhi, I’ve been learning and building projects using React.js, Node.js, Express.js, and MongoDB. I enjoy creating clean, responsive, and user-friendly applications that solve real problems and improve user experience.
              </p>

              <p className="text-lg text-on-surface-variant">
                As a fresher, I’m constantly exploring new technologies, improving my skills, and challenging myself with practical projects. I’m currently looking for opportunities where I can learn, grow, and contribute as a developer while gaining real industry experience.
              </p>
              <div className="flex gap-8 pt-4">
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
                    100%
                  </p>
                  <p className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant mt-1">
                    Dedication
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-[120px] px-6 max-w-[1280px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-[var(--font-display)] font-bold text-[32px] md:text-[40px] tracking-tight text-primary">
              Core Skills
            </h2>
            <p className="text-base text-on-surface-variant max-w-xl mx-auto">
              A snapshot of my current toolkit as I grow as a professional.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { Icon: Palette, title: "Frontend", desc: "React.js, HTML, CSS, Tailwind" },

              { Icon: Code, title: "Development", desc: "JavaScript, Node.js, Express.js" },

              { Icon: MonitorSmartphone, title: "Responsive", desc: "Mobile-First, Responsive UI" },

              { Icon: Gauge, title: "Database", desc: "MongoDB, REST APIs, CRUD" },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-surface-container-low p-6 rounded-xl shadow-sm hover:-translate-y-1 transition-all"
              >
                <Icon className="text-secondary size-9 mb-4" strokeWidth={1.5} />
                <h3 className="font-[var(--font-display)] font-semibold text-2xl text-primary mb-2">
                  {title}
                </h3>
                <p className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-[120px] px-6 max-w-[1280px] mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="font-[var(--font-display)] font-bold text-[32px] md:text-[40px] tracking-tight text-primary">
                Selected Projects
              </h2>

              <p className="text-base text-on-surface-variant">
                Realizing ideas through design and code.
              </p>
            </div>
          </div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2500,
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
                img: youtubeImg,
                tags: ["HTML", "CSS"],
                title: "YouTube Clone",
                desc: "A responsive YouTube homepage clone built using pure HTML and CSS with modern UI styling and responsive layout.",
                cta: "View Project",
                link: "https://clone-y0utube.netlify.app/",
              },

              {
                img: netflixImg,
                tags: ["HTML", "CSS"],
                title: "Netflix Clone",
                desc: "A responsive Netflix homepage clone built using pure HTML and CSS with modern UI styling and responsive layout.",
                cta: "View Project",
                link: "https://clone-netfllx.netlify.app/",
              },

              {
                img: taskmanagerImg,
                tags: ["MERN", "Full Stack"],
                title: "TaskFlow",
                desc: "A full-stack task management web application built using MongoDB, Express.js, React.js, and Node.js with task creation, updating, and authentication features.",
                cta: "View Project",
                link: "https://task-manager-app-abhishek.vercel.app/",
              },

              {
                img: PROJECT1_IMG,
                tags: ["React", "Frontend"],
                title: "Weather App",
                desc: "A responsive weather application built using React.js with modern UI and real-time weather updates.",
                cta: "View Project",
                link: "https://your-weather-app.vercel.app/",
              },
            ].map((p) => (
              <SwiperSlide key={p.title}>
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

                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary font-semibold uppercase tracking-widest hover:underline mt-auto"
                    >
                      {p.cta}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mt-[120px] mx-6 max-w-[1280px] md:mx-auto py-8 bg-primary-container rounded-3xl text-on-primary"
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
              onSubmit={(e) => e.preventDefault()}
            >
              {[
                { label: "Full Name", type: "text", placeholder: "Your name" },
                { label: "Email Address", type: "email", placeholder: "email@example.com" },
              ].map((f) => (
                <div className="space-y-2" key={f.label}>
                  <label className="text-sm font-semibold uppercase tracking-widest text-on-tertiary-container">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full bg-white border border-outline-variant rounded-xl p-3 text-on-surface focus:ring-2 focus:ring-secondary-container outline-none transition-all"
                  />
                </div>
              ))}
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-widest text-on-tertiary-container">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white border border-outline-variant rounded-xl p-3 text-on-surface focus:ring-2 focus:ring-secondary-container outline-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-secondary-container text-on-secondary-container py-4 rounded-xl text-sm font-semibold uppercase tracking-widest hover:brightness-105 active:scale-95 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 mt-[120px] border-t border-surface-variant bg-surface-container-lowest">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-[1280px] mx-auto gap-4">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-[var(--font-display)] font-semibold text-2xl text-primary">
              PORTFOLIO
            </span>
            <span className="text-sm text-on-surface-variant">
              © 2026 Portfolio. All rights reserved.
            </span>
          </div>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/abhishekpandey-03a4b4304/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant hover:text-primary hover:underline transition-all"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/pandey-9267"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant hover:text-primary hover:underline transition-all"
            >
              GitHub
            </a>

            <a
              href="https://leetcode.com/u/pandey-9267/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant hover:text-primary hover:underline transition-all"
            >
              LeetCode
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;