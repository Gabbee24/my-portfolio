import { useRef } from 'react';

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
    <div className='hold'>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
