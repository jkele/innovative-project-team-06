"use client";

import { PROJECTS } from "@/constants/projects";
import { ProjectsList } from "@/features/projects-list";
import { Project } from "@/types/project";
import { User } from "@/types/user";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import wretch from "wretch";

export default function Dashboard() {
  const [user, setUser] = useState<User>();
  const [projects, setProjects] = useState<Project[]>();

  useEffect(() => {
    const userCookie = getCookie("user");

    if (!userCookie) {
      window.location.href = "/";
    } else {
      setUser(JSON.parse(userCookie.toString()));
    }
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsResponse = await wretch(
        `https://localhost:7074/api/project/${user?.userId}`
      )
        .get()
        .json<Project[]>();

      setProjects(projectsResponse);
    };

    if (user?.userId) {
      fetchProjects();
    }
  }, [user?.userId]);

  return (
    <div className="flex flex-col bg-[rgb(243,250,255)] px-10">
      {projects ? (
        <div className="lg:px-[246px] mb-4">
          <ProjectsList projects={projects} />
        </div>
      ) : null}
    </div>
  );
}
