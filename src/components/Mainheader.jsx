import React from "react";
import { CommonButton } from "./comman/Helper";
const Mainheader = () => {
  return (
    <div className="relative z-10">
      <div className=" max-w-content mx-auto px-3 ">
        <div className="flex flex-col w-full justify-center items-center max-w-[899px] px-3 mx-auto relative z-10 mt-16 pt-2">
          <h2 className="font-semibold text-center text-white lg:text-7xl  md:text-5xl text-3xl md:!leading-[65px] leading-[44px]">
            Unleash{" "}
            <span className="text-transparent font-bold bg-headerTextgradient bg-clip-text">
              Creativity
            </span>
            , Effortlessly
          </h2>
          <p className="mt-2 text-base font-normal text-center max-w-[623px] text-white md:leading-6 sm:text-lg md:text-xl ">
            Elevate your agency's output with state-of-the-art AI, engineered to
            innovate at the speed of thought.
          </p>
          <CommonButton custumclass="mt-5" name="Try Now" />
        </div>
      </div>
    </div>
  );
};

export default Mainheader;
