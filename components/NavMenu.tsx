"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "New", "Popular", "Trending", "Categories"];

  return (
    <>
      <Image
        src={`${isOpen ? "/icon-menu-close.svg" : "/icon-menu.svg"}`}
        width={`${isOpen ? 25 : 40}`}
        height={30}
        alt="Hamburger Menu"
        onClick={() => setIsOpen(!isOpen)}
        className="sm:relative lg:hidden z-10"
      />

      {isOpen && (
        <div className="absolute top-0 right-0 h-screen w-8/12 bg-off-white">
          <div className="mt-[125px] lg:flex px-5">
            {links.map((link) => (
              <Link
                href={"/"}
                className="hover:text-orange text-grayish-blue-900 hover:cursor-pointer block pt-4 font-semibold text-xl"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavMenu;
