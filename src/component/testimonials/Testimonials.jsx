import React from 'react'
import './Testimonials.css'

import IMG1 from '../../assets/me1.jpg'

import testimonialData from './testimonial_data.json';

import TestimonialComponent from './Testimonial.component'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

  const [testimonial, setTestimonial] = React.useState(testimonialData)

  return (
    <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          testimonial.map(({avatar, name, review}, index)  => (
            <SwiperSlide className="testimonial">
        <div className="client_avatar">
            <img src={IMG1} alt="me" />
        </div>
        <h5 className="client_name">{name}</h5>
        <small className="client_review">
            {review}
        </small>
    </SwiperSlide>

          ))
        }
      </Swiper>
    </section>
  )
}

export default Testimonials