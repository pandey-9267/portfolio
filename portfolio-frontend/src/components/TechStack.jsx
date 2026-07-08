import { motion } from "framer-motion";

import {
  coreTechStack,
  tools,
} from "../data/techStack";

import {
  containerVariants,
  itemVariants,
} from "../utils/animations";

function TechStack() {
  return (
    <section className="mt-[80px] px-6 max-w-[1280px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-[var(--font-display)] font-bold text-[32px] md:text-[40px] text-primary">
          Tech Stack
        </h2>

        <p className="text-base text-on-surface-variant">
          Technologies I use to build modern web applications.
        </p>
      </div>

      {/* Core Technologies */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {coreTechStack.map((tech) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center gap-3 hover:-translate-y-2 transition-all"
            >
              <Icon size={40} color={tech.color} />

              <span className="font-semibold text-primary">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Tools */}
      <div className="mt-12 text-center mb-6">
        <h3 className="font-semibold text-lg text-on-surface-variant uppercase tracking-widest">
          Tools & Platforms
        </h3>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center gap-3 hover:-translate-y-2 transition-all"
            >
              <Icon size={40} color={tool.color} />

              <span className="font-semibold text-primary">
                {tool.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default TechStack;