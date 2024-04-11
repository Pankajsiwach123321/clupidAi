import React from "react";
import { NavLogo } from "./comman/Icon";
import { CommonButton, navLink } from "./comman/Helper";
import { useOverflowHidden } from "./comman/Hooks";
import { Twirl as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useOverflowHidden(false);
  return (
    <div className="max-w-content px-3 mx-auto pt-10 relative  ">
      <div className="  after:rounded-full navbarS relative">
        <nav className=" py-4 bg-navBg   rounded-full px-[10px]">
          <div className=" flex items-center justify-between">
            <ul>
              <li>
                <a href="#">
                  <NavLogo />
                </a>
              </li>
            </ul>
            <ul
              className={` ${
                isOpen ? "right-0" : "-right-full"
              } flex max-lg:fixed z-10 max-lg:top-0 max-lg:bg-black md:bg-full max-lg:justify-center bg-cover max-lg:h-full max-lg:w-full max-lg:z-30 max-lg:duration-300 max-lg:flex-col items-center gap-7`}
            >
              {navLink.map((data, index) => (
                <li key={index}>
                  <a
                    onClick={() => setOpen(false)}
                    href={data.to}
                    className=" navlink duration-300 text-white font-normal text-xl leading-6"
                  >
                    {data.linkname}
                  </a>
                </li>
              ))}
              <li className=" lg:hidden">
                <button className="font-normal border-0 text-xl leading-[15px] duration-300 text-white hover:text-[#B302B1]">
                  Log in
                </button>
              </li>
              <li className=" lg:hidden">
                <CommonButton name="Sing up" />
              </li>
            </ul>
            <ul className=" hidden items-center gap-5 lg:flex">
              <button className="font-normal border-0 text-xl leading-[15px] duration-300 text-white hover:text-[#B302B1]">
                Log in
              </button>
              <CommonButton name="Sing up" />
            </ul>
            <div className="relative z-[40] mx-2 sm:mx-3 lg:hidden">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={26}
                rounded
                distance="sm"
                direction="right"
                duration={0.5}
                color="#FFF"
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
