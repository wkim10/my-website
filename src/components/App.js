import React from "react";
import Home from "./Home";
// import Header from "./Header";
// import CustomCarousel from "./CustomCarousel";
// import Skills from "./Skills";
import Projects from "./Projects";
import Work from "./Work";
import Activities from "./Activities";
// import Footer from "./Footer";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/work" element={<Work />} />
      <Route path="/activities" element={<Activities />} />

      {/* <div>
        <Header />
        <CustomCarousel />
        <Skills />
        <Projects />
        <Work />
        <Activities />
        <Footer />
      </div> */}
    </Routes>
  );
}

export default App;
