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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[600px] mx-auto p-4 bg-white shadow-md flex flex-col"
    >
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 font-semibold mb-2"
        >
          Title
        </label>
        <input
          id="title"
          {...register("title")}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-semibold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          {...register("description")}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="street"
          className="block text-gray-700 font-semibold mb-2"
        >
          Street
        </label>
        <input
          id="street"
          {...register("street")}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#054166] text-white py-2 px-4 hover:bg-blue-700"
      >
        Add Project
      </button>
    </form>
  );
};
