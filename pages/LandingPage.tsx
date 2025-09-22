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
            marginBottom: "16px",
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
    </>
  );
}
