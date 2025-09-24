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

  return (
    <nav
      className={`absolute top-0 left-0 z-20 text-white w-full ${backGroundClass}`}
    >
      <div
        className={`w-full pt-16 pb-8 ${borderClass}`}
        style={{
          paddingLeft: "clamp(60px, 6vw, 120px)",
          paddingRight: "clamp(60px, 6vw, 120px)",
        }}
      >
        {/* Top row */}
        <div className="flex justify-between items-center mb-4">
          {/* Left side - Logo and contact info */}
          <div className="flex items-center gap-[-74px]">
            <img
              src="/svg/dns-white1.svg"
              alt="DNS Document Network Services"
              style={{
                width: "clamp(150px, 20vw, 266px)",
                height: "clamp(100px, 12vw, 200px)",
              }}
            />
            <div className="flex items-center gap-8 -mt-[146px]">
              <a
                href="tel:08450340895"
                className="text-white text-lg md:text-xl lg:text-2xl font-mono font-medium hover:opacity-80 transition-opacity mt-[0.5vh]"
                style={{ marginLeft: "clamp(60px, 12vw, 180px)" }}
              >
                0845 034 0895
              </a>
              <a
                href="/about"
                className="text-white text-lg md:text-xl lg:text-2xl font-mono font-medium hover:opacity-80 transition-opacity mt-[0.5vh]"
                style={{ marginLeft: "clamp(45px, 8vw, 140px)" }}
              >
                About us
              </a>
              <a
                href="/careers"
                className="text-white text-lg md:text-xl lg:text-2xl font-mono font-medium hover:opacity-80 transition-opacity mt-[0.5vh]"
                style={{ marginLeft: "clamp(45px, 8vw, 140px)" }}
              >
                Careers
              </a>
            </div>
          </div>

          {/* Right side - Support and Call Me Back button */}
          <div className="flex items-center gap-4 lg:gap-6">
            <a
              href="/support"
              className="text-white text-lg lg:text-xl font-mono font-medium hover:opacity-80 transition-opacity"
            >
              Request support
            </a>
            <button
              className="bg-white text-[#31297D] px-6 lg:px-10 py-3 lg:py-5 rounded-lg font-bold text-lg lg:text-2xl hover:opacity-80 transition-opacity"
              onClick={() => {
                const messageField = document.querySelector(
                  'textarea[name="message"]'
                ) as HTMLTextAreaElement;
                if (messageField) {
                  messageField.value = "CALL ME!";
                  messageField.dispatchEvent(
                    new Event("input", { bubbles: true })
                  );
                }

                const formElement = document.getElementById("contact-form");
                if (formElement) {
                  formElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }

                setTimeout(() => {
                  const event = new CustomEvent("showCallMeBackToast");
                  window.dispatchEvent(event);
                }, 800);
              }}
            >
              Call Me Back
            </button>
          </div>
        </div>

        {/* Bottom row - Main navigation */}
        <div
          className="absolute flex items-center gap-4 lg:gap-8"
          style={{
            top: "clamp(80px, 10vh, 120px)",
            left: "clamp(60px, 6vw, 120px)",
          }}
        >
          <div style={{ width: "clamp(150px, 20vw, 300px)" }}></div>{" "}
          {/* Spacer to align with logo */}
          <div className="flex items-center gap-0 ml-4 lg:ml-8">
            <a
              href="/services"
              className="text-white text-xl lg:text-3xl xl:text-[2.125rem] font-bold hover:opacity-80 transition-opacity"
              style={{ marginLeft: "clamp(60px, 12vw, 200px)" }}
            >
              Services
            </a>
            <a
              href="/case-studies"
              className="text-white text-xl lg:text-3xl xl:text-[2.125rem] font-bold hover:opacity-80 transition-opacity"
              style={{ marginLeft: "clamp(60px, 12vw, 200px)" }}
            >
              Case Studies
            </a>
            <a
              href="/insights"
              className="text-white text-xl lg:text-3xl xl:text-[2.125rem] font-bold hover:opacity-80 transition-opacity"
              style={{ marginLeft: "clamp(60px, 12vw, 200px)" }}
            >
              Insights
            </a>
            <a
              href="/contact"
              className="text-white text-xl lg:text-3xl xl:text-[2.125rem] font-bold hover:opacity-80 transition-opacity"
              style={{ marginLeft: "clamp(60px, 12vw, 200px)" }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
