import React from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {BsBookmarkStar} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = (props) => {
  const [activeNav, setActiveNav] = useState('#home');

  const toggleActiveNav = (event) => {
    // console.log("event >>>>>",event);
    setActiveNav(event.target.hash)
    // console.log("active nav",activeNav);
  } 
  
  return (
    
    <nav>
      
      <a 
        href="#home" 
        onClick={toggleActiveNav} 
        className={activeNav === '#home' ? 'active' : ''}
      >
          <AiFillHome/> 
      </a>
      <a 
        href="#about"
        onClick={toggleActiveNav} 
        className={activeNav === '#about' ? 'active' : ''}   
      >
          <FaUserCircle/>
      </a>

      <a 
        href="#experience"
        onClick={toggleActiveNav}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BsBookmarkStar/>
      </a>
    
      <a 
        href="#services"
        onClick={toggleActiveNav}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine/>
      </a>
      
      <a 
        href="#contact"
        onClick={toggleActiveNav}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageRoundedDots/>
      </a>

    </nav>
  )
}

export default Nav