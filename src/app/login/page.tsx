"use client";

import { LoginForm } from "@/features/login-form";
import { LoginFormInput } from "@/features/login-form/types/login-form";
import { Logo } from "@/icons/Logo";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm<LoginFormInput>();

  const router = useRouter();

  const onSubmit = (data: LoginFormInput) => {
    console.log(data);

    if (data.email === "test@mail.com" && data.password === "1234") {
      router.push("/dashboard");
    }
  };

  return (
    <div className="px-10 h-[100dvh] bg-[#F3FAFF]">
      <Logo className="w-[185px] m-auto" />
      <LoginForm />
    </div>
  );
}
