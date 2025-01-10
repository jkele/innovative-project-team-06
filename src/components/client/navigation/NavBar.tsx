"use client";
import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/Navigation";
import { NavigationItem } from "./Navigation";
import { Logo } from "@/icons/Logo";
import { deleteCookie, getCookie } from "cookies-next";
import { useIsClient } from "@/hooks/use-is-client";
import { useMediaQuery } from "@/hooks/use-media-query";
import useNavigation from "@/hooks/use-navigation";
import { NavItem } from "@/types";

const Navbar = ({ toggle }: { toggle: () => void }): JSX.Element | null => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const userCookie = getCookie("user");

  const handleLogOut = () => {
    deleteCookie("user");
    window.location.href = "/";
  };

  const isClient = useIsClient();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = useNavigation();

  const handleClick = (e: React.MouseEvent, item: NavItem) => {
    e.preventDefault();
    handleNavigation(item.path);

    setTimeout(() => {
      toggleMobileMenu();
    }, 400);
  };

  return isClient ? (
    <>
      <div className="w-full h-20 sticky top-0 bg-[#F3FAFF] shadow-md z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
              <Logo className="w-[185px]" />
            </Link>
            <div className="hidden md:flex gap-x-6 text-black">
              {NAV_ITEMS.map((item, index) => {
                return item.title === "Dashboard" && !userCookie ? null : (
                  <NavigationItem
                    key={index}
                    item={item}
                    handleClick={handleClick}
                  />
                );
              })}
            </div>
            {userCookie ? (
              <div className="hidden md:block">
                <button
                  onClick={handleLogOut}
                  className="border border-[#054166] text-black font-semibold px-12 py-2 hover:text-[#054166]"
                >
                  Log out
                </button>
              </div>
            ) : (
              <div className="hidden md:block">
                <Link
                  href={"/login"}
                  className="border border-[#054166] text-black font-semibold px-12 py-2 hover:text-[#054166]"
                >
                  Sign in
                </Link>
              </div>
            )}
            {isMobile && (
              <button
                onClick={toggleMobileMenu}
                className="md:hidden focus:outline-none text-black"
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#F3FAFF] z-40">
          <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
            {NAV_ITEMS.map((item, index) =>
              item.title === "Dashboard" && !userCookie ? null : (
                <NavigationItem
                  key={index}
                  item={item}
                  handleClick={handleClick}
                />
              )
            )}

            {userCookie ? (
              <button
                onClick={handleLogOut}
                className="border border-[#054166] text-black font-semibold px-12 py-2 hover:text-[#054166] w-full"
              >
                Log out
              </button>
            ) : (
              <Link
                href="/login"
                onClick={toggleMobileMenu}
                className="border border-[#054166] text-black font-semibold px-12 py-2 hover:text-[#054166] w-full text-center"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  ) : null;
};

export default Navbar;
