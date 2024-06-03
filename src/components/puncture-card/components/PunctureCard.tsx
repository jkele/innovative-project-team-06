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
      <div
        className="flex flex-row shadow-lg lg:h-[600px] lg:w-[600px]"
        onClick={open}
      >
        <div
          className={cn(
            "flex flex-col px-2 py-3 gap-1 lg:px-[54px] hover:bg-black/5",
            puncture.finished ? "bg-[#F3FAFF]" : "bg-white"
          )}
        >
          <p className="font-medium lg:text-[30px] lg:mt-[40px]">
            {puncture.title}
          </p>
          <p className="text-[#054166] pl-4 lg:pl-0 text-[14px] lg:mt-10 lg:text-[24px]">
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
