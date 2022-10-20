import React from 'react'

const HeaderDarkMode = () => {
  return (
    <div className="toggler">
        <p className="toggler-light">Light Mode</p>
        <div 
            // onClick={toggleDarkMode}
            className="toggler-slider">
            <div className="toggler-slider-circle"></div>
        </div>
        <p className="toggler-dark">Dark Mode</p>
    </div>
  )
}

export default HeaderDarkMode



// https://github.com/Gabbee24/my-portfolio