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
    <nav className={`sticky z-20 text-white w-full ${backGroundClass}`}>
      <div className={`w-full pt-10 pb-8 ${borderClass}`}>
        {/* Top row */}
        <div className="flex justify-between items-center mb-4">
          {/* Left side - Logo and contact info */}
          <div className="flex">
            <img
              src="/svg/dns-white1.svg"
              alt="DNS Document Network Services"
              className="w-66 h-46 ml-22 mt-3"
            />
            <div className="flex">
              <a
                href="tel:08450340895"
                className="text-white text-[27px] font-mono font-medium hover:opacity-80 transition-opacity ml-16 mt-5"
              >
                0845 034 0895
              </a>
              <a
                href="/about"
                className="text-white text-[27px] font-mono font-medium hover:opacity-80 transition-opacity ml-16 mt-5"
              >
                About us
              </a>

              <a
                href="/careers"
                className="text-white text-[27px] font-mono font-medium hover:opacity-80 transition-opacity ml-16 mt-5"
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
          className="flex items-center"
          style={{
            marginTop: "clamp(20px, 3vh, 40px)",
            marginLeft: "clamp(20px, 4vw, 80px)",
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
