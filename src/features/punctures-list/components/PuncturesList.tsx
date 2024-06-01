import { PunctureCard } from "@/components/puncture-card";
import { PuncturesListProperties } from "../types/punctures-list";

export const PuncturesList = (properties: PuncturesListProperties) => {
  const { punctures } = properties;

  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold text-2xl">Punctures</p>
      {punctures.map((puncture) => (
        <PunctureCard key={puncture.id} puncture={puncture} />
      ))}
      <button
        type="button"
        className="mt-6 shadow-lg bg-white uppercase font-semibold py-4"
      >
        Add puncture
      </button>
    </div>
  );
};
