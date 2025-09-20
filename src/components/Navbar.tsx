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

  return (
    <nav
      className={`relative z-10 text-white max-w-[1512px] mx-auto ${backGroundClass}`}
    >
      <div className="border-b border-purple-600 py-2 h-[120px]">
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
      </div>
    </nav>
  );
};

export default Navbar;

//   return (
//     <nav className={`relative z-10 text-white ${variants[variant]}`}>
//       {/* Top row */}
//       <div className="border-b border-purple-600 py-2">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between text-sm">
//           <a href="tel:08450340895" className="hover:text-purple-200">
//             0845 034 0895
//           </a>
//           <div className="space-x-6">
//             <a href="/about" className="hover:text-purple-200">About us</a>
//             <a href="/careers" className="hover:text-purple-200">Careers</a>
//             <a href="/support" className="hover:text-purple-200">Request support</a>
//           </div>
//         </div>
//       </div>

//       {/* Main nav row */}
//       <div className="py-4">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//           {/* DNS Logo */}
//           <div className="flex items-center">
//             <img src="/path-to-dns-logo.png" alt="DNS" className="h-8" />
//           </div>

//           {/* Main navigation */}
//           <nav className="hidden md:flex space-x-8">
//             <a href="/services" className="hover:text-purple-200">Services</a>
//             <a href="/case-studies" className="hover:text-purple-200">Case Studies</a>
//             <a href="/insights" className="hover:text-purple-200">Insights</a>
//             <a href="/contact" className="hover:text-purple-200">Contact</a>
//           </nav>

//           {/* Call Me Back button */}
//           <button className="bg-white text-purple-700 px-6 py-2 rounded hover:bg-purple-50 font-medium">
//             Call Me Back
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };
