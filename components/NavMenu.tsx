"use client";

import Image from "next/image";
import { useState } from "react";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Image
      src={`${isOpen ? "/icon-menu-close.svg" : "/icon-menu.svg"}`}
      width={`${isOpen ? 25 : 40}`}
      height={30}
      alt="Hamburger Menu"
      onClick={() => setIsOpen(!isOpen)}
    />
  );
};

export default NavMenu;
