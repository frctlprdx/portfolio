import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PortfolioPages from "./pages/Portfolio";
import CV from "./pages/CV";
import Certification from "./pages/Certification";
import MoreCompetence from "./pages/MoreCompetence";
import MoreOrganization from "./pages/MoreOrganization";
import MoreWebDev from "./pages/MoreWebDev";
import MoreMobileDev from "./pages/MoreMobileDev";
import MoreML from "./pages/MoreML";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow mih-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioPages />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/more-competence" element={<MoreCompetence />} />
            <Route path="/more-organization" element={<MoreOrganization />} />
            <Route path="/more-machinelearning" element={<MoreML />} />
            <Route path="/more-webdev" element={<MoreWebDev />} />
            <Route path="/more-mobiledev" element={<MoreMobileDev />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
