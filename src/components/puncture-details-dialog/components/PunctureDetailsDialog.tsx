import { useOutsideClick } from "@/hooks/use-outside-click";
import { PunctureDetailsDialogProperties } from "../types/puncture-details-dialog";
import { ElementRef } from "react";
import { Close } from "@/icons/Close";

export const PunctureDetailsDialog = (
  properties: PunctureDetailsDialogProperties
) => {
  const { puncture, close, modalReference } = properties;

  const reference = useOutsideClick<ElementRef<"div">>(() => {
    close();
  });

  return (
    <dialog
      ref={modalReference}
      onCancel={close}
      className="scrollbar-thin h-full max-h-[100dvh] w-full max-w-[100dvh] backdrop:bg-black/60 lg:w-[726px]"
    >
      <div ref={reference} className="flex flex-col px-4">
        <button
          className=" absolute left-0 top-0 z-10 h-10 w-10 bg-white p-2.5 lg:flex lg:flex-col"
          type="button"
          onClick={close}
        >
          <Close className="stroke-neutral-4 h-full w-full justify-center self-center" />
        </button>
        <p className="mt-10 text-center text-2xl text-[#5F8DAA] uppercase">
          {puncture.title}
        </p>
        <p>{puncture.description}</p>
      </div>
    </dialog>
  );
};
