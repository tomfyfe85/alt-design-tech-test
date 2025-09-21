interface ServiceCardProps {
  title: string;
  description: string;
  icon: {
    default: string; // purple/default icon path
    hover: string; // white/hover icon path
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
    <div
      className={`absolute bg-white hover:bg-[#F4207B]  text-gray-800 hover:text-white rounded-lg p-6 shadow-lg transition-all duration-300 group`}
      style={{
        width: "284px",
        height: "345px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "52px",
          left: "118px",
          width: "50.19px",
          height: "44px",
        }}
      >
        <img
          src={icon.default}
          alt="service icon"
          className="absolute inset-0 w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-300"
        />
        {/* White icon - hidden by default, visible on hover */}
        <img
          src={icon.hover}
          alt="service icon"
          className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      {/* </div> */}

      <h3
        className="text-[#F4207B] group-hover:text-white mb-6 transition-colors duration-300"
        style={{
          position: "absolute",

          fontFamily: "Inter",
          fontWeight: 500,
          fontSize: "21px",
          lineHeight: "45px",
          letterSpacing: "0%",
          width: "244px",
          height: "px",
          top: "100px",
          left: "23px",
          textAlign: "center",
        }}
      >
        {title}
      </h3>

      <p
        className="text-gray-700 group-hover:text-white text-center leading-relaxed mb-6 px-4 transition-colors duration-300"
        style={{
          position: "absolute",

          fontFamily: "IBM Plex Mono",
          fontWeight: "350",
          fontSize: "12px",
          lineHeight: "23px",
          letterSpacing: "0%",
          width: "270px",
          height: "115px",
          top: "149px",
          left: "7px",
          textAlign: "center",
        }}
      >
        {description}
      </p>

      <div className="text-center">
        <a
          href={learnMoreLink}
          className="text-pink-500 group-hover:text-white text-sm font-medium underline hover:no-underline transition-all"
          style={{
            position: "absolute",

            fontSize: "12px",
            fontWeight: 300,
            width: "235px",
            height: "23px",
            top: "285px",
            left: "22px",
            textAlign: "center",
            letterSpacing: "0.05em",
          }}
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
