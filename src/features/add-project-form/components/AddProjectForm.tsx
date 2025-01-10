"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  AddProjectFormFields,
  CreateProjectResponse,
} from "../types/add-project-form";
import { getCookie } from "cookies-next";
import { User } from "@/types/user";
import wretch from "wretch";

export const AddProjectForm = () => {
  const { register, handleSubmit } = useForm<AddProjectFormFields>();
  const router = useRouter();

  const userCookieStr = getCookie("user");
  const userCookie = userCookieStr
    ? (JSON.parse(userCookieStr as string) as User)
    : null;

  const onSubmit = async (data: AddProjectFormFields) => {
    const createProjectRequestBody = {
      title: data.title,
      description: data.description,
      userId: userCookie?.userId,
      street: data.street,
    };

    const createProjectResponse = await wretch(
      "https://localhost:7074/api/project"
    )
      .headers({
        "Content-Type": "application/json",
      })
      .body(JSON.stringify(createProjectRequestBody))
      .post()
      .json<CreateProjectResponse>();

    if (createProjectResponse.message === "Project created successfully.") {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white h-[384px] flex flex-col w-full px-4 gap-4 shadow-xl lg:px-[400px]"
      >
        <div className="flex flex-col mt-4">
          <label htmlFor="title" className="font-medium text-[#5F8DAA]">
            Title
          </label>
          <input
            id="title"
            {...register("title")}
            className="text-black h-10 p-2 border-b border-[#5F8DAA]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="font-medium text-[#5F8DAA]">
            Description
          </label>
          <textarea
            id="description"
            {...register("description")}
            className="text-black h-10 p-2 border-b border-[#5F8DAA]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="street" className="font-medium text-[#5F8DAA]">
            Street
          </label>
          <input
            id="street"
            {...register("street")}
            className="text-black h-10 p-2 border-b border-[#5F8DAA]"
          />
        </div>
        <button
          type="submit"
          className="text-black mt-4 justify-end uppercase font-semibold text-[18px] hover:text-[#054166]"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};
