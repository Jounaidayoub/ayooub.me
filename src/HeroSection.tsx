import React from "react";
import Underline from "./Underline";
import RotatingText from "./RotatingText/RotatingText";
interface Props {
  children?: React.ReactNode;
}
const HeroSection = ({ children }: Props) => {
  return (
    <>
      <main className="  flex sm:flex-row flex-col  p-5 items-center justify-center gap-20 h-[80vh] ">
        <div className="max-w-120">
          <h1 className="text-3xl font-bold pb-15 ">
            <RotatingText
              texts={["Salam", "Hello", "Hola", "Bonjour", "Ciao"]}
              mainClassName="inline-block"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={7000}
            />{" "}
            , I'm Ayoub ! 👋
          </h1>
          <p className="text-lg font-serif dark:text-zinc-300 text-zinc-750  max-w-2xl">
            I am a software engineering student. I do{" "}
            <Underline>fullstack development</Underline> and I am kind of
            interested more toward backend stuff . I also enjoy{" "}
            <Underline>low-level programming</Underline> . I love tinkering with
            computers and tech, from Linux and scripting to{" "}
            <Underline>LLMs</Underline> and their applications.
          </p>
        </div>

        <div className="size-40 bg-amber-200">
          <center className="text-gray-600 text-sm">image</center>
          {/* this will be place holder for an image */}
        </div>
      </main>
    </>
  );
};

export default HeroSection;
