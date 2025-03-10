"use client";

import { ProjectInfo } from "@/components/project-info";
import { PuncturesList } from "@/features/punctures-list";
import type { Project } from "@/types/project";
import { User } from "@/types/user";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import wretch from "wretch";

export default function Project({
  params: { id },
}: {
  params: { id: string };
}) {
  const [project, setProject] = useState<Project>();
  const [user, setUser] = useState<User>();
  const [projectPunctures, setProjectPunctures] = useState();

  useEffect(() => {
    const userCookie = getCookie("user");

    if (!userCookie) {
      window.location.href = "/";
    } else {
      setUser(JSON.parse(userCookie.toString()));
    }
  }, []);

  useEffect(() => {
    const fetchProject = async () => {
      const projectsResponse = await wretch(
        `https://localhost:7074/api/project/${user?.userId}`
      )
        .get()
        .json<Project[]>();

      const project = projectsResponse.find(
        (project) => project.projectId.toString() === id
      );

      setProject(project);
    };

    if (user?.userId) {
      fetchProject();
    }
  }, [id, user?.userId]);

  useEffect(() => {
    const fetchProjectPunctures = async () => {
      const puncturesResponse = await wretch(
        `https://localhost:7074/api/puncture/project/${project?.projectId}`
      )
        .get()
        .json();

      setProjectPunctures(puncturesResponse);
    };

    if (project) {
      fetchProjectPunctures();
    }
  }, [project]);

  return (
    <div className="flex flex-col bg-[#F3FAFF]">
      <ProjectInfo project={project!} />
      <div className="flex flex-col px-4 gap-4 h-[500px] mt-10 lg:px-[246px] justify-center">
        <PuncturesList punctures={projectPunctures} projectId={Number(id)} />
      </div>
    </div>
  );
}
