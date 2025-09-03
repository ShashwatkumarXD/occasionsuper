import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import VendorReg from "./pages/Registration/VendorReg";
// import "./App.css"

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vendorReg' element={<VendorReg />} />
      </Routes>
    </Router >
  )
}

export default App
