import React from 'react'
import './Nav.css'

import Lightmode from '../lightmode/Lightmode'

import {AiFillHome} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'


const Nav = ({lightMode, toggleLightMode}) => {
  const [activeNav, setActiveNav] = useState('#home');

  const toggleActiveNav = (event) => {
    // console.log("event >>>>>",event);
    setActiveNav(event.target.hash)
    // console.log("active nav",activeNav);
  } 
  
  return (
    
    <nav className={lightMode ? 'light' : ''} >
      
      <a 
      title='home'
        href="#home" 
        onClick={toggleActiveNav} 
        className={activeNav === '#home' ? 'active' : ''}
      >
          <AiFillHome className='ssvg'/> 
      </a>
      <a 
        title='about'
        href="#about"
        onClick={toggleActiveNav} 
        className={activeNav === '#about' ? 'active' : ''}   
      >
          <FaUserCircle className='ssvg'/>
      </a>

    
      <a 
        title='services'
        href="#services"
        onClick={toggleActiveNav}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine className='ssvg'/>
      </a>
      
      <a 
        title='contact'
        href="#contact"
        onClick={toggleActiveNav}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageRoundedDots className='ssvg'/>
      </a>

      <a onClick={toggleLightMode}>
        <Lightmode/>
      </a>
    </nav>
  )
}

export default Nav