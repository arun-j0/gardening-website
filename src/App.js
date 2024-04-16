
import AboutSection from "./components/About";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import OurWorksSection from "./components/OurWorks";
import ServicesSection from "./components/Services";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div>
      <TopBar/>
      <NavBar/>
      <Hero/>
      <AboutSection/>
      <ServicesSection/>
      <OurWorksSection/>
      <ContactSection/>
      <Footer/>
     
    </div>
  );
}

export default App;
