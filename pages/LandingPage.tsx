import Hero from "../src/components/Hero";
import ServiceCard from "../src/components/ServiceCard";

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
    </>
  );
}
