"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import wretch from "wretch";
import { RegisterResponse } from "../types/create-account-form";
import { useState } from "react";

export const CreateAccountForm = async () => {
  const { register, handleSubmit } = useForm();

  const [errorState, setErrorState] = useState(false);

  const router = useRouter();

  const onSubmit = async (data: any) => {
    console.log(data);

    const registerRequestBody = {
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    };

    const registerResponse = await wretch("https://localhost:7074/api/register")
      .headers({
        "Content-Type": "application/json",
      })
      .body(JSON.stringify(registerRequestBody))
      .post()
      .json<RegisterResponse>();

    if (registerResponse.message === "User registered successfully.") {
      router.push("/login");
    } else {
      setErrorState(true);
    }
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
            {...register("firstName", { required: true })}
          />
          <label>
            <p className="font-medium text-[#5F8DAA]">First Name</p>
          </label>
        </div>
        <div className="flex flex-col">
          <input
            className="text-black h-10 border-b border-[#5F8DAA] p-2"
            type="text"
            {...register("lastName", { required: true })}
          />
          <label>
            <p className="font-medium text-[#5F8DAA]">Last Name</p>
          </label>
        </div>
        <div className="flex flex-col">
          <input
            className="text-black h-10 border-b border-[#5F8DAA] p-2"
            type="email"
            {...register("email", { required: true })}
          />
          <label>
            <p className="font-medium text-[#5F8DAA]">Email</p>
          </label>
        </div>
        <div className="flex flex-col">
          <input
            className="text-black h-10 border-b border-[#5F8DAA] p-2"
            type="password"
            {...register("password", { required: true })}
          />
          <label>
            <p className="font-medium text-[#5F8DAA]">Password</p>
          </label>
        </div>
        <div className="flex flex-col">
          <input
            className="text-black h-10 border-b border-[#5F8DAA] p-2"
            type="password"
            {...register("confirmPassword", { required: true })}
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
        {errorState ? (
          <p className="text-red-500 mb-2 text-center">
            Error creating account
          </p>
        ) : null}
      </form>
    </div>
  );
};
