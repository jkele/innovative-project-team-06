import { cn } from "@/utils/cn";
import { PunctureCardProperties } from "../types/puncture-card";

export const PunctureCard = (properties: PunctureCardProperties) => {
  const { puncture } = properties;

  const shortenDescriptionText = (description: string) => {
    return description.substring(0, 120).concat("...");
  };

  return (
    <div className="flex flex-row shadow-lg">
      <div
        className={cn(
          "flex flex-col px-2 py-3 gap-1 ",
          puncture.finished ? "bg-[#F3FAFF]" : "bg-white"
        )}
      >
        <p className="font-medium">{puncture.title}</p>
        <p className="text-[#054166] text-[14px] pl-4">
          {shortenDescriptionText(puncture.description)}
        </p>
      </div>
    </div>
  );
};
