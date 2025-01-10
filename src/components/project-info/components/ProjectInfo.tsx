"use client";
import { People } from "@/icons/People";
import { ProjectInfoProperties, User } from "../types/project-info";
import { Location } from "@/icons/Location";
import Link from "next/link";
import { Back } from "@/icons/Back";
import { useEffect, useState } from "react";
import wretch from "wretch";
import { useRouter } from "next/navigation";

export const ProjectInfo = (properties: ProjectInfoProperties) => {
  const { project } = properties;

  const [user, setUser] = useState<User>();

  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await wretch(
        `https://localhost:7074/api/user?userId=${project.userId}`
      )
        .get()
        .json<User>();

      setUser(response);
    };

    if (project && project.userId) {
      fetchUser();
    }
  }, [project]);

  const handleToggle = async (projectId: number) => {
    try {
      const response = await wretch(
        `https://localhost:7074/api/project/${projectId}/toggle-finished`
      )
        .patch()
        .json();

      window.location.reload();
    } catch (error) {
      console.error("Error toggling project status:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await wretch(`https://localhost:7074/api/project/${project.projectId}`)
        .delete()
        .res();

      router.back();
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Failed to delete project. Please try again.");
    }
  };

  if (!project) {
    return null;
  }

  return (
    <div className="bg-white flex flex-col gap-4 py-4 text-black px-4 lg:px-[200px] shadow-lg">
      <div className="flex flex-row justify-between">
        <div className="w-[60px] h-[50px]">
          <Link href={"/dashboard"}>
            <Back />
          </Link>
        </div>
        <div className="flex flex-row gap-4">
          <label className="flex flex-row self-center gap-2">
            <input
              className="w-6 h-6 text-blue-600 bg-gray-200 rounded focus:ring-blue-500 focus:ring-2"
              type="checkbox"
              checked={project.finished}
              onChange={() => handleToggle(project.projectId)}
            />
            {project.finished ? "Finished" : "Unfinished"}
          </label>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white h-10 self-center leading-none px-4 rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-center font-semibold text-2xl lg:text-3xl">
        {project?.title}
      </p>
      <p className="mt-10 lg:text-xl">{project?.description}</p>
      <div className="flex flex-row justify-between px-6 lg:px-60">
        <div className="flex flex-row gap-2 mt-5">
          <Location className="self-center" />
          <p className="self-center font-semibold">{project?.street}</p>
        </div>
        <div className="flex flex-row gap-2 mt-5">
          <People className="self-center" />
          <p className="self-center font-semibold">{`${user?.firstName} ${user?.lastName}`}</p>
        </div>
      </div>
    </div>
  );
};
