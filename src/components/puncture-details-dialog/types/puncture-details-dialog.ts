import { TestProject } from "@/types/project";
import { Puncture } from "@/types/puncture";
import { ElementRef, RefObject } from "react";

export type PunctureDetailsDialogProperties = {
  puncture: Puncture;
  close: () => void;
  modalReference: RefObject<ElementRef<"dialog">>;
};
