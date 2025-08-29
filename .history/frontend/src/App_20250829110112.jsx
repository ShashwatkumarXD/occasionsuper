import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VendorAuth from "./pages/VendorAuth";
import VendorDashBoard from "./pages/VendorDashBoard"
import Register from "./components/Register"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor-auth" element={<VendorAuth/>} />
        <Route path="/vendor" element={<VendorDashBoard/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
