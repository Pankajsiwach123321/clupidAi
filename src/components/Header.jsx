import React from "react";
import Navbar from "./Navbar";
import Mainheader from "./Mainheader";
import dashBoardImg from "../assets/images/dashboard.webp";
import { HeroGradiant } from "./comman/Icon";

const Header = () => {
  return (
    <header>
      <div className=" lg:min-h-[781px] min-h-[667px] overflow-hidden  relative ">
        <span className="absolute bottom-0 z-0 left-0  w-full h-full">
          <HeroGradiant />
        </span>
        <Navbar />
        <Mainheader />
      </div>
      <img
        src={dashBoardImg}
        alt="dashBoardImg"
        className="mx-auto max-sm:px-3 lg:-translate-y-[43%] -translate-y-[55%] rounded-md  lg:w-[915px] shadow-[40.65px_-0.99px_8.92px_0_#0003] md:w-[600px] max-h-[400px] md:max-h-[687px] xl:h-[687px] relative z-10"
      />
    </header>
  );
};

export default Header;
