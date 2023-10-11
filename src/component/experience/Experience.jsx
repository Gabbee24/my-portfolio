import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = ({lightMode, reff}) => {
  return (
    <section ref={reff} id='experience'>
      <h5>Experiences I have</h5>
      <h2>My skills</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Front Development</h3>
          <div className="experience_content">

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>React Query</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>NextJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>React Native</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>


        {/* backend */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details_icon'/>              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>FireBase</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Next JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>


       {/* Requirements:

4+ years of React experience.
5+ years of overall front-end experience.
Strong proficiency in TypeScript, React, and Redux.
Skilled in Jest, Yarn/npm, and Webpack.
Proficient in HTML and CSS for seamless UI integration.
Familiarity with Git and CI/CD practices.
Strong problem-solving skills and a passion for technology trends.
Bonus Skills:

Experience with Netlify and Gatsby.
Expirience with Github Actions
Expirience with SanityIO as a CMS */}
      
    </section>
  )
}

export default Experience
