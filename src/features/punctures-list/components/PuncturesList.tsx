import { PunctureCard } from "@/components/puncture-card";
import { PuncturesListProperties } from "../types/punctures-list";

export const PuncturesList = (properties: PuncturesListProperties) => {
  const { punctures } = properties;

  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        className="mt-4 bg-white border border-[#054166] uppercase font-semibold shadow-lg px-20 py-6 w-fit self-center"
      >
        Add puncture
      </button>
      <p className="font-semibold text-2xl mt-4 text-center">Punctures</p>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 lg:justify-center">
        {punctures.map((puncture) => (
          <PunctureCard key={puncture.id} puncture={puncture} />
        ))}
      </div>
    </div>
  );
};
