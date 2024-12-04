"use client";
import { useForm } from "react-hook-form";

export const CreateAccountForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white h-auto flex flex-col px-4 gap-4 shadow-xl lg:px-[400px] mt-[120px]"
      >
        <div className="flex flex-col mt-4">
          <input
            className="text-black h-10 border-b border-[#5F8DAA] p-2"
            type="text"
            {...register("firstName")}
          />
          <label>
            <p className="font-medium text-[#5F8DAA]">First Name</p>
          </label>
        </div>
        <div className="flex flex-col">
          <input
            className="text-black h-10 border-b border-[#5F8DAA] p-2"
            type="text"
            {...register("lastName")}
          />
          <label>
            <p className="font-medium text-[#5F8DAA]">Last Name</p>
          </label>
        </div>
        <div className="flex flex-col">
          <input
            className="text-black h-10 border-b border-[#5F8DAA] p-2"
            type="email"
            {...register("email")}
          />
          <label>
            <p className="font-medium text-[#5F8DAA]">Email</p>
          </label>
        </div>
        <div className="flex flex-col">
          <input
            className="text-black h-10 border-b border-[#5F8DAA] p-2"
            type="password"
            {...register("password")}
          />
          <label>
            <p className="font-medium text-[#5F8DAA]">Password</p>
          </label>
        </div>
        <div className="flex flex-col">
          <input
            className="text-black h-10 border-b border-[#5F8DAA] p-2"
            type="password"
            {...register("confirmPassword")}
          />
          <label>
            <p className="font-medium text-[#5F8DAA]">Confirm Password</p>
          </label>
        </div>
        <button
          type="submit"
          className="text-black mt-4 mb-4 hover:text-[#054166] justify-end uppercase font-semibold text-[18px]"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};
