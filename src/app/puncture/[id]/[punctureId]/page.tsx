import { PunctureImages } from "@/components/puncture-images";
import { PunctureInfo } from "@/components/puncture-info";
import { PROJECTS } from "@/constants/projects";
import { Add } from "@/icons/Add";
import { Clipboard } from "@/icons/Clipboard";
import { Deadline } from "@/icons/Deadline";
import { Location } from "@/icons/Location";
import { Measurement } from "@/icons/Measurement";
import { People } from "@/icons/People";
import Image from "next/image";

export default function Puncture({
  params: { id, punctureId },
}: {
  params: { id: string; punctureId: string };
}) {
  const project = PROJECTS.find((project) => project.id === id);

  const puncture = project?.punctures.find(
    (puncture) => puncture.id === punctureId
  );

  return (
    <div className="flex flex-col bg-[#F3FAFF]">
      <PunctureInfo project={project!} puncture={puncture!} />
      <PunctureImages />
      <div className="flex flex-col gap-4 mt-10 mx-auto">
        <div className="flex flex-row gap-6">
          <Measurement />
          <p className="text-lg">
            {puncture?.width} {puncture?.height}
          </p>
        </div>
        <div className="flex flex-row gap-6">
          <Clipboard />
          <p className="text-lg">puncture type</p>
        </div>
        <div className="flex flex-row gap-6">
          <People />
          <p className="text-lg">assigned to</p>
        </div>
        <div className="flex flex-row gap-6">
          <Deadline />
          <p className="text-lg">deadline</p>
        </div>
        <div className="flex flex-row gap-6">
          <Location />
          <p className="text-lg">location</p>
        </div>
      </div>
    </div>
  );
}
