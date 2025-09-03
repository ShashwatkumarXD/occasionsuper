import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VendorAuth from "./pages/VendorAuth";
import VendorDashBoard from "./pages/VendorDashBoard"
import Register from "./components/VendorRegister/Register"
import EventPlanning from "./pages/EventPlanning";
import AIRecommendations from "./pages/AIRecommendations";
import Services from "./pages/Services";
import FileUploadTest from "./components/FileUploadTest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor-auth" element={<VendorAuth/>} />
        <Route path="/vendor" element={<VendorDashBoard/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/event-planning" element={<EventPlanning />} />
        <Route path="/services" element={<Services />} />
        <Route path="/recommendations" element={<AIRecommendations />} />
        <Route path="/test-upload" element={<FileUploadTest />} />
      </Routes>
    </Router>
  );
}

export default App;
