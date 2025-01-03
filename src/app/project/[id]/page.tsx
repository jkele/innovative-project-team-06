"use client";

import { ProjectInfo } from "@/components/project-info";
import { PROJECTS } from "@/constants/projects";
import { PuncturesList } from "@/features/punctures-list";
import { getCookie } from "cookies-next";
import { useEffect } from "react";

export default function Project({
  params: { id },
}: {
  params: { id: string };
}) {
  const project = PROJECTS.find((project) => project.id === id);

  useEffect(() => {
    const userCookie = getCookie("user");

    if (!userCookie) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="flex flex-col bg-[#F3FAFF]">
      <ProjectInfo project={project!} />
      <div className="flex flex-col px-4 gap-4 mt-10 lg:px-[246px] justify-center">
        <PuncturesList punctures={project!.punctures} projectId={project!.id} />
      </div>
    </div>
  );
}
