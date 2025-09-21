type BackGroundColourVariant = "transparent" | "purple700";

interface NavbarProps {
  variant?: BackGroundColourVariant;
}

const Navbar = ({ variant = "transparent" }: NavbarProps) => {
  const variants = {
    transparent: "bg-transparent",
    purple700: "bg-purple-700",
  };

  const backGroundClass = variants[variant];

  const borderClass =
    variant === "transparent"
      ? ""
      : `border-b ${backGroundClass.replace("bg-", "border-")}`;

  const buttonVariants = {
    transparent: "bg-transparent border-2 border-white text-white",
    purple700: "bg-white text-purple-900",
  };

  const buttonClass = buttonVariants[variant];

  return (
    <nav
      className={`absolute top-0 left-0 right-0 z-20 text-white w-[1512px] mx-auto ${backGroundClass}`}
    >
      <div className={`py-2 h-[120px] ${borderClass}`}>
        <img
          srcSet="/DNS-White-Logo-1.png 4x"
          alt="DNS Document Network Services"
          className="absolute top-[32px] left-[40px] w-32 h-20"
        />
        <a
          href="tel:08450340895"
          className="absolute top-[31px] left-[206px] text-white text-[13px] hover:opacity-80"
          style={{
            fontFamily: "IBM Plex Mono",
            fontWeight: 500,
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          0845 034 0895
        </a>
        <a
          href="/about"
          className="absolute top-[31px] left-[341px] w-32 h-20 text-white text-[13px] hover:opacity-80"
          style={{
            fontFamily: "IBM Plex Mono",
            fontWeight: 500,
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          About us
        </a>
        <a
          href="/careers"
          className="absolute top-[31px] left-[437px] w-55 h-17 text-white text-[13px] hover:opacity-80"
          style={{
            fontFamily: "IBM Plex Mono",
            fontWeight: 500,
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          Careers
        </a>
        <a
          href="/support"
          className="absolute top-[31px] left-[1356px] w-117 h-17 text-white text-[13px] hover:opacity-80"
          style={{
            fontFamily: "IBM Plex Mono",
            fontWeight: 500,
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          Request support
        </a>
        <a
          href="/services"
          className="absolute top-[83px] left-[206px] text-white text-[18px] hover:opacity-80"
          style={{
            fontFamily: "Inter",
            fontWeight: 700,
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          Services
        </a>
        <a
          href="/case-studies"
          className="absolute top-[83px] left-[313px] text-white text-[18px] hover:opacity-80"
          style={{
            fontFamily: "Inter",
            fontWeight: 700,
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          Case Studies
        </a>
        <a
          href="/insights"
          className="absolute top-[83px] left-[460px] text-white text-[18px] hover:opacity-80"
          style={{
            fontFamily: "Inter",
            fontWeight: 700,
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          Insights
        </a>
        <a
          href="/contact"
          className="absolute top-[83px] left-[562px] text-white text-[18px] hover:opacity-80"
          style={{
            fontFamily: "Inter",
            fontWeight: 700,
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          Contact
        </a>
        <button
          className={`absolute top-[69px] left-[1308px] rounded-[5px] flex items-center justify-center hover:opacity-80 ${buttonClass}`}
          style={{
            width: "165px",
            height: "48px",
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "normal",
            letterSpacing: "0%",
          }}
          onClick={() => console.log("Call Me Back clicked")}
        >
          Call Me Back
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
