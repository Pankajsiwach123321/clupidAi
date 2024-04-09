import blotshift from "../../assets/images/boltshift.webp";
import lighbox from "../../assets/images/lightbox.webp";
import featherdev from "../../assets/images/featherdev.webp";
import spherule from "../../assets/images/spherule.webp";
import globalbank from "../../assets/images/globalbank.webp";
import { GridlineBox, ServiceDeepfake, ServiceGeneration,    ServiceUtilities, ServiceVerification } from "./Icon";

export const crmData = [
  {
    icon: <GridlineBox />,
    title: "Hyper Realistic AI Content",
    para: "Advanced generation techniques helps us generate the best AI generation within the industry",
  },
  {
    icon: <GridlineBox />,
    title: "Streamlined Workflow",
    para: "Enjoy a seamless and swift workflow pipeline with CUPID AI, simplifying your content creation and management processes.",
  },
  {
    icon: <GridlineBox />,
    title: "Universal verification",
    para: "Verify your model anywhere, anytime with our AI content generation methods.",
  },
];
export const navLink = [
  {
    linkname: "Home",
    to: "#Home",
  },
  {
    linkname: "Why us",
    to: "#Whyus",
  },
  {
    linkname: "Services",
    to: "#Services",
  },
  {
    linkname: "Faqs",
    to: "#Faqs",
  },
];

export const CommonButton = (props) => {
  return (
    <button
      className={`py-2.5 sm:py-3.5 px-[25px] rounded-full text-white hover:shadow-gradientMix transition-all duration-300 ease-linear bg-btngradient font-medium text-xl leading-6 flex ${props.custumclass}`}
    >
      {props.name}
    </button>
  );
};
export const companiesData = [
  { companyLogo: blotshift, alt: "blotshift" },
  { companyLogo: lighbox, alt: "lighbox" },
  { companyLogo: featherdev, alt: "featherdev" },
  { companyLogo: spherule, alt: "spherule" },
  { companyLogo: globalbank, alt: "globalbank" },
  { companyLogo: blotshift, alt: "blotshift", none: "slg:hidden" },
  { companyLogo: lighbox, alt: "lighbox", none: "slg:hidden" },
  { companyLogo: featherdev, alt: "featherdev", none: "slg:hidden" },
  { companyLogo: spherule, alt: "spherule", none: "slg:hidden" },
  { companyLogo: globalbank, alt: "globalbank", none: "slg:hidden" },
  { companyLogo: lighbox, alt: "lighbox", none: "slg:hidden" },
  { companyLogo: featherdev, alt: "featherdev", none: "slg:hidden" },
  { companyLogo: spherule, alt: "spherule", none: "slg:hidden" },
  { companyLogo: globalbank, alt: "globalbank", none: "slg:hidden" },
];

export const serviceCardItems = [
  {
    id: 1,
    svges: <ServiceDeepfake />,
    heading: "Content Deepfakes",
    paragraph:
      "Seize control and elevate your business with our hyper-realistic AI description creation. Immerse in a blend of artistry and technology that promises unparalleled authenticity.",
    width: "sm:w-7/12 md:max-w-[526px]",
  },
  {
    id: 2,
    svges: <ServiceVerification />,
    heading: "AI Verifications",
    paragraph:
      "Streamline your workflow with our AI verification system that boasts a stellar 80% first-time success rate.",
    width: "sm:w-5/12 lg:min-w-[416px] ",
  },
  {
    id: 3,
    svges: <ServiceUtilities />,
    heading: "Content Utilities",
    paragraph:
      "Consolidate your resources with our comprehensive description utilities. Access everything you need from a single dashboard.",
    width: "sm:w-5/12 lg:min-w-[416px]",
  },
  {
    id: 4,
    svges: <ServiceGeneration />,
    heading: "Image Generation",
    paragraph:
      "Transform productivity with our sophisticated automation tools. Let technology work tirelessly behind the scenes, so your creativity never has to pause.",
    width: "sm:w-7/12 md:max-w-[526px]",
  },
];