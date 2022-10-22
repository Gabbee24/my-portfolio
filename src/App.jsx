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

  // const aboutNav = useRef(null);
  // const experienceNav = useRef(null);
  // const servicesNav = useRef(null);
  // const contactNav = useRef(null);

  // https://meet.google.com/htu-kvrb-vtb

  // const scrollToComponent = (elementRef) => {
    // window.scrollTo({
      // top: elementRef.current.offsetTop,
      // behavior: 'smooth'
    // })
  // }

  return (
    <div className={lightMode ? 'light' : ''}>
      <Header
        lightMode={lightMode}
      />
      <Nav
        toggleLightMode={toggleLightMode}
        lightMode={lightMode}
      />
      <About
        lightMode={lightMode}
      />
      <Experience
        lightMode={lightMode}
      />
      <Services
        lightMode={lightMode}
      />
      <Portfolio
        lightMode={lightMode}
      />
      <Testimonials
        lightMode={lightMode}
      />
      <Contact
        lightMode={lightMode}
      />
      <Footer
        lightMode={lightMode}
      />
    </div>
  );
}

export default App;
