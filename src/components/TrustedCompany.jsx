import { companiesData } from "./common/Helper";

const TrustedCompany = () => {
  return (
    <div
      id="features"
      className="xl:pb-6 pb-5 -mt-24 overflow-hidden md:pb-10 sm:-mt-40 md:-mt-64 bg-bodymain "
    >
      <div className="max-w-[1112px] mx-auto px-3 md:pt-7  md:mt-8 md:pb-10 mb-8">
        <p className="  font-normal lg:text-xl sm:text-lg text-base leading-[30px] text-center text-gray-white-200">
          Trusted by 4,000+ companies
        </p>
        <div className="flex items-center justify-center px-3 mt-8 gap-7 xl:gap-12 max-slg:animate-moveX max-sm:animate-moveSmX">
          {companiesData.map((obj, i) => (
            <a
              key={i}
              className={`min-w-40 lg:min-w-44 group ${obj.none} `}
              href={obj.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className=" min-w-40 lg:min-w-44   object-contain  lg:min-h-12">
                {obj.companyLogo}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompany;
