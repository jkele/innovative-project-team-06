import { Back } from "@/icons/Back";
import Link from "next/link";
import { PunctureInfoProperties } from "../types/puncture-info";

export const PunctureInfo = (properties: PunctureInfoProperties) => {
  const { project, puncture } = properties;

  return (
    <div className="bg-white flex flex-col gap-4 py-4 text-black px-4 lg:px-[200px] shadow-lg">
      <div className="w-[60px] h-[50px]">
        <Link href={`/project/${project.id}`}>
          <Back />
        </Link>
      </div>
      <p className="text-center font-semibold text-2xl lg:text-3xl">
        {puncture?.title}
      </p>
      <p className="mt-10 lg:text-xl">{puncture?.description}</p>
    </div>
  );
};
