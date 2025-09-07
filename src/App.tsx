import React from "react";
import Navbar from "./Navbar";
import Base from "./Base";
import HeroSection from "./HeroSection";
import { BackgroundBeams } from "./components/ui/background-beams";
import { Toaster } from "sonner";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

const App = () => {
  // Removed under construction toast for more professional appearance
  return (
    <>
      <Toaster theme="dark" richColors={true} />
      <BackgroundBeams className="pointer-events-none z-0 opacity-80"></BackgroundBeams>
      <Base>
        <Navbar></Navbar>
            

        <HeroSection></HeroSection>

        <Experience></Experience>
        
        <Projects></Projects>
        <Contact></Contact>
      </Base>
    </>
    // </div>
  );
};

export default App;
