type BackGroundColourVariant = "transparent" | "purple700";

interface FooterProps {
  variant?: BackGroundColourVariant;
  className?: string;
}

const Footer = ({ variant = "transparent", className = "" }: FooterProps) => {
  const variants = {
    transparent: "bg-transparent",
    purple700: "bg-purple-700",
  };

  const backGroundClass = variants[variant];

  const textColorClass =
    variant === "transparent" ? "text-black" : "text-white";

  const borderClass =
    variant === "transparent"
      ? ""
      : `border-t ${backGroundClass.replace("bg-", "border-")}`;

  return (
    <footer
      className={`${textColorClass} ${backGroundClass} ${className}`}
      style={{
        position: "absolute",
        width: "1512px",
        height: "60px",
        top: "6021.33px",
        left: "0px",
        borderTop: "1px solid rgba(255, 255, 255, 0.3)"
      }}
    >
      <div
        className={`py-4 h-[60px] ${borderClass} flex items-center justify-between px-[40px]`}
      >
        <div
          className="text-white text-[12px]"
          style={{
            fontFamily: "IBM Plex Mono",
            fontWeight: 300,
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          Design & built by Alt
        </div>
        <div
          className="text-white text-[12px]"
          style={{
            fontFamily: "IBM Plex Mono",
            fontWeight: 300,
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          © Document Network Services Ltd 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
