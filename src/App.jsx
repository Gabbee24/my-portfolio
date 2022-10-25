import { useRef } from 'react';
import React from 'react';

import './App.css';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import About from './component/about/About';
import Experience from './component/experience/Experience';
import Services from './component/services/Services';
import Portfolio from './component/portfolio/Portfolio';
import Testimonials from './component/testimonials/Testimonials';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';

function App() {

  const [lightMode, setLightMode] = React.useState(false);

  const toggleLightMode = () => {
    setLightMode(prevLightMode => !prevLightMode)
  }

  const homeFooter = useRef(null);
  const aboutFooter = useRef(null);
  const experienceFooter = useRef(null);
  const servicesFooter = useRef(null);
  const portfolioFooter = useRef(null);
  const testimonialsFooter = useRef(null);
  const contactFooter = useRef(null);

  //https://meet.google.com/htu-kvrb-vtb

  const scrollToComponent = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div className={lightMode ? 'light' : ''}>
      <Header
        lightMode={lightMode}
        reff = {homeFooter}
      />
      <Nav
        toggleLightMode={toggleLightMode}
        lightMode={lightMode}
      />
      <About
        lightMode={lightMode}
        reff = {aboutFooter}
      />
      <Experience
        lightMode={lightMode}
        reff = {experienceFooter}
      />
      <Services
        lightMode={lightMode}
        reff = {servicesFooter}
      />
      <Portfolio
        lightMode={lightMode}
        reff = {portfolioFooter}
      />
      <Testimonials
        lightMode={lightMode}
        reff = {testimonialsFooter}
      />
      <Contact
        lightMode={lightMode}
        reff = {contactFooter}
      />
      <Footer
        lightMode={lightMode}
        clickHomeFooter = {() => scrollToComponent(homeFooter)}
        clickAboutFooter = {() => scrollToComponent(aboutFooter)}
        clickExperienceFooter = {() => scrollToComponent(experienceFooter)} 
        clickServicesFooter = {() => scrollToComponent(servicesFooter)}
        clickPortfolioFooter = {() => scrollToComponent(portfolioFooter)}
        clickTestimonialsFooter = {() => scrollToComponent(testimonialsFooter)} 
        clickContactFooter = {() => scrollToComponent(contactFooter)}
      />
    </div>
  );
}

export default App;