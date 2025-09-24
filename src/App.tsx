import Navbar from "./components/Navbar";
import LandingPage from "../pages/LandingPage";
import Footer from "./components/Footer";
import { dnsLandingFAQs } from "./data/faqs";
import { dnsTestimonials } from "./data/testimonials";

function App() {
  return (
    <div className="relative w-full">
      <Navbar variant="purple700" />
      <LandingPage faqs={dnsLandingFAQs} testimonials={dnsTestimonials} />
      <Footer variant="transparent" />
    </div>
  );
}
export default App;
