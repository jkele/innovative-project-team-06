"use client";

import { cn } from "@/utils/cn";
import { ProjectCardProperties } from "../types/project-card";
import { useRouter } from "next/navigation";

export const ProjectCard = (properties: ProjectCardProperties) => {
  const { project } = properties;

  const router = useRouter();

  const shortenDescriptionText = (description: string) => {
    return description.substring(0, 120).concat("...");
  };

  const handleProjectClick = () => {
    router.push(`/project/${project.projectId}`);
  };

  return (
    <div
      className="flex flex-row shadow-lg lg:h-[600px] lg:w-[600px] hover:shadow-xl cursor-pointer"
      onClick={handleProjectClick}
    >
      <div
        className={cn(
          "flex flex-col px-2 py-3 gap-1 lg:px-[54px] w-full hover:bg-black/5",
          project.finished ? "bg-[#F3FAFF]" : "bg-white"
        )}
      >
        <p className="font-medium lg:text-[30px] lg:mt-[40px]">
          {project.title}
        </p>
        <p className="text-[#054166] pl-4 lg:pl-0 text-[14px] lg:mt-10 lg:text-[24px]">
          {shortenDescriptionText(project.description)}
        </p>
      </div>
    </div>
  );
};
