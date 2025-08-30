import { Routes } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"

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
