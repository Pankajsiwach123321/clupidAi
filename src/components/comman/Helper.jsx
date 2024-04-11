import blotshift from "../../assets/images/boltshift.webp";
import lighbox from "../../assets/images/lightbox.webp";
import featherdev from "../../assets/images/featherdev.webp";
import spherule from "../../assets/images/spherule.webp";
import globalbank from "../../assets/images/globalbank.webp";
import {
  FacebookIcon,
  GridlineBox,
  InstaIcon,
  ServiceDeepfake,
  ServiceGeneration,
  ServiceUtilities,
  ServiceVerification,
  TelegramIcon,
  TwiterIcon,
} from "./Icon";

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
    to: "#home",
  },
  {
    linkname: "Why us",
    to: "#whyus",
  },
  {
    linkname: "Services",
    to: "#service",
  },
  {
    linkname: "Faqs",
    to: "#faqs",
  },
];
export const Includedata = [
  {
    description:
      "Calculator, Quicklinks, Snippets, Window Management, and many more core features",
  },
  {
    description: "More than 1000 Extensions",
  },
  {
    description: "Custom Extensions",
  },
  {
    description: "Developer Tools",
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
  {
    companyLogo: blotshift,
    alt: "blotshift",
    link: "https://ecommerce-excite.vercel.app/",
  },
  {
    companyLogo: lighbox,
    alt: "lighbox",
    link: "https://lokeshdhakar.com/projects/lightbox2/",
  },
  {
    companyLogo: featherdev,
    alt: "featherdev",
    link: "https://featherdev.com/",
  },
  {
    companyLogo: spherule,
    alt: "spherule",
    link: "https://spherule.org/",
  },
  {
    companyLogo: globalbank,
    alt: "globalbank",
    link: "https://www.globalbank.com.pa/",
  },
  {
    companyLogo: blotshift,
    alt: "blotshift",
    none: "slg:hidden",
    link: "https://ecommerce-excite.vercel.app/",
  },
  {
    companyLogo: lighbox,
    alt: "lighbox",
    none: "slg:hidden",
    link: "https://lokeshdhakar.com/projects/lightbox2/",
  },
  {
    companyLogo: featherdev,
    alt: "featherdev",
    none: "slg:hidden",
    link: "https://featherdev.com/",
  },
  {
    companyLogo: spherule,
    alt: "spherule",
    none: "slg:hidden",
    link: "https://spherule.org/",
  },
  { companyLogo: globalbank, alt: "globalbank", none: "slg:hidden" },
  {
    companyLogo: lighbox,
    alt: "lighbox",
    none: "slg:hidden",
    link: "https://lokeshdhakar.com/projects/lightbox2/",
  },
  {
    companyLogo: featherdev,
    alt: "featherdev",
    none: "slg:hidden",
    link: "https://featherdev.com/",
  },
  {
    companyLogo: spherule,
    alt: "spherule",
    none: "slg:hidden",
    link: "https://spherule.org/",
  },
  {
    companyLogo: globalbank,
    alt: "globalbank",
    none: "slg:hidden",
    link: "https://www.globalbank.com.pa/",
  },
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
    paraWidth:'max-w-[425px]'
  },
];
export const Enterpreneurdata = [
  {
    description: "Everything in Free",
  },
  {
    description: "Raycast AI",
  },
  {
    description: "Cloud Sync",
  },
  {
    description: "Custom Themes",
  },
  {
    description: "Unlimited Clipboard History",
  },
];

export const Business = [
  {
    description: "Everything in Pro",
  },
  {
    description: "Unlimited Shared Commands",
  },
  {
    description: "Unlimited Shared Quicklinks",
  },
  {
    description: "Unlimited Shared Snippets",
  },
  {
    description: "Unlimited Team Members",
  },
];
export const accordionData = [
  {
    id: 1,
    title: "How do you handle my data?",
    description:
      "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence.",
  },
  {
    id: 2,
    title: "What's the difference between the Pro and Team plan?",
    description:
      "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence.",
  },
  {
    id: 3,
    title: "Can I use my own OpenAI API key?",
    description:
      "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence.",
  },
  {
    id: 4,
    title: "Which model do you use for Raycast AI?",
    description:
      "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence.",
  },
  {
    id: 5,
    title: "Can I upgrade my Teams subscription to use GPT-4?",
    description:
      "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence.",
  },
  {
    id: 6,
    title: "Does Raycast have a Student Program?",
    description:
      "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence.",
  },
];
export const linkData = [
  { path: "#features", link: "features" },
  { path: "#service", link: "Services" },
  { path: "#pricing", link: "pricing" },
  { path: "#howtouse", link: "how to use" },
];
export const icons = [
  { link: "http://www.twitter.com", logo: <TwiterIcon /> },
  { link: "http://www.instagram.com", logo: <InstaIcon /> },
  { link: "http://www.telegram.com", logo: <TelegramIcon /> },
  { link: "http://www.facebook.com", logo: <FacebookIcon /> },
];
