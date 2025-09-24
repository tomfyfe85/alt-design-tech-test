import { useState, useEffect } from "react";
import ServiceCard from "../src/components/ServiceCard";
import VideoSection from "../src/components/VideoSection";
import TestimonialCarousel from "../src/components/TestimonialCarousel";
import Toast from "../src/components/Toast";

interface FormData {
  name: string;
  email: string;
  telephone: string;
  company: string;
  message: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
  backgroundImage: string;
}

interface LandingPageProps {
  faqs: FAQ[];
  testimonials: Testimonial[];
}

export default function LandingPage({ faqs, testimonials }: LandingPageProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    telephone: "",
    company: "",
    message: "",
  });

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "warning";
  } | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const displayFAQs = faqs.slice(0, 9);

  useEffect(() => {
    const handleCallMeBackToast = () => {
      setToast({
        message:
          "Enter 'CALL ME!' in 'I need help with' and someone will get back to you soon",
        type: "success",
      });

      setTimeout(() => {
        const toastEl = document.querySelector(
          '[style*="fadeIn"]'
        ) as HTMLElement;
        if (toastEl) {
          toastEl.style.animation = "fadeOut 0.5s ease-out forwards";
        }
      }, 4000);

      setTimeout(() => setToast(null), 4500);
    };

    window.addEventListener("showCallMeBackToast", handleCallMeBackToast);

    return () => {
      window.removeEventListener("showCallMeBackToast", handleCallMeBackToast);
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
      telephone: "",
      company: "",
      message: "",
    });

    setToast({
      message: "Form filled out successfully!",
      type: "success",
    });

    setTimeout(() => setToast(null), 3000);
  };

  const toggleFAQ = (faqId: number) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidUKPhone = (phone: string) => {
    const ukPhoneRegex =
      /^(?:(?:\+44)|(?:0))(?:\d{2}\s?\d{4}\s?\d{4}|\d{3}\s?\d{3}\s?\d{4}|\d{4}\s?\d{6}|\d{5}\s?\d{5})$/;
    const cleanPhone = phone.replace(/\s/g, "");
    return ukPhoneRegex.test(cleanPhone);
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    isValidEmail(formData.email) &&
    formData.telephone &&
    isValidUKPhone(formData.telephone) &&
    formData.company &&
    formData.message;
  return (
    <>
      {toast && <Toast message={toast.message} type={toast.type} />}
      <section className="relative w-full min-h-screen bg-[#31297D] flex items-center overflow-hidden">
        {/* Background geometric pattern */}
        <div className="absolute inset-0 w-full h-full opacity-100 bg-no-repeat bg-[position:103%_-10%] bg-[length:2400px] bg-[url('/svg/Geometric1.svg')]" />

        <div className="relative z-10 w-full flex justify-between items-center px-20 pt-32 pb-16">
          {/* Left side - Text content */}
          <div className="flex-1 max-w-none pr-16 mt-[-652px] ml-[155px]">
            <h1 className="text-white text-[120px] font-inter font-bold leading-[1.0] mb-10 tracking-tight">
              We make your
              <br />
              IT work easy.
            </h1>
            <p className="text-white text-[28px] font-mono leading-[1.6] max-w-5xl opacity-90 mt-[19px]">
              Recognising your frustrations with your print environment,
              <br />
              IT services, document management & communications and
              <br />
              finding a solution to overcome them.
            </p>
          </div>

          {/* Right side - Laptop and router image */}
          <div className="flex-1 flex justify-end items-center pr-[160px] mt-[-190px]">
            <img
              src="/svg/laptop-router.svg"
              alt="Laptop and Router"
              className="w-[1192px] h-[1092px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>
      {/* <div style={{ position: "absolute", top: "662px", left: "132px" }}>
        <ServiceCard
          title="IT Services"
          description="Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them."
          icon={{
            default: "/service-card-images/it-purple.png",
            hover: "/service-card-images/it-white.png",
          }}
          learnMoreLink="/it-services"
        />
      </div>

      <div style={{ position: "absolute", top: "662px", left: "450px" }}>
        <ServiceCard
          title="Managed Print Services"
          description="Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them."
          icon={{
            default: "/service-card-images/it-purple.png",
            hover: "/service-card-images/it-white.png",
          }}
          learnMoreLink="/managed-print-services"
        />
      </div>

      <div style={{ position: "absolute", top: "662px", left: "765px" }}>
        <ServiceCard
          title="Document Management"
          description="Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them."
          icon={{
            default: "/service-card-images/it-purple.png",
            hover: "/service-card-images/it-white.png",
          }}
          learnMoreLink="/document-management"
        />
      </div>

      <div style={{ position: "absolute", top: "662px", left: "1080px" }}>
        <ServiceCard
          title="Communications"
          description="Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them."
          icon={{
            default: "/service-card-images/communications-purple.png",
            hover: "/service-card-images/communications-white.png",
          }}
          learnMoreLink="/communications"
        />
      </div> */}
      <div style={{ position: "absolute", top: "1150px", left: "200px" }}>
        <img
          src="/clients-Group64.png"
          alt="Our clients include Xerox, Microsoft, HP, 3CX, VIPRE, and Fortinet"
          style={{ width: "1115px", height: "111px" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1329px",
          left: "-112px",
          zIndex: 2,
        }}
      >
        <VideoSection />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1329px",
          left: "1036px",
          width: "468px",
          height: "552px",
          backgroundColor: "#C92C93",
          zIndex: 1,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "30px 40px 40px 40px",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "46px",
              letterSpacing: "0%",
              color: "white",
              textAlign: "center",
              margin: "0 0 20px 0",
            }}
          >
            Turning process frustration into progress since 1996
          </h2>
          <p
            style={{
              fontFamily: "IBM Plex Mono",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "26px",
              letterSpacing: "0%",
              color: "white",
              textAlign: "center",
              margin: 0,
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            Recognising your frustrations with your print environment, IT
            services, document management & communications and finding a
            solution to overcome them. Recognising your frustrations with your
            print environment, IT services, document management & communications
            and finding a solution to overcome them.
          </p>
        </div>
      </div>
      <section>
        <div
          style={{
            position: "absolute",
            top: "2046px",
            left: "134px",
            width: "800px",
            height: "150px",
          }}
        >
          <h1
            style={{
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "58px",
              letterSpacing: "0%",
              margin: 0,
            }}
          >
            Don't just take our word for it...
          </h1>
        </div>
        <div
          style={{
            position: "absolute",
            top: "2036px",
            left: "1000px",
            width: "381px",
            height: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <a
            href="/case-studies"
            style={{
              fontFamily: "IBM Plex Mono",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "26px",
              letterSpacing: "0%",
              color: "black",
              textDecoration: "underline",
            }}
          >
            View all Case Studies
          </a>
        </div>

        <div
          style={{
            position: "absolute",
            top: "2408px",
            left: "0px",
            width: "1512px",
            height: "1960px",
            backgroundColor: "#000000",
            opacity: 1,
            zIndex: 1,
          }}
        />

        <img
          src="/Geometric2.png"
          alt="Geometric2"
          style={{
            position: "absolute",
            width: "1348px",
            height: "1501.497802734375px",
            top: "2800px",
            left: "310px",
            transform: "rotate(0deg)",
            opacity: 150,
            zIndex: 5,
          }}
        />

        <TestimonialCarousel testimonials={testimonials} />
      </section>

      <div
        style={{
          position: "absolute",
          top: "2850px",
          left: "250px",
          width: "1018px",
          height: "296px",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: "20px",
          color: "white",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontFamily: "Inter",
            fontSize: "35px",
            fontWeight: "bold",
            marginBottom: "35px",
            textAlign: "center",
          }}
        >
          The business process problem solvers.
        </h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: "15px", // adjust as needed
                fontWeight: 400,
                lineHeight: "2.2",
              }}
            >
              Recognising your frustrations with your print environment, IT
              services, document management & communications and finding a
              solution to overcome them... Recognising your frustrations with
              your print environment, IT services, document management &
              communications and finding a solution to overcome them...
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: "2.2",
              }}
            >
              Recognising your frustrations with your print environment, IT
              services, document management & communications and finding a
              solution to overcome them... Recognising your frustrations with
              your print environment, IT services, document management &
              communications and finding a solution to overcome them...
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "3354px",
          left: "133px",
          width: "1248px",
          height: "853px",
          display: "flex",
          zIndex: 10,
        }}
      >
        <div style={{ width: "50%", padding: "20px" }}>
          <h2
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "400px",
              height: "58px",
              opacity: 1,
              transform: "rotate(0deg)",
              color: "white",
              fontFamily: "Inter",
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "58px",
              letterSpacing: "0%",
              marginBottom: "20px",
              whiteSpace: "nowrap",
            }}
          >
            Insights & News
          </h2>
          <a
            href="/blog/microsoft-loop"
            style={{
              position: "absolute",
              top: "89px",
              left: "3px",
              width: "602px",
              height: "328px",
              display: "block",
              textDecoration: "none",
              zIndex: 2,
              cursor: "pointer",
              transition: "transform 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            <img
              src="/ms-loop.jpg"
              alt="MS Loop"
              style={{
                width: "602px",
                height: "245px",
                borderRadius: "10px",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
            />

            <div
              style={{
                position: "absolute",
                width: "96px",
                height: "30px",
                top: "263px",
                left: "0px",
                opacity: 1,
                transform: "rotate(0deg)",
                fontFamily: "IBM Plex Mono",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "26px",
                letterSpacing: "0%",
                color: "white",
              }}
            >
              15/06/2024
            </div>

            <div
              style={{
                position: "absolute",
                width: "589px",
                height: "33px",
                top: "295px",
                left: "0px",
                opacity: 1,
                transform: "rotate(0deg)",
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "25px",
                lineHeight: "33px",
                letterSpacing: "0%",
                color: "white",
              }}
            >
              What is Microsoft Loop and how does it work
            </div>
          </a>

          <a
            href="/blog/xerox"
            style={{
              position: "absolute",
              top: "477px",
              left: "0px",
              width: "289px",
              height: "194px",
              display: "block",
              textDecoration: "none",
              zIndex: 2,
              cursor: "pointer",
              transition: "transform 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            <img
              src="/xerox.jpg"
              alt="Xerox"
              style={{
                width: "289px",
                height: "194px",
                borderRadius: "10px",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
            />

            <div
              style={{
                position: "absolute",
                width: "96px",
                height: "30px",
                top: "212px",
                left: "0px",
                opacity: 1,
                transform: "rotate(0deg)",
                fontFamily: "IBM Plex Mono",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "26px",
                letterSpacing: "0%",
                color: "white",
              }}
            >
              15/06/2024
            </div>

            <div
              style={{
                position: "absolute",
                top: "244px",
                left: "0px",
                opacity: 1,
                transform: "rotate(0deg)",
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "25px",
                lineHeight: "33px",
                letterSpacing: "0%",
                color: "white",
              }}
            >
              Boost productivity within your law firm with xerox technology
            </div>
          </a>

          <a
            href="/blog/microsoft-loop-small"
            style={{
              position: "absolute",
              top: "477px",
              left: "317px",
              width: "288px",
              height: "193px",
              display: "block",
              textDecoration: "none",
              zIndex: 2,
              cursor: "pointer",
              transition: "transform 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            <img
              src="/ms-loop-small.jpg"
              alt="MS Loop Small"
              style={{
                width: "288px",
                height: "193px",
                borderRadius: "10px",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
            />

            <div
              style={{
                position: "absolute",
                width: "96px",
                height: "30px",
                top: "212px",
                left: "0px",
                opacity: 1,
                transform: "rotate(0deg)",
                fontFamily: "IBM Plex Mono",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "26px",
                letterSpacing: "0%",
                color: "white",
              }}
            >
              15/06/2024
            </div>

            <div
              style={{
                position: "absolute",
                width: "299px",
                height: "66px",
                top: "244px",
                left: "0px",
                opacity: 1,
                transform: "rotate(0deg)",
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "25px",
                lineHeight: "33px",
                letterSpacing: "0%",
                color: "white",
              }}
            >
              What is Microsoft Loop and how does it work
            </div>
          </a>
        </div>

        <div style={{ width: "50%", padding: "20px" }}>
          <h2
            style={{
              position: "absolute",
              width: "104px",
              height: "58px",
              top: "0px",
              left: "642px",
              opacity: 1,
              transform: "rotate(0deg)",
              color: "white",
              fontFamily: "Inter",
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "58px",
              letterSpacing: "0%",
              marginBottom: "20px",
            }}
          >
            FAQ's
          </h2>
          <div style={{ marginTop: "68px" }}>
            {displayFAQs.map((faq, index) => (
              <div key={faq.id} style={{ marginBottom: "0px" }}>
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  style={{
                    width: "100%",
                    padding: "19px 0",
                    backgroundColor: "transparent",
                    border: "none",
                    borderTop:
                      index === 0
                        ? "1px solid rgba(255, 255, 255, 0.3)"
                        : "none",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                    color: "white",
                    fontSize: "18px",
                    fontFamily: "Inter",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>{faq.question}</span>
                  <span
                    style={{
                      fontSize: "24px",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    {expandedFAQ === faq.id ? "−" : "+"}
                  </span>
                </button>
                {expandedFAQ === faq.id && (
                  <div
                    style={{
                      padding: "0.4cm 0 20px 0",
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "16px",
                      fontFamily: "IBM Plex Mono",
                      lineHeight: "24px",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}

            <div style={{ marginTop: "9px", textAlign: "left" }}>
              <a
                href="/faqs"
                style={{
                  fontFamily: "IBM Plex Mono",
                  fontSize: "8px",
                  fontWeight: 400,
                  color: "white",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.6)",
                  paddingBottom: "0px",
                  marginBottom: "-8px",
                  cursor: "pointer",
                }}
              >
                View all FAQs
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          width: "968.75390625px",
          height: "96px",
          top: "4479px",
          left: "271.62px",
          transform: "rotate(0deg)",
          opacity: 1,
          fontFamily: "Inter",
          fontWeight: 700,
          fontSize: "40px",
          lineHeight: "48px",
          letterSpacing: "0%",
          textAlign: "center",
          color: "black",
        }}
      >
        A team of accredited experts
        <br />
        that support you
      </div>

      <img
        src="/accredited-experts/buisness-years.png"
        alt="Business Years"
        style={{
          position: "absolute",
          width: "92.529296875px",
          height: "85.70703125px",
          top: "4632.36px",
          left: "331.19px",
          transform: "rotate(0deg)",
          opacity: 1,
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "133px",
          height: "45px",
          top: "4732.44px",
          left: "303.19px",
          transform: "rotate(0deg)",
          opacity: 1,
          fontFamily: "Inter",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "45px",
          letterSpacing: "0%",
          color: "black",
          whiteSpace: "nowrap",
        }}
      >
        Business years
      </div>

      <img
        src="/accredited-experts/on-site-support.png"
        alt="On-Site Support"
        style={{
          position: "absolute",
          width: "82.16845703125px",
          height: "82.16901397705078px",
          top: "4636.65px",
          left: "714.92px",
          transform: "rotate(0deg)",
          opacity: 1,
          zIndex: 2,
        }}
      />

      <img
        src="/accredited-experts/expert-tem-members.png"
        alt="Expert Team Members"
        style={{
          position: "absolute",
          width: "104.63494873046875px",
          height: "99.62627410888672px",
          top: "4628.3px",
          left: "1099.15px",
          transform: "rotate(0deg)",
          opacity: 1,
          zIndex: 2,
        }}
      />

      <img
        src="/accredited-experts/accreditations-&-awards.png"
        alt="Accreditations & Awards"
        style={{
          position: "absolute",
          width: "98.900390625px",
          height: "89.2734375px",
          top: "4870.23px",
          left: "1104.88px",
          transform: "rotate(0deg)",
          opacity: 1,
          zIndex: 2,
        }}
      />

      <img
        src="/accredited-experts/guided-training.png"
        alt="Guided Training"
        style={{
          position: "absolute",
          width: "79.66216278076172px",
          height: "79.662109375px",
          top: "4881px",
          left: "716px",
          transform: "rotate(0deg)",
          opacity: 1,
          zIndex: 2,
        }}
      />

      <img
        src="/accredited-experts/live-contracts.png"
        alt="Live Contracts"
        style={{
          position: "absolute",
          width: "129.81298828125px",
          height: "85.707275390625px",
          top: "4870.23px",
          left: "328.69px",
          transform: "rotate(0deg)",
          opacity: 1,
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "148px",
          height: "45px",
          top: "4732.44px",
          left: "682px",
          transform: "rotate(0deg)",
          opacity: 1,
          fontFamily: "Inter",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "45px",
          letterSpacing: "0%",
          color: "black",
          whiteSpace: "nowrap",
        }}
      >
        On-Site Support
      </div>

      <div
        style={{
          position: "absolute",
          width: "204px",
          height: "45px",
          top: "4732.44px",
          left: "1055.52px",
          transform: "rotate(0deg)",
          opacity: 1,
          fontFamily: "Inter",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "45px",
          letterSpacing: "0%",
          color: "black",
          whiteSpace: "nowrap",
        }}
      >
        Expert Team Members
      </div>

      <div
        style={{
          position: "absolute",
          width: "226px",
          height: "45px",
          top: "4970.32px",
          left: "1044.52px",
          transform: "rotate(0deg)",
          opacity: 1,
          fontFamily: "Inter",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "45px",
          letterSpacing: "0%",
          color: "black",
          whiteSpace: "nowrap",
        }}
      >
        Accreditations & Awards
      </div>

      <div
        style={{
          position: "absolute",
          width: "146px",
          height: "45px",
          top: "4970.32px",
          left: "683px",
          transform: "rotate(0deg)",
          opacity: 1,
          fontFamily: "Inter",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "45px",
          letterSpacing: "0%",
          color: "black",
          whiteSpace: "nowrap",
        }}
      >
        Guided Training
      </div>

      <div
        style={{
          position: "absolute",
          width: "129px",
          height: "45px",
          top: "4970.32px",
          left: "303.19px",
          transform: "rotate(0deg)",
          opacity: 1,
          fontFamily: "Inter",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "45px",
          letterSpacing: "0%",
          color: "black",
          whiteSpace: "nowrap",
        }}
      >
        Live Contracts
      </div>

      <div
        style={{
          position: "absolute",
          width: "275px",
          height: "52px",
          top: "4772.44px",
          left: "228.69px",
          transform: "rotate(0deg)",
          opacity: 1,
          fontFamily: "IBM Plex Mono",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "26px",
          letterSpacing: "0%",
          textAlign: "center",
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.
      </div>

      <div
        style={{
          position: "absolute",
          width: "275px",
          height: "52px",
          top: "4772.44px",
          left: "618.5px",
          transform: "rotate(0deg)",
          opacity: 1,
          fontFamily: "IBM Plex Mono",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "26px",
          letterSpacing: "0%",
          textAlign: "center",
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.
      </div>

      <div
        style={{
          position: "absolute",
          width: "275px",
          height: "52px",
          top: "4772.44px",
          left: "1020.02px",
          transform: "rotate(0deg)",
          opacity: 1,
          fontFamily: "IBM Plex Mono",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "26px",
          letterSpacing: "0%",
          textAlign: "center",
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.
      </div>

      <div
        style={{
          position: "absolute",
          width: "275px",
          height: "52px",
          top: "5010.32px",
          left: "228.69px",
          transform: "rotate(0deg)",
          opacity: 1,
          fontFamily: "IBM Plex Mono",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "26px",
          letterSpacing: "0%",
          textAlign: "center",
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.
      </div>

      <div
        style={{
          position: "absolute",
          width: "275px",
          height: "52px",
          top: "5010.32px",
          left: "618.5px",
          transform: "rotate(0deg)",
          opacity: 1,
          fontFamily: "IBM Plex Mono",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "26px",
          letterSpacing: "0%",
          textAlign: "center",
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.
      </div>

      <div
        style={{
          position: "absolute",
          width: "275px",
          height: "52px",
          top: "5010.32px",
          left: "1020.02px",
          transform: "rotate(0deg)",
          opacity: 1,
          fontFamily: "IBM Plex Mono",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "26px",
          letterSpacing: "0%",
          textAlign: "center",
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.
      </div>

      <div
        style={{
          position: "absolute",
          width: "1512px",
          height: "914px",
          top: "5173px",
          left: "0px",
          transform: "rotate(0deg)",
          opacity: 1,
          backgroundColor: "#FF3A7A",
        }}
      />

      <img
        src="/Geometric3.png"
        alt="Geometric3"
        style={{
          position: "absolute",
          width: "907.09px",
          height: "781.66px",
          top: "5307.67px",
          left: "-17.59px",
          opacity: 100,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "670px",
          height: "73px",
          top: "5265px",
          left: "147px",
          transform: "rotate(0deg)",
          opacity: 1,
          fontFamily: "Inter",
          fontWeight: 700,
          fontSize: "55px",
          lineHeight: "100%",
          letterSpacing: "0%",
          color: "white",
        }}
      >
        We're{" "}
        <span
          style={{
            color: "transparent",
            WebkitTextStroke: "1px white",
          }}
        >
          your
        </span>{" "}
        IT Services
        <br />
        problem solvers
      </div>

      <div
        style={{
          position: "absolute",
          width: "596px",
          height: "120px",
          top: "5418px",
          left: "147px",
          transform: "rotate(0deg)",
          opacity: 1,
          fontFamily: "IBM Plex Mono",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "26px",
          letterSpacing: "0%",
          color: "white",
        }}
      >
        Recognising your frustrations with your print environment, IT services,
        document management & communications and finding.
        <br />
        <br />
        Get in touch today!
      </div>

      <style>
        {`
          input::placeholder, textarea::placeholder {
            color: white !important;
            opacity: 0.7 !important;
          }
          input:focus, textarea:focus {
            background-color: transparent !important;
            color: white !important;
          }
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
            -webkit-text-fill-color: white !important;
            background-color: transparent !important;
            background: transparent !important;
            color: white !important;
            transition: background-color 5000s ease-in-out 0s !important;
          }
          input[type="text"], input[type="email"], input[type="tel"], textarea {
            background-color: transparent !important;
            color: white !important;
          }
        `}
      </style>
      <div
        id="contact-form"
        style={{
          position: "absolute",
          top: "5287px",
          left: "849px",
          zIndex: 10,
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
          style={{
            position: "absolute",
            width: "488px",
            height: "55px",
            top: "0px",
            left: "0px",
            border: "1px solid white",
            backgroundColor: "transparent",
            color: "white",
            fontSize: "16px",
            fontFamily: "IBM Plex Mono",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: "30px",
            letterSpacing: "0%",
            borderRadius: "0px",
            outline: "none",
            padding: "0 20px",
            opacity: 1,
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          style={{
            position: "absolute",
            width: "488px",
            height: "55px",
            top: "92px",
            left: "0px",
            border: "1px solid white",
            backgroundColor: "transparent",
            color: "white",
            fontSize: "16px",
            fontFamily: "IBM Plex Mono",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: "30px",
            letterSpacing: "0%",
            borderRadius: "0px",
            outline: "none",
            padding: "0 20px",
            opacity: 1,
          }}
        />

        <input
          type="tel"
          name="telephone"
          placeholder="Telephone"
          value={formData.telephone}
          onChange={handleInputChange}
          required
          style={{
            position: "absolute",
            width: "488px",
            height: "55px",
            top: "184px",
            left: "0px",
            border: "1px solid white",
            backgroundColor: "transparent",
            color: "white",
            fontSize: "16px",
            fontFamily: "IBM Plex Mono",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: "30px",
            letterSpacing: "0%",
            borderRadius: "0px",
            outline: "none",
            padding: "0 20px",
            opacity: 1,
          }}
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleInputChange}
          required
          style={{
            position: "absolute",
            width: "488px",
            height: "55px",
            top: "276px",
            left: "0px",
            border: "1px solid white",
            backgroundColor: "transparent",
            color: "white",
            fontSize: "16px",
            fontFamily: "IBM Plex Mono",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: "30px",
            letterSpacing: "0%",
            borderRadius: "0px",
            outline: "none",
            padding: "0 20px",
            opacity: 1,
          }}
        />

        <textarea
          name="message"
          placeholder="I need help with..."
          value={formData.message}
          onChange={handleInputChange}
          required
          style={{
            position: "absolute",
            width: "488px",
            height: "55px",
            top: "368px",
            left: "0px",
            border: "1px solid white",
            backgroundColor: "transparent",
            color: "white",
            fontSize: "16px",
            fontFamily: "IBM Plex Mono",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: "30px",
            letterSpacing: "0%",
            borderRadius: "0px",
            outline: "none",
            padding: "15px 20px",
            opacity: 1,
            resize: "none",
          }}
        />

        <button
          type="submit"
          onClick={(e) => {
            if (!isFormValid) {
              e.preventDefault();
              let errorMessage = "Complete all fields to submit";

              if (formData.email && !isValidEmail(formData.email)) {
                errorMessage =
                  "Please enter a valid email address and phone number";
              } else if (
                formData.telephone &&
                !isValidUKPhone(formData.telephone)
              ) {
                errorMessage =
                  "Please enter a valid email address and phone number";
              }

              setToast({
                message: errorMessage,
                type: "warning",
              });
              setTimeout(() => setToast(null), 3000);
            } else {
              handleSubmit(e);
            }
          }}
          style={{
            position: "absolute",
            width: "200px",
            height: "55px",
            top: "450px",
            left: "288px",
            backgroundColor: "#FFFFFF",
            color: "#C92C93",
            border: "none",
            fontSize: "16px",
            fontFamily: "IBM Plex Mono",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: "30px",
            letterSpacing: "0%",
            cursor: "pointer",
            borderRadius: "0px",
            opacity: isFormValid ? 1 : 0.6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0",
          }}
        >
          Submit now
        </button>
      </div>

      <img
        src="/DNS-White-Logo-3.png"
        alt="DNS Logo"
        style={{
          position: "absolute",
          width: "94px",
          height: "57px",
          top: "5868px",
          left: "144px",
          transform: "rotate(0deg)",
          opacity: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "5858.08px",
          left: "301px",
          color: "white",
          fontFamily: "IBM Plex Mono",
          fontSize: "12px",
          lineHeight: "26px",
          fontWeight: 50,
        }}
      >
        <div>Contact us</div>
        <div>
          E{" "}
          <a
            href="mailto:info@dnslimited.co.uk"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#cccccc";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "white";
            }}
          >
            info@dnslimited.co.uk
          </a>
        </div>
        <div>
          T{" "}
          <a
            href="tel:08450340895"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#cccccc";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "white";
            }}
          >
            0845 034 0895
          </a>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "5858.08px",
          left: "535px",
          color: "white",
          fontFamily: "IBM Plex Mono",
          fontSize: "12px",
          lineHeight: "22px",
          fontWeight: 50,
        }}
      >
        <div>Address</div>
        <div>Unit 5</div>
        <div>Royal Scot Road,</div>
        <div>Pride Park, Derby</div>
        <div>DE24 8AJ</div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "5858.08px",
          left: "727px",
          color: "white",
          fontFamily: "IBM Plex Mono",
          fontSize: "12px",
          lineHeight: "22px",
          fontWeight: 50,
        }}
      >
        <div>Opening hours</div>
        <div>Mon - Fri:</div>
        <div>9 am - 5:30 pm</div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "5858.08px",
          left: "926px",
          color: "white",
          fontFamily: "IBM Plex Mono",
          fontSize: "12px",
          lineHeight: "22px",
          fontWeight: 50,
        }}
      >
        <div>About us</div>
        <div>CSR</div>
        <div>Environment & Sustainability</div>
        <div>Meet the team</div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "5858.08px",
          left: "1181px",
          color: "white",
          fontFamily: "IBM Plex Mono",
          fontSize: "12px",
          lineHeight: "22px",
          fontWeight: 100,
        }}
      >
        <div>Services</div>
        <div>IT Services</div>
        <div>Communications</div>
        <div>Managed Print Services</div>
        <div>Document Management</div>
      </div>
    </>
  );
}
