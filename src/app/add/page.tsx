"use client";

import { AddPunctureForm } from "@/features/add-puncture-form";
import { getCookie } from "cookies-next";
import { useEffect } from "react";

export default function AddPuncture() {
  useEffect(() => {
    const userCookie = getCookie("user");

    if (!userCookie) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="bg-[#5F8DAA] h-[100dvh] flex flex-col justify-center">
      <AddPunctureForm />
    </div>
  );
}
