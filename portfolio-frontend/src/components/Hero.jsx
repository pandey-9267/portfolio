import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import profileImg from "../assets/profile.png";

function Hero() {
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="px-6 max-w-[1280px] mx-auto min-h-[calc(100vh-112px)] flex flex-col justify-center items-start gap-8 py-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 w-full">
          <div className="space-y-4 max-w-2xl">
            <p className="text-sm font-semibold text-secondary uppercase tracking-widest">
              Available for Hire
            </p>
            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="font-[var(--font-display)] font-extrabold text-[40px] sm:text-[52px] md:text-[64px] leading-[1.1] tracking-tight text-primary"
            >
              Hi, I'm Abhishek Pandey.
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="text-xl md:text-2xl font-semibold text-secondary"
            >
              MERN Stack Developer | React Developer
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="font-[var(--font-display)] font-bold text-[28px] sm:text-[40px] md:text-[56px] leading-tight text-on-primary-container"
            >
              Turning ideas into fast, scalable MERN applications.
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="text-lg text-on-surface-variant leading-relaxed"
            >
              MERN Stack Developer and B.Tech CSE student passionate about building modern web applications using React.js, Node.js, Express.js, and MongoDB.

              <br />
              <br />

              Currently seeking internship opportunities to apply my skills, contribute to real-world projects, and grow as a software developer.
            </motion.p>
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="flex flex-wrap gap-4 pt-6"
            >
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
            </motion.div>
          </div>

          {/* add photo here */}

          {/* for moving the photo a little bit up and right and adding a white border around it and also adding a shadow to it */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              delay: 1.4,
              duration: 0.8,
              ease: "easeOut",
            }}
            className="flex justify-center md:justify-end"
          >
            <img
              src={profileImg}
              alt="Abhishek Pandey"
              fetchPriority="high"
              decoding="async"
              className="w-[220px] sm:w-[260px] md:w-[300px] h-auto object-cover rounded-3xl shadow-xl border-4 border-white md:-translate-y-12 md:translate-x-10"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;

