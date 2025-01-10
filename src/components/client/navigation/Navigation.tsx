"use client";
import { useState } from "react";
import Navbar from "./NavBar";
import Sidebar from "../../server/navigation/SideBar";
import Link from "next/link";
import { NavItem } from "@/types";
import useNavigation from "@/hooks/use-navigation";

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

export const NavigationItem = ({
  item,
  handleClick,
}: {
  item: NavItem;
  handleClick: (e: React.MouseEvent, item: NavItem) => void;
}) => {
  return (
    <Link
      href={item.path}
      className="p-2 rounded-md hover:text-[#054166]"
      onClick={(e) => {
        handleClick(e, item);
      }}
      scroll={false}
    >
      <p>{item.title}</p>
    </Link>
  );
};

export default Navigation;
