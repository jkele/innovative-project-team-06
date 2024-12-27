"use client";

import { PROJECTS } from "@/constants/projects";
import { ProjectsList } from "@/features/projects-list";
import { getCookie } from "cookies-next";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    const userCookie = getCookie("user");

    if (!userCookie) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="flex flex-col bg-[rgb(243,250,255)] px-10">
      <div className="lg:px-[246px] mb-4">
        <ProjectsList projects={PROJECTS} />
      </div>
    </div>
  );
}
