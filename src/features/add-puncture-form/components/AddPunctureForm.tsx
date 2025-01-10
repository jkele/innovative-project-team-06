"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { AddPunctureFormFields } from "../types/add-puncture-form";
import { useRouter } from "next/navigation";
import { toBase64 } from "@/utils/image-converter";
import wretch from "wretch";
import { parseAsInteger, useQueryState } from "nuqs";

export const AddPunctureForm = () => {
  const { register, handleSubmit } = useForm<AddPunctureFormFields>();

  const [projectId] = useQueryState("projectId", parseAsInteger);

  const router = useRouter();

  const onSubmit = async (data: any) => {
    const image = await toBase64(data.image[0] as unknown as File).then(
      (res: any) => res.split(",")[1]
    );

    const newPuncture = {
      name: data.name,
      projectId: projectId,
      description: data.description,
      width: data.width,
      height: data.height,
      depth: data.depth,
      location: data.location,
      images: image,
    };

    const response = await wretch("https://localhost:7074/api/puncture")
      .json(newPuncture)
      .post()
      .json();

    router.back();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white h-[584px] flex flex-col px-4 gap-4 shadow-xl lg:px-[400px]"
      >
        <div className="flex flex-col mt-4">
          <label htmlFor="name" className="font-medium text-[#5F8DAA]">
            Name
          </label>
          <input
            id="name"
            {...register("name")}
            className="text-black h-10 p-2 border-b border-[#5F8DAA]"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="name" className="font-medium text-[#5F8DAA]">
            Location
          </label>
          <input
            id="location"
            {...register("location")}
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
        <div className="flex flex-row gap-10 justify-between">
          <div className="flex flex-col">
            <label htmlFor="width" className="font-medium text-[#5F8DAA]">
              Width
            </label>
            <input
              id="width"
              {...register("width")}
              className="text-black h-10 p-2 border-b border-[#5F8DAA]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="height" className="font-medium text-[#5F8DAA]">
              Height
            </label>
            <input
              id="height"
              {...register("height")}
              className="text-black h-10 p-2 border-b border-[#5F8DAA]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="depth" className="font-medium text-[#5F8DAA]">
              Depth
            </label>
            <input
              id="depth"
              {...register("depth")}
              className="text-black h-10 p-2 border-b border-[#5F8DAA]"
            />
          </div>
        </div>
        <input
          className="mt-2"
          {...register("image", { required: true })}
          type="file"
          accept=".png,.jpg,.jpeg,.img"
        />
        <button
          type="submit"
          className="text-black mt-4 justify-end uppercase font-semibold text-[18px] hover:text-[#054166]"
        >
          Add Puncture
        </button>
      </form>
    </div>
  );
};
