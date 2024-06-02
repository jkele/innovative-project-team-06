import { useEffect, useRef } from "react";

const DEFAULT_EVENTS = ["mousedown", "touchstart"];

export const useOutsideClick = <TElement extends HTMLElement>(
  handler: () => void,
  events: string[] | undefined = DEFAULT_EVENTS
) => {
  const reference = useRef<TElement>(null);

  useEffect(() => {
    const listener = (event: Event) => {
      const { target } = event ?? {};

      const currentReference = reference.current;

      if (currentReference && !currentReference.contains(target as Node)) {
        handler();
      }
    };

    for (const event of events) {
      document.addEventListener(event, listener);
    }

    return () => {
      for (const event of events) {
        document.removeEventListener(event, listener);
      }
    };
  }, [handler, events]);

  return reference;
};
