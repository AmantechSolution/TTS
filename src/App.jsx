import About from "./Components/About";
import Navbar from "./Components/CustomNav";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Pricing from "./Components/Pricing.jsx";
import Process from "./Components/Process.jsx";
import Work from "./Components/Work.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Process />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
