import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Career from "./pages/career/Career";
import Enroll from "./pages/enroll/Enroll";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
