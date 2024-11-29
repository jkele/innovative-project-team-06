"use client";
import React from "react";
import Link from "next/link";
import { NavItem } from "@/types";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/Navigation";
import { ImTelegram } from "react-icons/im";
import { NavigationItem } from "./Navigation";
import { Logo } from "@/icons/Logo";

const Navbar = ({ toggle }: { toggle: () => void }): JSX.Element => {
  return (
    <>
      <div className="w-full h-20 sticky top-0 bg-[#F3FAFF] shadow-md z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
              <Logo className="w-[185px]" />
            </Link>
            <div className="hidden md:flex gap-x-6 text-black">
              {NAV_ITEMS.map((item, index) => {
                return <NavigationItem key={index} item={item} />;
              })}
            </div>
            <div className="">
              <Link
                href={"/login"}
                className="border border-[#054166] text-black font-semibold px-12 py-2 hover:text-[#054166]"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
