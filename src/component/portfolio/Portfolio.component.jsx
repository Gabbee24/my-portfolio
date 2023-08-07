import React from 'react';

const PortfolioComponent = ({portData}) => {
    const {image, title, github, demo} = portData;
  return (
    <article className="portfolio_item">
      <div className="portfolio_item_image">
        {/* <img src={`'../../assets'/${image}`} alt="Portfolio Image" /> */}
        <img src='/portfolioImages/geoplex.png' alt="Portfolio Image" />
      </div>
      <h3>{title}</h3>
      <div className="portfolio_item_cta">
        <a href={github} className='btn' target='_blank'>GitHub</a>
        <a href={demo} className='btn btn_primary' target='_blank'>Live Demo</a>
      </div>
    </article>
  )
}

export default PortfolioComponent