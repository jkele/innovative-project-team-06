import { cn } from "@/utils/cn";
import { ProjectCardProperties } from "../types/project-card";

export const ProjectCard = (properties: ProjectCardProperties) => {
  const { project } = properties;

  const shortenDescriptionText = (description: string) => {
    return description.substring(0, 120).concat("...");
  };

  return (
    <div className="flex flex-row shadow-lg">
      <div
        className={cn(
          "flex flex-col px-2 py-3 gap-1 ",
          project.finished ? "bg-[#F3FAFF]" : "bg-white"
        )}
      >
        <p className="font-medium">{project.title}</p>
        <p className="text-[#054166] pl-4">
          {shortenDescriptionText(project.description)}
        </p>
      </div>
    </div>
  );
};
