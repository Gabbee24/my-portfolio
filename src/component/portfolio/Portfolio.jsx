import React from 'react'
import './Portfolio.css'

import PortfolioData from './portfolio-data.json';

import PortfolioComponent from './Portfolio.component';

const Portfolio = ({lightMode, reff}) => {

  const [portfolio, setPortfolio] = React.useState(PortfolioData);

  // console.log(portfolio.title);

  // React.useEffect(() => {
  //   fetch(PortfolioData)
  //     .then(res => res.json())
  //     .then(data => setPortfolio(data))
  //   }, [])


  // React.useEffect

  return (
    <section ref={reff} id='portfolio'>
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