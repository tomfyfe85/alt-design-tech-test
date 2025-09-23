import Navbar from "./components/Navbar";
import LandingPage from "../pages/LandingPage";
import Footer from "./components/Footer";
import { dnsLandingFAQs } from "./data/faqs";

function App() {
  return (
    <div className="relative">
      <Navbar variant="transparent" />
      <LandingPage faqs={dnsLandingFAQs} />
      <Footer variant="transparent" />
    </div>
  );
}
export default App;
