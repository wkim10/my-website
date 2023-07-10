import React from "react";
import Header from "./Header";
import CustomCarousel from "./CustomCarousel";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import Work from "./Work";
import Activities from "./Activities";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <CustomCarousel />
      <Skills />
      <Projects />
      <Work />
      <Activities />
      <Footer />
    </div>
  );
}

export default App;
