import { useState } from "react";

import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Blog from './components/Blog/Blog.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import Certificates from './components/Certificates/Certificates.jsx'
import SpecialThanks from "./components/SpecialThanks/SpecialThanks";

export default function App() {

  const [darkMode, setDarkMode] = useState(false);


  return (

    <div className={`${darkMode ? "dark" : ""} app`}>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />


      <main>

        <Hero />

        <About />

        <Certificates />
        
        <Services />

        <Portfolio />

        <Blog />

        <SpecialThanks />

        <Contact />

      </main>


      <Footer />


    </div>

  );
}