import React from 'react'
import './About.css';
import ME3 from '../../assets/me3.jpg';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { motion } from 'framer-motion';
import { navVariants1, navVariants2 } from '../../utils/motion';

const About = ({lightMode, reff}) => {
  return (
    <section ref={reff} id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="about_container container">
        <div className="about_me">
          <div className="about_me_image">
            <img style={{'width': '160px'}} src={ME3} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <motion.article variants={navVariants2(0.2)} initial='hidden' whileInView='show' className="about_card">
              <FaAward className='about_ico'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </motion.article>
            <motion.article variants={navVariants2(0.4)} initial='hidden' whileInView='show' className="about_card">
              <FiUsers className='about_ico'/>
              <h5>Clients</h5>
              <small>20+ worldwide</small>
            </motion.article>
            <motion.article variants={navVariants2(0.6)} initial='hidden' whileInView='show' className="about_card">
              <VscFolderLibrary className='about_ico'/>
              <h5>Projects</h5>
              <small>35+ Completed</small>
            </motion.article>
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