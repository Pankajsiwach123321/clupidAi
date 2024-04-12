import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { accordionData } from "./comman/Helper";
import { Arrow } from "./comman/Icon";

const Faq = () => {
  const [open, setOpen] = useState();
  const toggleAccordion = (index) => {
    setOpen(open === index ? true : index);
  };
  return (
    <div id="faqs" className=" px-3 mx-auto lg:mb-4 lg:pb-1 max-w-[700px]">
      <div className="pt-10 md:pt-16 lg:pt-24 xl:pt-72 lg:mt-1">
        <h2 className="text-4xl font-bold tracking-tighter text-white leading-11">
          FAQs
        </h2>
        <p className="pb-2 mt-5 text-lg leading-6 text-gray font-inter md:text-xl md:leading-7 tracking-tightest md:mt-6">
          Answers to the most frequently asked questions.
        </p>
        {accordionData.map((item, index) => (
          <Accordion
            key={index}
            className={`border-b border-white border-opacity-10 pb-5   ${
              item.id === 6 ? "border-0" : ""
            }`}
            open={open === index}
            icon={<Arrow id={index} open={open} />}
          >
            <AccordionHeader
              onClick={() => toggleAccordion(index)}
              className={`font-semibold text-white  text-2sm md:text-base pt-5 sm:pt-6 md:pt-8 text-start w-full  justify-between gap-3 border-0  mb-0.5   leading-6 pb-3 focus-visible:outline-none ${
                open === index ? "" : " "
              }`}
            >
              {item.title}
            </AccordionHeader>
            <AccordionBody className="py-2 !pt-0  pr-6 text-sm font-normal text-white opacity-70 md:text-sm sm:py-3">
              {item.description}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
