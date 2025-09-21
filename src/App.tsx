import Navbar from "./components/Navbar";
import LandingPage from "../pages/LandingPage";
import ServiceCards from "./components/ServiceCard";

function App() {
  return (
    <div className="relative">
      <Navbar variant="transparent" />
      <LandingPage />
    </div>
  );
}
export default App;
