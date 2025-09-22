import Hero from "../src/components/Hero";
import ServiceCard from "../src/components/ServiceCard";
import VideoSection from "../src/components/VideoSection";
import TestimonialCarousel from "../src/components/TestimonialCarousel";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <div style={{ position: "absolute", top: "662px", left: "132px" }}>
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
      </div>
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
              lineHeight: "30px",
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
              lineHeight: "30px",
              letterSpacing: "0%",
              color: "black",
              textDecoration: "underline",
            }}
          >
            View all Case Studies
          </a>
        </div>

        {/* Black background rectangle */}
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

        <TestimonialCarousel />
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
        {/* Title in Inter */}
        <h2
          style={{
            fontFamily: "Inter",
            fontSize: "35px",
            fontWeight: "bold",
            marginBottom: "27px",
            textAlign: "center",
          }}
        >
          The business process problem solvers.
        </h2>

        {/* Body text in IBM Plex Mono */}
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: "14px", // adjust as needed
                fontWeight: 200,
                lineHeight: "2.5",
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
                fontSize: "14px",
                fontWeight: 200,
                lineHeight: "2.5",
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
        {/* Left side - Insights & News */}
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
          {/* MS Loop Clickable Card */}
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
            {/* MS Loop Image */}
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

            {/* Date beneath MS Loop */}
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
                lineHeight: "30px",
                letterSpacing: "0%",
                color: "white",
              }}
            >
              15/06/2024
            </div>

            {/* MS Loop Title */}
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

          {/* Xerox Clickable Card */}
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
            {/* Xerox Image */}
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

            {/* Date beneath Xerox */}
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
                lineHeight: "30px",
                letterSpacing: "0%",
                color: "white",
              }}
            >
              15/06/2024
            </div>

            {/* Xerox Description */}
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

          {/* MS Loop Small Clickable Card */}
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
            {/* MS Loop Small Image */}
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

            {/* Date beneath MS Loop Small */}
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
                lineHeight: "30px",
                letterSpacing: "0%",
                color: "white",
              }}
            >
              15/06/2024
            </div>

            {/* MS Loop Small Title */}
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
          {/* Blog cards */}
        </div>

        {/* Right side - FAQs */}
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
          {/* FAQ items */}
          <div style={{ marginTop: "68px" }}>
            <div style={{ marginBottom: "0px" }}>
              <button
                style={{
                  width: "100%",
                  padding: "19px 0",
                  backgroundColor: "transparent",
                  border: "none",
                  borderTop: "1px solid rgba(255, 255, 255, 0.3)",
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
                <span>What services does DNS offer?</span>
                <span style={{ fontSize: "24px" }}>+</span>
              </button>
            </div>

            <div style={{ marginBottom: "0px" }}>
              <button
                style={{
                  width: "100%",
                  padding: "19px 0",
                  backgroundColor: "transparent",
                  border: "none",
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
                <span>How can I get support?</span>
                <span style={{ fontSize: "24px" }}>+</span>
              </button>
            </div>

            <div style={{ marginBottom: "0px" }}>
              <button
                style={{
                  width: "100%",
                  padding: "19px 0",
                  backgroundColor: "transparent",
                  border: "none",
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
                <span>What are your pricing options?</span>
                <span style={{ fontSize: "24px" }}>+</span>
              </button>
            </div>

            <div style={{ marginBottom: "0px" }}>
              <button
                style={{
                  width: "100%",
                  padding: "19px 0",
                  backgroundColor: "transparent",
                  border: "none",
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
                <span>Do you offer maintenance services?</span>
                <span style={{ fontSize: "24px" }}>+</span>
              </button>
            </div>

            <div style={{ marginBottom: "0px" }}>
              <button
                style={{
                  width: "100%",
                  padding: "19px 0",
                  backgroundColor: "transparent",
                  border: "none",
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
                <span>What is your response time for support?</span>
                <span style={{ fontSize: "24px" }}>+</span>
              </button>
            </div>

            <div style={{ marginBottom: "0px" }}>
              <button
                style={{
                  width: "100%",
                  padding: "19px 0",
                  backgroundColor: "transparent",
                  border: "none",
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
                <span>Do you provide training for staff?</span>
                <span style={{ fontSize: "24px" }}>+</span>
              </button>
            </div>

            <div style={{ marginBottom: "0px" }}>
              <button
                style={{
                  width: "100%",
                  padding: "19px 0",
                  backgroundColor: "transparent",
                  border: "none",
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
                <span>What industries do you specialize in?</span>
                <span style={{ fontSize: "24px" }}>+</span>
              </button>
            </div>

            <div style={{ marginBottom: "0px" }}>
              <button
                style={{
                  width: "100%",
                  padding: "19px 0",
                  backgroundColor: "transparent",
                  border: "none",
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
                <span>How do I schedule a consultation?</span>
                <span style={{ fontSize: "24px" }}>+</span>
              </button>
            </div>

            <div style={{ marginBottom: "0px" }}>
              <button
                style={{
                  width: "100%",
                  padding: "19px 0",
                  backgroundColor: "transparent",
                  border: "none",
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
                <span>What are your service level agreements?</span>
                <span style={{ fontSize: "24px" }}>+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
