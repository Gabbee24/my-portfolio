import React from 'react'
import './Services.css';
import {BiCheck} from 'react-icons/bi';
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';

const Services = ({lightMode, reff}) => {
  return (
    <motion.section variants={navVariants} initial='hidden' whileInView='show' ref={reff} id='services'>
      <h5>What I Offer</h5>
      <h2>SERVICES</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list_icon' />
              <p>All kinds of Websites and web applications such as Ecommerce website, blog website,inventory systems, booking websites ,portfolio website. . .</p>
            </li>
            {/* <li>
              <BiCheck className='service_list_icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        {/* End of UI/UX */}
        

        <article className="service">
          <div className="service_head">
            <h3>Mobile Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list_icon' />
              <p>Building responsive mobile apps using React Native.</p>
            </li>
            {/* <li>
              <BiCheck className='service_list_icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        {/* end of web development */}
        
        
        <article className="service">
          <div className="service_head">
            <h3>Data Analysis</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list_icon' />
              <p>Basic data analysis using Microsoft Excel, Tableau,and python.</p>
            </li>
            {/* <li>
              <BiCheck className='service_list_icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
      </div>
    </motion.section>
  )
}

export default Services