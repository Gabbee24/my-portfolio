import React from 'react'

// icons imported from react icons to be used for each
//contact options
import {MdOutlineEmail} from 'react-icons/md'
import {IoLogoTwitter} from 'react-icons/io'
import {FaLinkedin} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im'

//useRef imported for use of email JS
import { useRef } from 'react';

//React email JS imported
import emailjs from 'emailjs-com'

//import the style
import './Contact.css';

const Contact = ({lightMode, reff}) => {

  const form = useRef();

  //email JS function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dksah5d', 'template_4917k7q', form.current, 'AVQavJYxkMiUmPB39')
      
    //to make sure the form resets back to empty field after each submit
    e.target.reset()
  };

  return (
    <section ref={reff} id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail/>  
            <h4>Email</h4>
            <h5>atunwagabriel</h5>
            <h5>@gmail.com</h5>
            <a href="mailto:atunwagabriel@gmail.com" target='_blank'>Drop a Mail</a>
          </article>
          <article className="contact_option">
            <IoLogoTwitter/>  
            <h4>Twitter</h4>
            <h5>@gabby_gabbee</h5>
            <a href="twitter.com" target='_blank'>Tweet me</a>
          </article>
          <article className="contact_option">
            <FaLinkedin/>  
            <h4>LinkedIn</h4>
            <h5>Gabriel Atunwa</h5>
            <a href="https://www.linkedin.com/in/gabriel-atunwa-62b71423b/" target='_blank'>make connection</a>
          </article>
          <article className="contact_option">
            <ImWhatsapp/>  
            <h4>WhatsApp</h4>
            <h5>+2348063878791</h5>
            <a href="https://api.whatsapp.com/send?phone+2348063878791" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn_primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact