import React from "react";
import Navbar from "./Navbar";
import Base from "./Base";
import HeroSection from "./HeroSection";
import { BackgroundBeams } from "./components/ui/background-beams";
import { Toaster } from "sonner";
import { toast } from "sonner";

const App = () => {
  setTimeout(() => {
    toast.warning("The porfolio is under-construction", {
      description: "it will be ready soon (hopefully)",
    });
  }, 1000);
  // toast("Event has been created", {
  return (
    <>
      <Toaster theme="dark" richColors={true} />
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
