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
      <div className={`container mx-auto px-4 lg:px-8 py-8 ${borderClass}`}>
        {/* Top row */}
        <div className="flex justify-between items-center mb-4">
          {/* Left side - Logo and contact info */}
          <div className="flex items-center gap-8">
            <img
              src="/svg/dns-white1.svg"
              alt="DNS Document Network Services"
              className="w-72 h-40"
            />
            <div className="flex items-center gap-8">
              <a
                href="tel:08450340895"
                className="text-white text-xl font-mono font-medium hover:opacity-80 transition-opacity"
              >
                0845 034 0895
              </a>
              <a
                href="/about"
                className="text-white text-xl font-mono font-medium hover:opacity-80 transition-opacity"
              >
                About us
              </a>
              <a
                href="/careers"
                className="text-white text-xl font-mono font-medium hover:opacity-80 transition-opacity"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Right side - Support and Call Me Back button */}
          <div className="flex items-center gap-6">
            <a
              href="/support"
              className="text-white text-xl font-mono font-medium hover:opacity-80 transition-opacity"
            >
              Request support
            </a>
            <button
              className="bg-white text-[#31297D] px-10 py-5 rounded-lg font-bold text-2xl hover:opacity-80 transition-opacity"
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
        <div className="flex items-center gap-8">
          <div className="w-72"></div> {/* Spacer to align with logo */}
          <div className="flex items-center gap-10 ml-8">
            <a
              href="/services"
              className="text-white text-2xl font-bold hover:opacity-80 transition-opacity"
            >
              Services
            </a>
            <a
              href="/case-studies"
              className="text-white text-2xl font-bold hover:opacity-80 transition-opacity"
            >
              Case Studies
            </a>
            <a
              href="/insights"
              className="text-white text-2xl font-bold hover:opacity-80 transition-opacity"
            >
              Insights
            </a>
            <a
              href="/contact"
              className="text-white text-2xl font-bold hover:opacity-80 transition-opacity"
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
