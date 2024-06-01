import { ProjectCard } from "@/components/project-card";
import { ProjectsListProperties } from "../types/projects-list";

export const ProjectsList = (properties: ProjectsListProperties) => {
  const { projects } = properties;

  const unfinishedProjects = projects.filter((project) => !project.finished);

  const finishedProjects = projects.filter((project) => project.finished);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-[#5F8DAA] text-center">Projects</p>
      {unfinishedProjects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
      <p className="text-[#5F8DAA] text-center mt-10">Finished projects</p>
      {finishedProjects.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};
