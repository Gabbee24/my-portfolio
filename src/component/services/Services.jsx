import React from 'react'
import './Services.css';
import {BiCheck} from 'react-icons/bi';

const Services = ({lightMode, reff}) => {
  return (
    <section ref={reff} id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list_icon' />
              <p>All kinds of Websites and web applications such as Ecommerce website, blog website ,portfolio website .</p>
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
    </section>
  )
}

export default Services