"use client";

import { useForm } from "react-hook-form";
import { LoginFormInput, LoginResponse } from "../types/login-form";
import { useState } from "react";
import Link from "next/link";
import { setCookie } from "cookies-next";
import wretch from "wretch";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormInput>();

  const [loginError, setLoginError] = useState(false);

  const onSubmit = async (data: LoginFormInput) => {
    const loginRequestBody = {
      email: data.email,
      password: data.password,
    };

    try {
      const loginResponse = await wretch("https://localhost:7074/api/login")
        .headers({
          "Content-Type": "application/json",
        })
        .body(JSON.stringify(loginRequestBody))
        .post()
        .json<LoginResponse>();

      if (loginResponse.message === "Login successful.") {
        setCookie("user", JSON.stringify({ userId: loginResponse.userId }));

        window.location.href = "/dashboard";
      } else {
        setLoginError(true);
      }
    } catch {
      setLoginError(true);
    }
  };

  return (
    <div className="flex flex-col pt-[190px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white h-[284px] flex flex-col px-4 gap-4 shadow-xl lg:px-[400px]"
      >
        <div className="flex flex-col mt-4">
          <input
            className="text-black h-10 p-2 border-b border-[#5F8DAA]"
            type="text"
            {...register("email")}
          />
          <label>
            <p className="font-medium text-[#5F8DAA]">email</p>
          </label>
        </div>
        <div className="flex flex-col">
          <input
            className="text-black h-10 p-2 border-b border-[#5F8DAA]"
            type="password"
            {...register("password")}
          />
          <label>
            <p className="font-medium text-[#5F8DAA]">password</p>
          </label>
        </div>
        {loginError ? (
          <p className="text-xs text-red-500">
            Login unsuccessful, check email or password
          </p>
        ) : null}
        <button
          type="submit"
          className="text-black mt-4 justify-end uppercase font-semibold text-[18px] hover:text-[#054166]"
        >
          Log in
        </button>
      </form>
      <Link
        href={"/create-account"}
        className="self-end underline mr-[200px] mt-1 text-[#5F8DAA]"
      >
        or create account here
      </Link>
    </div>
  );
};
