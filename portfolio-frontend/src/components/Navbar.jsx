import { useRef, useState } from "react";
import { motion } from "framer-motion";

import useScroll from "../hooks/useScroll";
import useClickOutside from "../hooks/useClickOutside";

import { UserCircle } from "lucide-react";
import navItems from "../data/navItems";

function Navbar() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const isScrolled = useScroll();

  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
  setIsMenuOpen(false);
});





    return (
    <>
     {/* Top App Bar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg py-2 border-b border-gray-200"
          : "bg-surface/80 backdrop-blur-md py-4 border-b border-surface-variant"
          }`}
      >
        <div className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 w-full max-w-[1280px] mx-auto gap-2">
          <motion.span
            animate={{
              scale: isScrolled ? 0.9 : 1,
            }}
            transition={{
              duration: 0.3,
            }}
            className="font-[var(--font-display)] text-lg md:text-2xl font-bold tracking-tight text-primary shrink-0"
          >
            PORTFOLIO
          </motion.span>
          <nav className="flex gap-1 md:gap-6 items-center overflow-x-auto">
            {navItems.map(({ id, label, Icon }, i) => (
              <a
                key={id}
                href={`#${id}`}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg font-semibold text-xs md:text-sm tracking-widest uppercase hover:text-secondary transition-colors ${i === 0 ? "text-primary font-bold" : "text-on-surface-variant"
                  }`}
              >
                <Icon className="size-4" />
                <span className="hidden md:inline">{label}</span>
              </a>
            ))}
          </nav>
          <div className="relative group shrink-0" ref={menuRef}>

            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-all"
              aria-label="Account"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setIsMenuOpen(!isMenuOpen);
                }
              }}
            >
              <UserCircle className="text-primary size-8 hover:scale-110 transition-all" />
            </button>

            <div
              className={`absolute right-0 mt-2 w-64 bg-white shadow-xl rounded-xl border border-gray-200 transition-all duration-300 z-50

  ${isMenuOpen
                  ? "opacity-100 visible"
                  : "opacity-0 invisible md:opacity-0 md:invisible"
                }

  md:group-hover:opacity-100
  md:group-hover:visible`}
            >
              <a
                href="/Abhishek_Pandey_Resume.docx"
                download
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium hover:bg-gray-100"
              >
                Download Resume
              </a>

              <a
                href="https://www.linkedin.com/in/abhishek-pandey-03a4b4304"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium hover:bg-gray-100"
              >
                LinkedIn
              </a>

              <a
                href="https://leetcode.com/u/pandey-9267/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium hover:bg-gray-100"
              >
                LeetCode
              </a>

              <a
                href="https://github.com/pandey-9267"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium hover:bg-gray-100 rounded-b-xl"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}

export default Navbar;