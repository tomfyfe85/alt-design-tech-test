import Hero from "../src/components/Hero";
import ServiceCard from "../src/components/ServiceCard";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <ServiceCard
        title="IT Services"
        description="Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them."
        icon={<img src="/service-card-images/it-white.png" alt="" />}
        learnMoreLink="/it-services"
      />
    </>
  );
}
