"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { AddPunctureFormFields } from "../types/add-puncture-form";
import { useRouter } from "next/navigation";

export const AddPunctureForm = () => {
  const { register, handleSubmit } = useForm<AddPunctureFormFields>();

  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log(data);

    router.back();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-4 bg-white shadow-md"
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
      <div className="flex flex-row gap-10 justify-between">
        <div className="mb-4">
          <label
            htmlFor="width"
            className="block text-gray-700 font-semibold mb-2"
          >
            Width
          </label>
          <input
            id="width"
            {...register("width")}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="height"
            className="block text-gray-700 w-10 font-semibold mb-2"
          >
            Height
          </label>
          <input
            id="height"
            {...register("height")}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-[#054166] text-white py-2 px-4 hover:bg-blue-700"
      >
        Add Puncture
      </button>
    </form>
  );
};
