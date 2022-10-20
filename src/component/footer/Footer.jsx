import React from 'react'
import './Footer.css'

import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>GABRIEL</a>

      <ul className="footer_links">
        <li><a href="#">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="experience">Experience</a></li>
        <li><a href="services">Services</a></li>
        <li><a href="portfolio">Portfolio</a></li>
        <li><a href="testimonials">Testimonials</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
        <a href="https://twitter.com"><AiFillTwitterCircle/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; GABRIEL's React, All rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer