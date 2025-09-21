import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  //   learnMoreLink: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: //   learnMoreLink = "#",
ServiceCardProps) {
  return (
    <div
      className={`absolute bg-white hover:bg-[#F4207B]  text-gray-800 hover:text-white rounded-lg p-6 shadow-lg transition-all duration-300 group`}
      style={{
        width: "284px",
        height: "345px",
        borderRadius: "10px",
      }}
    >
      {/* <div className="flex justify-center mb-6 mt-8"> */}

      <div
        style={{
          position: "absolute",
          top: "52px", // 52px down from card's top edge
          left: "118px", // 118px from card's left edge
          width: "50.19px",
          height: "44px",
        }}
      >
        {icon}
      </div>
      {/* </div> */}

      <h3
        className="text-[#F4207B] group-hover:text-white font-bold mb-6 transition-colors duration-300"
        style={{
          position: "absolute",

          fontFamily: "Inter",
          fontWeight: 100,
          fontSize: "21px",
          lineHeight: "45px",
          letterSpacing: "0%",
          width: "115px",
          height: "45px",
          top: "100px",
          left: "87px",
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
          left: "10px",
          textAlign: "center",
        }}
      >
        {description}
      </p>

      {/* <div className="text-center">
        <a
          href={learnMoreLink}
          className="text-pink-500 group-hover:text-white text-sm font-medium underline hover:no-underline transition-all"
          style={{
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          Learn More
        </a>
      </div> */}
    </div>
  );
}
