import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = ({lightMode, reff}) => {
  return (
    <header ref={reff}>
        <div id='home' className="container header_container">
            <h5>Hi, I am</h5>
            <h1>Atunwa Gabriel</h1>
            <h5 className="text-light">FrontEnd Developer</h5>
            <CTA/>
            <HeaderSocials/>

            <div className="me">
                <img className='header_img' src={ME} alt="me" />
            </div>

            <a href="#footer" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header