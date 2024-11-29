"use client";
import { useRouter } from "next/navigation";

const useNavigation = (offset = 160) => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    if (path.startsWith("#")) {
      // Scroll to in-page element
      const elementId = path.slice(1);
      const element = document.getElementById(elementId);
      if (element) {
        const scrollPosition = element.offsetTop - offset;

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    } else {
      // Navigate to external or internal URLs
      router.push(path);
    }
  };

  return handleNavigation;
};

export default useNavigation;
