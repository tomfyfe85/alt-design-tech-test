interface ServiceCardProps {
  title: string;
  description: string;
  icon: {
    default: string;
    hover: string;
  };
  learnMoreLink: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  learnMoreLink,
}: ServiceCardProps) {
  return (
    <div className="bg-white hover:bg-[#F4207B] text-gray-800 hover:text-white rounded-[10px] p-6 shadow-lg transition-all duration-150 group cursor-pointer hover:-translate-y-[10px] w-[572px] h-[610px] flex flex-col items-center">
      {/* Icon Container */}
      <div className="relative w-[80px] h-[90px] mt-[75px] mb-8">
        <img
          src={icon.default}
          alt="service icon"
          className="absolute inset-0 w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-300"
        />
        <img
          src={icon.hover}
          alt="service icon"
          className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Title */}
      <h3 className="text-[#F4207B] group-hover:text-white font-inter font-medium text-[21px] leading-[45px] text-center w-[244px] mb-6 transition-colors duration-100">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 group-hover:text-white font-mono font-light text-[12px] leading-[23px] text-center w-[270px] h-[115px] mb-6 transition-colors duration-100">
        {description}
      </p>

      {/* Learn More Link */}
      <a
        href={learnMoreLink}
        className="text-pink-500 group-hover:text-white text-[12px] font-light underline hover:no-underline text-center tracking-wider transition-all duration-100"
      >
        Learn More
      </a>
    </div>
  );
}
