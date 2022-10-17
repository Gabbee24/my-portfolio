import React from 'react'
import IMG1 from '../../assets/me1.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const TestimonialComponent = ({testData}) => {

    const {avatar, name, review} = testData;
  return (
    <SwiperSlide className="testimonial">
        <div className="client_avatar">
            <img src={IMG1} alt="me" />
        </div>
        <h5 className="client_name">{name}</h5>
        <small className="client_review">
            {review}
        </small>
    </SwiperSlide>
  )
}

export default TestimonialComponent