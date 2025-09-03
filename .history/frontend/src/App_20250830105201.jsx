import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VendorAuth from "./pages/VendorAuth";
import VendorDashBoard from "./pages/VendorDashBoard"
import Register from "./components/VendorRegister/Register"
import EventPlanning from "./pages/EventPlanning";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor-auth" element={<VendorAuth/>} />
        <Route path="/vendor" element={<VendorDashBoard/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/event-planning" element={<EventPlanning />} />
      </Routes>
    </Router>
  );
}

export default App;
