"use client";
import { PunctureCard } from "@/components/puncture-card";
import { PuncturesListProperties } from "../types/punctures-list";
import { useRouter } from "next/navigation";

export const PuncturesList = (properties: PuncturesListProperties) => {
  const { punctures, projectId } = properties;

  const router = useRouter();

  const handleAddPunctureClick = () => {
    router.push("/add");
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        className="mt-4 bg-white border border-[#054166] hover:bg-[#054166]/5 uppercase font-semibold shadow-lg px-20 py-6 w-fit self-center"
        onClick={handleAddPunctureClick}
      >
        Add puncture
      </button>
      <p className="font-semibold text-2xl mt-4 text-center">Punctures</p>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 lg:justify-center">
        {punctures.map((puncture) => (
          <PunctureCard
            key={puncture.id}
            puncture={puncture}
            projectId={projectId}
          />
        ))}
      </div>
    </div>
  );
};
