// Global CSS
import "./App.css";

// Layout Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-28 overflow-x-hidden">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <CodingProfiles />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;