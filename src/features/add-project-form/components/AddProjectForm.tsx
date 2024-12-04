"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface AddProjectFormFields {
  title: string;
  description: string;
  finished: boolean;
  street: string;
}

export const AddProjectForm = () => {
  const { register, handleSubmit } = useForm<AddProjectFormFields>();
  const router = useRouter();

  const onSubmit = (data: AddProjectFormFields) => {
    console.log(data);
    router.back();
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
