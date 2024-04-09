import React from "react";
import Navbar from "./Navbar";
import Mainheader from "./Mainheader";
import dashBoardImg from "../assets/images/dashboardimage.webp";
import { HeroGradiant } from "./comman/Icon";

const Header = () => {
  return (
    <>
      <div className=" lg:min-h-[810px] min-h-[667px] overflow-hidden  relative ">
        <span className="absolute bottom-0 z-0 left-0  w-full h-full">
          <HeroGradiant />
        </span>
        <Navbar />
        <Mainheader />
      </div>
      <img
        src={dashBoardImg}
        alt="dashBoardImg"
        className="mx-auto lg:-translate-y-[43%] -translate-y-[55%]  pl-4 sm:pl-5 md:pl-8 lg:pl-12 lg:w-[1015px] md:w-[600px] max-h-[400px] md:max-h-[687px] relative z-10"
      />
    </>
  );
};

export default Header;
