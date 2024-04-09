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
