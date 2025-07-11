import React from "react";
import Navbar from "./Navbar";
import Base from "./Base";
import HeroSection from "./HeroSection";
import { BackgroundBeams } from "./components/ui/background-beams";

const App = () => {
  return (
    <>
    <BackgroundBeams className="opacity-80 z-0"></BackgroundBeams>
    <Base>
      <Navbar></Navbar>
      
      
      <HeroSection></HeroSection>
      
      
      
    </Base>
    </>
    // </div>
  );
};

export default App;
