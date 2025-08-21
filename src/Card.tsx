import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Calendar } from "lucide-react";
import StackIcon from "tech-stack-icons";

import Carousel from "./components/ui/Carousel";

export type TechStack = {
  name: string;
  icon?: string;
};

export type Project = {
  title: string;
  description: string;
  image?: string[];
  techStack: TechStack[];
  codeLink: string;
  demoLink?: string;
  video?: string;
};

const ProjectCard = (project: Project) => {
  return (
    <Card className="group relative flex flex-col w-full border-zinc-200 dark:border-zinc-700 overflow-hidden p-0 transition-all duration-300 hover:shadow-2xl hover:shadow-zinc-200/20 dark:hover:shadow-zinc-800/20 hover:-translate-y-2 bg-white dark:bg-zinc-900">
      {/* Image Container with Overlay */}
      {project.image && (
        <div className="relative overflow-hidden">
          <Carousel
            items={project.image.map((img) => ({ image: img }))}
            baseWidth={400}
            autoplay={true}
            autoplayDelay={4000}
            pauseOnHover={true}
            loop={true}
            // round={true}
          ></Carousel>
          <div className="absolute pointer-events-none inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      {project.video && (
        <div className="relative overflow-hidden">
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto w-full object-cover object-top" // needed because random black line at bottom of video
          />
          <div className="absolute pointer-events-none inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-xl font-bold text-zinc-00 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text ">
              {project.title}
            </CardTitle>
          </div>
        </div>
        <CardDescription className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        {/* Tech Stack Badges */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {}
            {project.techStack.map((tech) => (
              <Badge
                key={tech.name}
                variant="outline"
                className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-200 animate-in fade-in slide-in-from-bottom-2"
              >
                {tech.icon && (
                  <StackIcon
                    name={tech.icon}
                    className="inline-block ml-1 w-4 h-4"
                  />
                )}
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pb-4 flex gap-3">
        {project.codeLink && (
          <Button asChild>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group/btn bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4 mr-2 transition-transform group-hover/btn:rotate-12" />
              View Code
            </a>
          </Button>
        )}
        {project.demoLink && (
          <Button asChild variant="outline">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group/btn border-zinc-300 dark:border-zinc-600 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-200 hover:shadow-lg bg-transparent flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover/btn:-rotate-12" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
