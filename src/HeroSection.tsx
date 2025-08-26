import React from "react";
import Underline from "./Underline";
import RotatingText from "./RotatingText/RotatingText";
import { Button } from "./components/ui/button";
import { Download, Link, Github } from "lucide-react";
import { BackgroundBeams } from "./components/ui/background-beams";
interface Props {
  children?: React.ReactNode;
}
const HeroSection = ({ children }: Props) => {
  return (
    <>
      <main className="mb-30 mb-70 flex h-[80vh] flex-col items-center justify-center gap-20 p-5 pt-84 sm:mb-0 sm:flex-row sm:pt-0">
        <div className="max-w-120">
          <h1 className="pb-15 text-3xl font-bold">
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
          <p className="text-zinc-750 max-w-2xl font-serif text-lg dark:text-zinc-300">
            I am a software engineering student. I do{" "}
            <Underline>fullstack development</Underline> and I am kind of
            interested more toward backend stuff . I also enjoy{" "}
            <Underline>low-level programming</Underline> . I love tinkering with
            computers and tech, from Linux and scripting to{" "}
            <Underline>LLMs</Underline> and their applications.
          </p>
          {/* two buttons to download my resume or check my github */}
          <div className="mt-5 flex flex-row gap-2">
            <Button
              asChild
              className="group/btn group flex w-2/4 items-center justify-center gap-2 bg-zinc-900 text-white transition-all duration-200 hover:bg-zinc-800 hover:shadow-lg dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <a
                href={"/resume.pdf"}
                // download="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:scale-135 group-hover:rotate-12" />
                My Resume / CV
              </a>
            </Button>

            <Button
              variant={"outline"}
              asChild
              className="group flex w-1/4 items-center justify-center gap-2 hover:shadow-lg"
            >
              <a
                href={"https://github.com/jounaidayoub"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:scale-135 group-hover:rotate-12" />
                Github
              </a>
            </Button>
          </div>
        </div>

        <div className="w-50 rounded-full border-2 border-zinc-900 p-2 dark:border-zinc-100">
          <img
            className="aspect-square rounded-full object-cover"
            src="/images/pfp.webp"
            alt="profile picture"
          />
        </div>
      </main>
    </>
  );
};

export default HeroSection;
