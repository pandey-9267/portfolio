import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.section
      id="experience"
      className="mt-[80px] px-6 max-w-[1280px] mx-auto"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-12">
        <h2 className="font-[var(--font-display)] font-bold text-[32px] md:text-[40px] tracking-tight text-primary">
          Experience
        </h2>

        <p className="text-base text-on-surface-variant">
          Professional experience and industry exposure.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -6 }}
        className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
      >
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
          <li>
            • Developed responsive web interfaces using React.js and Tailwind
            CSS.
          </li>

          <li>
            • Built reusable frontend components for scalable applications.
          </li>

          <li>
            • Collaborated with team members using Git and GitHub workflows.
          </li>

          <li>
            • Improved website performance, UI consistency, and user
            experience.
          </li>

          <li>
            • Participated in real-world development, testing, and deployment
            processes.
          </li>
        </ul>
      </motion.div>
    </motion.section>
  );
}

export default Experience;