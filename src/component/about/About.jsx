import React from 'react'
import './About.css';
import ME3 from '../../assets/me3.jpg';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="about_container container">
        <div className="about_me">
          <div className="about_me_image">
            <img style={{'width': '160px'}} src={ME3} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_ico'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className='about_ico'/>
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_ico'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p> <i>

            "There's always a way out..."
          </i>
          </p>
          <a href="#contact" className='btn btn_primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About