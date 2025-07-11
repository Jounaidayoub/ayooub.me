import React from "react";
import ProjectCard from "./Card";
import { type Project } from "./Card";

const projectData: Project[] = [];

const Projects = () => {
  return (
    <>
      <div
        id="projects"
        className="flex min-h-0  items-center justify-center flex-col gap-4 p-4"
      >
        <h1 className="text-2xl font-bold mb-9">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full h-[100px]:">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
