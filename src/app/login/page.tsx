import { LoginForm } from "@/features/login-form";
import { Logo } from "@/icons/Logo";

export default function Login() {
  return (
    <div className="px-10 h-[100dvh] bg-[#F3FAFF]">
      <Logo className="w-[185px] m-auto" />
      <LoginForm />
    </div>
  );
}
