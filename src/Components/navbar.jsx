import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

const NavLinks = () => {
  return (
    <div className="flex flex-col  items-center text-[1.1rem] font-semibold font-['Montserrat']  xl:block md:block md:text-[1.1rem] md:font-semibold md:font-['Montserrat'] mr-3">
      <NavLink className="m-10 text-purpleCustom" to="/">
        HOME
      </NavLink>
      <NavLink className="m-8 hover:text-purpleCustom" to="/projects">
        PROJECTS
      </NavLink>
      <NavLink className="m-8 hover:text-purpleCustom" to="/about">
        ABOUT
      </NavLink>
      <NavLink className="m-8 hover:text-purpleCustom" to="/contact">
        CONTACT
      </NavLink>
    </div>
  );
};

const LogoImg = () => {
  return (
    <img
      className="hover:cursor-pointer hidden md:block  ml-auto mr-auto mt-auto mb-auto   md:ml-7  h-12 rounded-full z-50 "
      src={Logo}
      alt="logo"
    ></img>
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
        <LogoImg />
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <div className=" md:hidden lg:hidden xl:hidden  m-auto text-white font-bold">
          <button onClick={toggleMenu}>
            {!isOpen && <Menu size={"40px"} />}
          </button>
          <button className="" onClick={toggleMenu}>
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
