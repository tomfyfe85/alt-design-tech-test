import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  learnMoreLink: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  learnMoreLink = "#",
}: ServiceCardProps) {
  return (
    <div
      className={`absolute bg-white hover:bg-pink-500 text-gray-800 hover:text-white rounded-lg p-6 shadow-lg transition-all duration-300 group`}
      style={{
        width: "284px",
        height: "345px",
        borderRadius: "10px",
      }}
    >
      <div className="flex justify-center mb-6">
        <div className="p-4 rounded-lg bg-pink-100 group-hover:bg-white/20 transition-all duration-300">
          <div className="text-pink-500 group-hover:text-white transition-colors duration-300 w-8 h-8">
            {icon}
          </div>
        </div>
      </div>

      <h3
        className="text-pink-500 group-hover:text-white font-bold text-center mb-6 transition-colors duration-300"
        style={{
          fontFamily: "Inter",
          fontWeight: 700,
          fontSize: "21px",
          lineHeight: "45px",
          letterSpacing: "0%",
        }}
      >
        {title}
      </h3>

      <p
        className="text-gray-700 group-hover:text-white text-center leading-relaxed mb-6 px-4 transition-colors duration-300"
        style={{
          fontFamily: "IBM Plex Mono",
          fontWeight: 100,
          fontSize: "12px",
          lineHeight: "23px",
          letterSpacing: "0%",
          //   width: "235px",
          //   height: "115px",

          //   textAlign: "center",
        }}
      >
        {description}
      </p>

      <div className="text-center">
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
      </div>
    </div>
  );
}
