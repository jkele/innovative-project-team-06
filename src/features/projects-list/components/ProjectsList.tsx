"use client";
import { ProjectCard } from "@/components/project-card";
import { ProjectsListProperties } from "../types/projects-list";
import { useRouter } from "next/navigation";

export const ProjectsList = (properties: ProjectsListProperties) => {
  const { projects } = properties;

  const router = useRouter();

  const unfinishedProjects = projects.filter((project) => !project.finished);

  const finishedProjects = projects.filter((project) => project.finished);

  const handleAddProjectClick = () => {
    router.push("/add-project");
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-[#5F8DAA] text-center lg:text-3xl font-semibold mt-10">
        Projects
      </p>
      <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap mt-10 lg:justify-center">
        {unfinishedProjects.map((project) => (
          <ProjectCard project={project} key={project.projectId} />
        ))}
      </div>
      <button
        className="lg:mt-16 mt-4 bg-white uppercase font-semibold shadow-lg py-4 hover:bg-[#054166]/5"
        onClick={handleAddProjectClick}
      >
        Add project
      </button>
      <p className="text-[#5F8DAA] text-center lg:text-3xl font-semibold mt-10">
        Finished projects
      </p>
      <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap mt-10 lg:justify-center">
        {finishedProjects.map((project) => (
          <ProjectCard project={project} key={project.projectId} />
        ))}
      </div>
    </div>
  );
};
