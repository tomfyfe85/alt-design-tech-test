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
    <div className="bg-white hover:bg-[#F4207B] text-gray-800 hover:text-white rounded-[20px] p-6 shadow-lg transition-all duration-150 group cursor-pointer hover:-translate-y-[10px] w-[570px] h-[690px] flex flex-col items-center">
      {/* Icon Container */}
      <div className="relative w-[105px] h-[90px] mt-[75px] mb-4">
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
      <h3 className="text-[#F4207B] group-hover:text-white font-inter font-medium text-[45px] leading-[45px] text-center w-[500px] mb-10 transition-colors duration-100">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 group-hover:text-white font-mono font-extralight text-[23px] leading-[42px] text-center w-[430px] mb-14 transition-colors duration-100">
        {description}
      </p>

      {/* Learn More Link */}
      <a
        href={learnMoreLink}
        className="text-[#F4207B] group-hover:text-white text-[16px] font-light underline text-center transition-all duration-100"
      >
        Learn More
      </a>
    </div>
  );
}
