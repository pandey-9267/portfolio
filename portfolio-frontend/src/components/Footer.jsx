import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="w-full py-8 mt-[120px] border-t border-surface-variant bg-surface-container-lowest"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
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

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/abhishek-pandey-03a4b4304"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -2,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
            }}
            className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant hover:text-primary hover:underline transition-all"
          >
            LinkedIn
          </motion.a>

          <motion.a
            href="https://github.com/pandey-9267"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -2,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
            }}
            className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant hover:text-primary hover:underline transition-all"
          >
            GitHub
          </motion.a>

          <motion.a
            href="https://leetcode.com/u/pandey-9267/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -2,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
            }}
            className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant hover:text-primary hover:underline transition-all"
          >
            LeetCode
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;