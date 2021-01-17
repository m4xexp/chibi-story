import Nav from "./components/Nav";
import Home from "./Home";
import Gallery from "./Gallery";
import Footer from "./components/Footer";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
