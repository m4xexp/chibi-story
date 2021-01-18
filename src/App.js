import Nav from "./components/Nav";
import Home from "./Home";
import Footer from "./components/Footer";
import About from "./About";
import Contact from "./Contact";
import Dropdown from "./components/Dropdown";
import React, { useState, useEffect } from "react";
import Chiblis from "./Data/Chibli";
import BlogData from "./Data/BlogData";
import Movie from "./Data/Movie";

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
      <Movie />
      <Contact />
      <BlogData />
      <Footer />
    </div>
  );
}

export default App;
