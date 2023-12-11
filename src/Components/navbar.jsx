import { Link } from "react-scroll";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

const NavLinks = () => {
  return (
    <div className="flex flex-col  items-center text-[1.1rem] font-semibold font-['Montserrat']  xl:block md:block md:text-[1.1rem] md:font-semibold md:font-['Montserrat'] mr-3">
      <Link className="m-10 text-purpleCustom" to="/">
        HOME
      </Link>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        offset={40}
        duration={600}
        className="m-8 hover:text-purpleCustom hover:cursor-pointer"
      >
        PROJECTS
      </Link>
      <Link
        className="m-8 hover:text-purpleCustom hover:cursor-pointer"
        to="about"
        spy={true}
        smooth={true}
        offset={40}
        duration={600}
      >
        ABOUT
      </Link>
      <Link
        className="m-8 hover:text-purpleCustom hover:cursor-pointer"
        to="contact"
        spy={true}
        smooth={true}
        offset={10}
        duration={600}
      >
        CONTACT
      </Link>
    </div>
  );
};

const LogoImg = () => {
  return (
    <a href="/">
      <img
        className="hover:cursor-pointer md:block  ml-auto mr-auto mt-auto mb-auto   md:ml-7  h-12 rounded-full z-50 "
        src={Logo}
        alt="logo"
      ></img>
    </a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className=" bg-slate-700 top-0 mx-auto w-full flex md:items-center md:justify-between h-20 text-white">
        <div className="photo hidden md:block">
          <LogoImg />
        </div>
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <div className=" w-full md:hidden lg:hidden xl:hidden   text-white font-bold ">
          <div className="open flex flex-row justify-between items-center mt-4">
            <div className="photo ml-3">{!isOpen && <LogoImg />}</div>
            <button className="mr-4" onClick={toggleMenu}>
              {!isOpen && <Menu size={"40px"} />}
            </button>
          </div>
          <button
            className="flex justify-center items-center w-full"
            onClick={toggleMenu}
          >
            {isOpen && <X size={"40px"} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-700 text-white ">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Navbar;
