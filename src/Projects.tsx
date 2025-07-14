import React from "react";
import ProjectCard from "./Card";
import { type Project } from "./Card";
import { Link } from "react-router";

const projectData: Project[] = [
  {
    title: "Real-Time Data Processing System",
    description:
      " a high-performance system responsible for processing and analyzing high-throughput data in real time from diverse sources, with minimal latency. The system is capable of handling large volumes of real-time data streams, thanks to a set of decoupled and distributed components, each of which can be scaled independently.",
    image: "",
    techStack: ["Kafka", "Celery", "Redis", "Python", "FastAPI", "Docker", "Elasticsearch"],
    codeLink: "https://github.com/jounaidayoub/finance",
    demoLink: "https://example.com/",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    image: "",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    codeLink: "",
    demoLink: "https://example.com/",
  },
  {
    title: "Football Manager",
    description:
      "A platform to create and manage local football tournaments, teams, and players. Users can view teams, matches, stats, live scores, and admins can manage matches.",
    image: "",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    codeLink: "",
    demoLink: "https://example.com/",
  },
  {
    title: "Recipe App",
    description:
      "A recipe app that allows users to search for recipes, save their favorites, filter by tags. It features a user-friendly interface and a wide variety of recipes.",
    image: "",
    techStack: ["React", "Javascript", "CSS" , "NestJS"],
    codeLink: "",
    demoLink: "https://example.com/",
  },
];

const Projects = () => {
  return (
    <>
      <div
        id="Projects"
        className="flex min-h-0 w-full items-center justify-center flex-col gap-4 "
      >
        <h1 className="text-3xl font-bold ">Projects</h1>
        <p className=" text-lg  dark:text-zinc-300 text-zinc-750 max-w-2xl text-center pb-10">
          Here are some of the projects I have worked on recently. You can find more details and code on my GitHub profile.
        </p>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3 w-full h-[100px]:">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
