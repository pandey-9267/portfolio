import { motion } from "framer-motion";
import codingProfiles from "../data/codingProfiles";

import {
  containerVariants,
  itemVariants,
} from "../utils/animations";

function CodingProfiles({ profileStats }) {
  const {
    github,
    leetcode,
    loading,
    error,
  } = profileStats;

  return (
    <section className="mt-[80px] px-6 max-w-[1280px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-[var(--font-display)] font-bold text-[32px] md:text-[40px] text-primary">
          Coding Profiles
        </h2>

        <p className="text-base text-on-surface-variant">
          Platforms where I practice, learn, and build.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {codingProfiles.map((profile) => {
          const Icon = profile.icon;

          return (
            <motion.a
              key={profile.title}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-lg transition-all"
            >
              <div className="mb-3">
                <Icon size={40} color={profile.color} />
              </div>

              <h3 className="text-xl font-bold">
                {profile.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {profile.title === "GitHub"
                  ? loading
                    ? "Loading..."
                    : error
                    ? "Unable to load GitHub stats."
                    : `${github?.repos ?? 0}+ public repositories • ${github?.followers ?? 0} followers`
                  : profile.title === "LeetCode"
                  ? loading
                    ? "Loading..."
                    : error
                    ? "Unable to load LeetCode stats."
                    : `${leetcode?.totalSolved ?? 0}+ problems solved`
                  : profile.description}
              </p>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
}

export default CodingProfiles;