import Nav from "./components/Nav";
import Home from "./Home";
import Gallery from "./Gallery";
import Footer from "./components/Footer";
import About from "./About";
import Contact from "./Contact";
import Dropdown from "./components/Dropdown";
import React, { useState, useEffect } from "react";
import TestData from "./components/TestData";
import Chiblis from "./Data/Chibli";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    function hideMenu() {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <div className="App">
      <Nav toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Home />
      <About />
      <Chiblis />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
