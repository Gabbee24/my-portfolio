import React from 'react'

import './Lightmode.css'

const Lightmode = ({ toggleLightMode}) => {
  return (
    <div className="toggler">
        <p className="toggler-light">Dark</p>
        <div 
            onClick={toggleLightMode}
            className="toggler-slider">
            <div className="toggler-slider-circle"></div>
        </div>
        <p className="toggler-light">Light</p>
    </div>
  )
}

export default Lightmode