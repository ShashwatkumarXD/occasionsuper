import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VendorAuth from "./pages/VendorAuth";
import VendorDashBoard from "./pages/VendorDashBoard"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor-auth" element={<VendorAuth/>} />
        <Route path="/vendor" element={<VendorDashBoard/>} />
      </Routes>
    </Router>
  );
}

export default App;
