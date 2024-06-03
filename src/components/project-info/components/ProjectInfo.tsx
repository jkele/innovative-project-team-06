import { People } from "@/icons/People";
import { ProjectInfoProperties } from "../types/project-info";
import { Location } from "@/icons/Location";
import Link from "next/link";
import { Back } from "@/icons/Back";

export const ProjectInfo = (properties: ProjectInfoProperties) => {
  const { project } = properties;

  return (
    <div className="bg-white flex flex-col gap-4 py-4 text-black px-4 lg:px-[200px] shadow-lg">
      <div className="w-[60px] h-[50px]">
        <Link href={"/dashboard"}>
          <Back />
        </Link>
      </div>
      <p className="text-center font-semibold text-2xl lg:text-3xl">
        {project?.title}
      </p>
      <p className="mt-10 lg:text-xl">{project?.description}</p>
      <div className="flex flex-row justify-between px-6 lg:px-60">
        <div className="flex flex-row gap-2 mt-5">
          <Location className="self-center" />
          <p className="self-center font-semibold">{project?.street}</p>
        </div>
        <div className="flex flex-row gap-2 mt-5">
          <People className="self-center" />
          <p className="self-center font-semibold">John Doe</p>
        </div>
      </div>
    </div>
  );
};
