"use client";
import { useState } from "react";
import Navbar from "./NavBar";
import Sidebar from "./SideBar";
import Link from "next/link";
import { NavItem } from "@/types";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export const NavigationItem = ({ item }: { item : NavItem}) => {
    return (
        <Link href={item.path} className=" hover:bg-gray-900 p-2 rounded-md">
            <p>{item.title}</p>
        </Link>
    )
}

export default Navigation;