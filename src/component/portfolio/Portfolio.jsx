import React from 'react'
import './Portfolio.css'

import IMG1 from '../../assets/portfolio1.webp';
import IMG2 from '../../assets/portfolio2.webp';
import IMG3 from '../../assets/portfolio3.webp';
import IMG4 from '../../assets/portfolio4.webp';
import IMG5 from '../../assets/portfolio5.webp';
import IMG6 from '../../assets/portfolio6.webp';

import PortfolioData from './portfolio-data.json';

import PortfolioComponent from './Portfolio.component';

const Portfolio = () => {

  const [portfolio, setPortfolio] = React.useState(PortfolioData);

  // console.log(portfolio.title);

  // React.useEffect(() => {
  //   fetch(PortfolioData)
  //     .then(res => res.json())
  //     .then(data => setPortfolio(data))
  //   }, [])


  // React.useEffect

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">

        {portfolio.map(portData => (
            <PortfolioComponent
              key={portData.id}
              portData={portData}
            />
        ))}

      </div>
    </section>
  )
}

export default Portfolio