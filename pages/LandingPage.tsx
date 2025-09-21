import Hero from "../src/components/Hero";
import ServiceCard from "../src/components/ServiceCard";

export default function LandingPage() {
  return (
    <>
      <Hero />

      <div style={{ position: "absolute", top: "662px", left: "132px" }}>
        {/* <ServiceCard
          title="IT Services"
          description="Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them."
          icon={<img src="/service-card-images/it-white.png" alt="" />}
          learnMoreLink="/it-services" 
        /> */}
        {/* </div> */}

        {/* Second card - top right */}
        {/* <div style={{ position: "absolute", top: "662px", left: "450px" }}>
        <ServiceCard
          title="Managed Print Services"
          description="Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them."
          icon={
            <img
              src="/service-card-images/managed-print-services-purple-Group56.png"
              alt=""
            />
          }
          learnMoreLink="/managed-print-services"
        />
      </div>

      <div style={{ position: "absolute", top: "1050px", left: "132px" }}>
        <ServiceCard
          title="Document Management"
          description="Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them."
          icon={
            <img
              src="/service-card-images/document-management-purple-Group57.png"
              alt=""
            />
          }
          learnMoreLink="/document-management"
        />
      </div>  */}

        <div style={{ position: "absolute", top: "1050px", left: "450px" }}>
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
      </div>
    </>
  );
}
