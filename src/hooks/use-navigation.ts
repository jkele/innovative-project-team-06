"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const useNavigation = (offset = 160) => {
  const router = useRouter();

  const handleNavigation = useCallback(
    async (path: string) => {
      if (path.startsWith("#")) {
        const elementId = path.slice(1);

        const element = document.getElementById(elementId);
        if (element) {
          const scrollPosition = element.offsetTop - offset;
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
          return;
        }

        await router.push(`/#${elementId}`);
      } else {
        router.push(path);
      }
    },
    [router, offset]
  );

  return handleNavigation;
};

export default useNavigation;
