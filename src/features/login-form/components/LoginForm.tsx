"use client";

import { useForm } from "react-hook-form";
import { LoginFormInput } from "../types/login-form";

export function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormInput>();

  const onSubmit = (data: LoginFormInput) => {
    console.log(data);
  };

  return (
    <div className="my-[190px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white h-[284px] flex flex-col px-4 gap-4"
      >
        <div className="flex flex-col mt-10">
          <input
            className="text-black h-10 border-b border-[#5F8DAA]"
            type="text"
            {...register("email")}
          />
          <label>
            <p className="font-medium text-[#5F8DAA]">email</p>
          </label>
        </div>
        <div className="flex flex-col">
          <input
            className="text-black h-10 border-b border-[#5F8DAA]"
            type="password"
            {...register("password")}
          />
          <label>
            <p className="font-medium text-[#5F8DAA]">password</p>
          </label>
        </div>
        <button
          type="submit"
          className="text-black mt-10 uppercase font-semibold text-[18px]"
        >
          Log in
        </button>
      </form>
    </div>
  );
}
