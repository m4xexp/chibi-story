import Nav from './components/Nav';
import React, { useState } from "react";
import Home from './Home';
import Gallery from './Gallery';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Nav />
      <Home />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
