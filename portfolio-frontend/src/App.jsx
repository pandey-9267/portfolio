import { useState, useEffect } from "react";

// Global CSS
import "./App.css";

// Hook
import useProfileStats from "./hooks/useProfileStats";

// Loader Component
import Loader from "./Loader";

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
  const [isLoading, setIsLoading] = useState(true);
  const profileStats = useProfileStats();

  useEffect(() => {
    // Simulate loading time (3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#0a0a0a"
      }}>
        <Loader />
      </div>
    );
  }

  return (
    <>
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-28 overflow-x-hidden">
        <Hero />
        <About profileStats={profileStats} />
        <TechStack />
        <Experience />
        <Projects />
        <CodingProfiles profileStats={profileStats} />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;