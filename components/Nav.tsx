import Image from "next/image";
import NavMenu from "./NavMenu";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center">
      <Image src={"/logo.svg"} width={40} height={40} alt="W Logo" />
      <NavMenu />
    </nav>
  );
};

export default Nav;
