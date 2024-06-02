"use client";

import { cn } from "@/utils/cn";
import { PunctureCardProperties } from "../types/puncture-card";
import { PunctureDetailsDialog } from "@/components/puncture-details-dialog";
import { ElementRef, useRef } from "react";
import { useOpenCloseToggle } from "@/hooks/use-open-close-toggle";

export const PunctureCard = (properties: PunctureCardProperties) => {
  const { puncture } = properties;

  const shortenDescriptionText = (description: string) => {
    return description.substring(0, 120).concat("...");
  };

  const dialogReference = useRef<ElementRef<"dialog">>(null);

  const [opened, { open, close }] = useOpenCloseToggle(false, {
    onOpen: () => {
      dialogReference.current?.showModal();
    },
    onClose: () => {
      dialogReference.current?.close();
    },
  });

  return (
    <>
      <div className="flex flex-row shadow-lg" onClick={open}>
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
      <PunctureDetailsDialog
        modalReference={dialogReference}
        close={close}
        puncture={puncture}
      />
    </>
  );
};
