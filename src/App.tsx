import Navbar from "./components/Navbar";
import LandingPage from "../pages/LandingPage";
import Footer from "./components/Footer";
import { dnsLandingFAQs } from "./data/faqs";
import { dnsTestimonials } from "./data/testimonials";

function App() {
  return (
    <div className="relative max-w-[1512px] mx-auto">
      <Navbar variant="transparent" />
      <LandingPage faqs={dnsLandingFAQs} testimonials={dnsTestimonials} />
      <Footer variant="transparent" />
    </div>
  );
}
export default App;
