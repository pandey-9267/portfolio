import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

function About({ profileStats }) {
  const {
    github,
    loading,
    error,
  } = profileStats;

  return (
    <motion.section
      id="about"
      className="mt-[80px] px-6 max-w-[1280px] mx-auto"
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5 rounded-xl overflow-hidden shadow-md">
          <img
            src={profileImg}
            alt="Abhishek Pandey"
            loading="lazy"
            decoding="async"
            className="w-full aspect-square object-cover"
          />
        </div>

        <div className="md:col-span-7 space-y-6">
          <h2 className="font-[var(--font-display)] font-bold text-[32px] md:text-[40px] leading-tight tracking-tight text-primary">
            About Me
          </h2>

          <p className="text-lg text-on-surface-variant">
            I'm a Full Stack Developer and B.Tech Computer Science student
            passionate about building modern, scalable web applications using
            the MERN Stack. I also strengthen my problem-solving skills through
            Java and Data Structures & Algorithms.
          </p>

          <p className="text-lg text-on-surface-variant">
            Currently, I'm working as a Full Stack Developer Intern at Talking
            Crooks, where I contribute to real-world web applications using
            React.js, Node.js, Express.js, and MongoDB.
          </p>

          <p className="text-lg text-on-surface-variant">
            I'm continuously learning new technologies, solving DSA problems in
            Java, and looking for opportunities to build impactful software
            while growing as a Software Engineer.
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <div>
              <p className="font-[var(--font-display)] font-extrabold text-[40px] text-secondary leading-none">
                10+
              </p>
              <p className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant mt-1">
                Projects Built
              </p>
            </div>

            <div>
              <p className="font-[var(--font-display)] font-extrabold text-[40px] text-secondary leading-none">
                2 mo.
              </p>
              <p className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant mt-1">
                Internship Experience
              </p>
            </div>

            <div>
              <h3 className="font-[var(--font-display)] font-extrabold text-[40px] text-secondary leading-none">
                {loading
                  ? "..."
                  : error
                    ? "--"
                    : `${github?.repos ?? 0}+`}
              </h3>
              <p className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant mt-1">
                GitHub Repos
              </p>
            </div>

            <div>
              <h3 className="font-[var(--font-display)] font-extrabold text-[40px] text-secondary leading-none">
                2+
              </h3>

              <p className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant mt-1">
                DSA Problems Solved
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;