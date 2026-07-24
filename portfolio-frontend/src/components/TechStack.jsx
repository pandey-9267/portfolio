import { motion } from "framer-motion";
import { techCategories } from "../data/techStack";

import {
  containerVariants,
  itemVariants,
} from "../utils/animations";

function TechStack() {
  return (
    <section className="mt-[80px] px-6 max-w-[1280px] mx-auto">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="font-[var(--font-display)] font-bold text-[32px] md:text-[40px] text-primary">
          Tech Stack
        </h2>

        <p className="text-base text-on-surface-variant mt-2">
          Technologies I use to build modern, scalable applications.
        </p>
      </div>

      {/* Category Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {techCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl hover:border-blue-200 transition-all duration-300 p-5"
          >
            {/* Category Title */}
            <div className="flex items-center gap-4 mb-5">
              {(() => {
                const CategoryIcon = category.icon;

                return (
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-300">
                    <CategoryIcon
                      size={22}
                      className="text-blue-600"
                    />
                  </div>
                );
              })()}

              <h3 className="text-xl font-bold tracking-tight text-gray-900">
                {category.title}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all duration-300"
                  >
                    <Icon
                      size={18}
                      color={skill.color}
                      className="transition-transform duration-300 group-hover:rotate-6"
                    />
                    <span className="text-sm font-semibold text-gray-700">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default TechStack;