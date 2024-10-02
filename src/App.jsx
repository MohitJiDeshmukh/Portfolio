import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Experiences />
      <Contact />
      <SocialLinks />
    </>
  );
}

export default App;
