import Navbar from "./components/Navbar";
import LandingPage from "../pages/LandingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">
      <Navbar variant="transparent" />
      <LandingPage />
      <Footer variant="transparent" />
    </div>
  );
}
export default App;
