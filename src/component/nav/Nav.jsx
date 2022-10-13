import React from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {BsBookmarkStar} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  
  return (
    <nav>
      <a href="#" className='active'><AiFillHome/> </a>
      <a href="#about"><FaUserCircle/></a>
      <a href="#experience"><BsBookmarkStar/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><BiMessageRoundedDots/></a>
    </nav>
  )
}

export default Nav