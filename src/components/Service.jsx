import React from "react";
import ServiceCardlayout from "./ServiceCardlayout";
import { serviceCardItems } from "./common/Helper";

const Service = () => {
  return (
    <div>
      <div className="bg-[url(./assets/images/servicebg.webp)] bg-BgSize bg-center bg-no-repeat">
        <div
          id="service"
          className="py-10 xl:pt-24 pt-10 md:pt-16  lg:pb-20 md:py-16 lg:mb-3 bg-bg_gradient"
        >
          <div className="max-w-[966px] px-3 mx-auto lg:pt-1 ">
            <h2 className="font-bold text-center text-white lg:text-4xl sm:text-3xl2 text-3xl1 font-inter md:leading-12">
              Our Services
            </h2>
            <p className=" font-medium text-gray sm:text-xxl text-xl  text-center mx-auto leading-7 lg:max-w-[500px] md:pt-3 pt-2 lg:pt-5">
              Tweak anything and everything to ensure fits your business, not
              the other way around.
            </p>
            <div className="flex flex-row flex-wrap justify-center lg:gap-4  mt-1 -mx-3 sm:pt-5 lg:pt-12">
              {serviceCardItems.map((p) => (
                <ServiceCardlayout
                  key={p.id}
                  svg={p.svges}
                  head={p.heading}
                  para={p.paragraph}
                  width={p.width}
                  paraWidth={p.paraWidth}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
