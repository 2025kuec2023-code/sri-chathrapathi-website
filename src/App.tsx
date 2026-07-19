import "./styles/globals.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Ganesh from "./components/Ganesh/Ganesh";
import Members from "./components/Members/Members";
import Highlights from "./components/Highlights/Highlights";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Ganesh />
      <Members />
      <Highlights />
      <Contact />
      <Footer />
    </>
  );
}

export default App;