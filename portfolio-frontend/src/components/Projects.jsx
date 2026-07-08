import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
        {projects.map((p) => (
          <SwiperSlide key={p.title} className="h-full">
            <motion.div
              className="group rounded-xl overflow-hidden shadow-sm bg-surface-container-lowest border border-outline-variant hover:shadow-xl transition-all h-full flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
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
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}

export default Projects;