import React from 'react';

import IMG1 from '../../assets/portfolio1.webp';
import IMG2 from '../../assets/portfolio2.webp';
import IMG3 from '../../assets/portfolio3.webp';
import IMG4 from '../../assets/portfolio4.webp';
import IMG5 from '../../assets/portfolio5.webp';
import IMG6 from '../../assets/portfolio6.webp';

const PortfolioComponent = ({portData}) => {
    const {image, title, github, demo} = portData;
  return (
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            {/* <img src={`'../../assets'/${image}`} alt="Portfolio Image" /> */}
            <img src={image} alt="Portfolio Image" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item_cta">
            <a href={github} className='btn'>GitHub</a>
            <a href={demo} className='btn btn_primary' target='_blank'>Live Demo</a>
          </div>
        </article>
  )
}

export default PortfolioComponent