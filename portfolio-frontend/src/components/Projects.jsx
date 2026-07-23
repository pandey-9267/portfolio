import { motion } from "framer-motion";
import Marquee from "./Marquee";
import projects from "../data/projects";

function Projects() {


  return (
    <motion.section
      id="projects"
      className="mt-[80px] px-6 max-w-[1280px] mx-auto"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-12">
        <h2 className="font-[var(--font-display)] font-bold text-[32px] md:text-[40px] tracking-tight text-primary">
          Projects
        </h2>

        <p className="text-base text-on-surface-variant">
          Realizing ideas through design and code.
        </p>
      </div>
<div className="perspective-[1200px]">
      <Marquee>
  {projects.map((p) => (
    <div
      key={p.title}
   className="project-card group w-[360px] mx-4 flex-shrink-0 rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant shadow-md transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] hover:rotate-[0.5deg] hover:border-blue-500 hover:shadow-[0_25px_60px_rgba(37,99,235,0.18)]"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          decoding="async"
        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
        />
      </div>

      <div className="p-6 flex flex-col h-[320px]"> 

        <div className="flex gap-2 flex-wrap mb-3">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-surface-variant text-on-surface-variant text-[10px] uppercase font-bold rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-bold text-2xl text-primary">
          {p.title}
        </h3>

        <p className="text-base text-on-surface-variant mt-3 flex-1">
          {p.desc}
        </p>

        <div className="flex gap-3 mt-6">

        <a
  href={p.live}
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
>
  Live Demo

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>
<a
  href={p.github}
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-gray-100 hover:shadow-md active:scale-95"
>
  GitHub

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>

        </div>

      </div>
    </div>
  ))}
</Marquee>
</div>
    </motion.section>
  );
}

export default Projects;