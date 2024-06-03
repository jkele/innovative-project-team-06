import { ProjectCard } from "@/components/project-card";
import { ProjectsListProperties } from "../types/projects-list";

export const ProjectsList = (properties: ProjectsListProperties) => {
  const { projects } = properties;

  const unfinishedProjects = projects.filter((project) => !project.finished);

  const finishedProjects = projects.filter((project) => project.finished);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-[#5F8DAA] text-center lg:text-3xl font-semibold mt-10">
        Projects
      </p>
      <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap mt-10">
        {unfinishedProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
      <button className="lg:mt-16 mt-4 bg-white uppercase font-semibold shadow-lg py-4">
        Add project
      </button>
      <p className="text-[#5F8DAA] text-center lg:text-3xl font-semibold mt-10">
        Finished projects
      </p>
      <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap mt-10">
        {finishedProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};
