import Navbar from "./components/Navbar";
import LandingPage from "../pages/LandingPage";
import ServiceCards from "./components/ServiceCards";

function App() {
  return (
    <div className="relative">
      <Navbar variant="transparent" />
      <LandingPage />
      <ServiceCards />
    </div>
  );
}
export default App;
