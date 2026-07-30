import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import profileImg from "../assets/profile.png";
import heroContent from "../data/heroContent";

function Hero() {
  const { badge, greeting, role, headline, imageAlt, availabilityBadge, ctas } = heroContent;

  return (
    <>
      <section
        id="home"
        className="px-6 max-w-[1280px] mx-auto min-h-[calc(100vh-112px)] flex flex-col justify-center items-start gap-8 py-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] items-center gap-2 w-full">
          <div className="space-y-4 max-w-2xl">
            <p className="text-sm font-semibold text-secondary uppercase tracking-widest">
              {badge}
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
              {greeting}
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
              {role}
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
              {headline}
            </motion.h2>
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
              {ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className={
                    cta.variant === "primary"
                      ? "bg-primary text-on-primary px-8 py-4 rounded-xl text-sm font-semibold tracking-widest uppercase hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                      : "border-2 border-primary text-primary px-8 py-4 rounded-xl text-sm font-semibold tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all"
                  }
                >
                  {cta.label}
                  {cta.variant === "primary" && <ArrowRight className="size-4" />}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              y: [0, -6, 0],
            }}
            transition={{
              opacity: {
                delay: 1.2,
                duration: 0.8,
              },
              x: {
                delay: 1.2,
                duration: 0.8,
              },
              scale: {
                delay: 1.2,
                duration: 0.8,
              },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="flex justify-center md:justify-end"
           >
            <div className="relative md:-translate-y-6 md:translate-x-4">

              {/* Background Card */}
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-blue-50 to-transparent rotate-2"></div>

              {/* Profile Card */}
              <div className="relative bg-white p-3 rounded-[36px] border border-gray-200 shadow-[0_35px_80px_rgba(0,0,0,0.12)]">

                {/* Badge */}
                <div className="absolute -top-4 -right-4 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>

                  <span className="text-xs font-semibold whitespace-nowrap">
                    {availabilityBadge}
                  </span>
                </div>

                <img
                  src={profileImg}
                  alt={imageAlt}
                  fetchPriority="high"
                  decoding="async"
                  className="w-[280px] sm:w-[340px] md:w-[350px] rounded-[28px] object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;

