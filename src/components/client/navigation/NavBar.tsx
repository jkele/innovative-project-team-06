"use client";
import React from "react";
import Link from "next/link";
import { NavItem } from "@/types";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/Navigation";
import { ImTelegram } from "react-icons/im";
import { NavigationItem } from "./Navigation";

const Navbar = ({ toggle }: { toggle: () => void }): JSX.Element => {
  return (
    <>
      <div className="w-full h-20 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
              <p>LOGO</p>
            </Link>
            <div className="hidden md:flex gap-x-6 text-white">
              {NAV_ITEMS.map((item, index) => {
                return <NavigationItem key={index} item={item} />;
              })}
            </div>
            <Button toggle={toggle} />
          </div>
        </div>
      </div>
    </>
  );
};

const Button = ({ toggle }: { toggle: () => void }): JSX.Element => {
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  return width < 768 ? (
    <button
      type="button"
      className="inline-flex items-center md:hidden cursor-pointer"
      onClick={toggle}
    >
      {/* Menu icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
      >
        <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
      </svg>
    </button>
  ) : (
    <div className=" cursor-pointer text-center items-center flex text-black h-12 rounded-lg bg-indigo-400 font-bold px-5">
      <p>Sign In</p>
    </div>
  );
};

export default Navbar;
