import React from "react";
import ProjectCard from "./Card";
import { type Project } from "./Card";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
const projectData: Project[] = [
  {
    title: "Real-Time Data Processing System",
    description:
      " a high-performance system responsible for processing and analyzing high-throughput data in real time from diverse sources, with minimal latency. The system is capable of handling large volumes of real-time data streams, thanks to a set of decoupled and distributed components, each of which can be scaled independently.",
    image:["images/finance/image.png","images/finance/image1.png"],
    techStack: ["Kafka", "Celery", "Redis", "Python", "FastAPI", "Docker", "Elasticsearch"],
    codeLink: "https://github.com/jounaidayoub/finance",
    // demoLink: "https://example.com/",
  },
  {
    title: "Football Manager",
    description:
    "A platform to create and manage local football tournaments, teams, and players. Users can view teams, matches, stats, live scores, and admins can manage matches.",
    image: ["images/screens/search.png","images/screens/comming.png","images/screens/team.png","images/screens/profile.png"],
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    codeLink: "https://github.com/jounaidayoub/foot_match_track",
    // demoLink: "https://example.com/",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills. (the one u browsing right now hhh) ",
    image: [""],
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    codeLink: "https://github.com/jounaidayoub/ayooub.me",
    demoLink: "https://ayooub.me/",
  },
  {
    title: "Recipe App",
    description:
      "A recipe app that allows users to search for recipes, save their favorites, filter by tags. It features a user-friendly interface and a wide variety of recipes.",
    image: ["images/recipes/homepage.png", "images/recipes/form.png","images/recipes/info.png"],
    techStack: ["React", "Javascript", "CSS" , "NestJS"],
    codeLink: "https://github.com/jounaidayoub/recipes",
    // demoLink: "https://example.com/",
  },
];

const Projects = () => {
  return (
    <>
      <div
        id="Projects"
        className="flex min-h-0 w-full items-center justify-center flex-col gap-4 mx-5  "
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

      {/* for more projects link to github */}
      <div className="m-13">
        <Button asChild>
            <a
              href="https://github.com/jounaidayoub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group/btn bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2"
            >
              For more projects, visit my GitHub
              <Github className="w-4 h-4 mr-2 transition-transform group-hover/btn:rotate-12" />
            </a>
          </Button>
      </div>
      </div>
    </>
  );
};

export default Projects;
