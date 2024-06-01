import { People } from "@/icons/People";
import { ProjectInfoProperties } from "../types/project-info";
import { Location } from "@/icons/Location";

export const ProjectInfo = (properties: ProjectInfoProperties) => {
  const { project } = properties;

  return (
    <div className="bg-white flex flex-col gap-4 py-10 text-black px-4 shadow-lg">
      <p className="text-center font-semibold text-2xl">{project?.title}</p>
      <p>{project?.description}</p>
      <div className="flex flex-row justify-between px-6">
        <div className="flex flex-row gap-2 mt-5">
          <Location className="self-center" />
          <p className="self-center">{project?.street}</p>
        </div>
        <div className="flex flex-row gap-2 mt-5">
          <People className="self-center" />
          <p className="self-center">{project?.street}</p>
        </div>
      </div>
    </div>
  );
};
