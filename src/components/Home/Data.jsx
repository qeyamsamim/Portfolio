import React from 'react'

import CV from '../../assets/samimqeyamcv.pdf'

const Data = () => {
  const isLarge = window.innerWidth >=768
  const isSmall = window.innerWidth <=768

  return (
    <div className="home-data">
        { isLarge &&
          <h1 
            className="home-title" 
            data-aos='fade-down'
            data-aos-duration='2000'>Ahmad Samim Qeyam</h1>
        }
        { isSmall &&
          <h1 
            className="home-title" 
            data-aos='fade-left'
            data-aos-duration='2000'>Ahmad Samim Qeyam</h1>
        }
        { isLarge &&
          <h3 
            className="home-subtitle"
            data-aos='fade-down'
            data-aos-duration='2000'>Front-End Web Developer</h3>
        }
        { isSmall &&
          <h3 
            className="home-subtitle"
            data-aos='fade-left'
            data-aos-duration='2000'>Front-End Web Developer</h3>
        }
        <p className="home-description">
          During my two and half years of professional work experience, I have built several
          high-impact web solutions for diverse industry organizations. I am skilled in
          designing, developing, and testing web-based applications incorporating a range
          of technologies. Currently, I am aspiring to combine my background with my
          strong technical skills to excel as a Front-End Web Developer.
        </p>
        <a 
          href='#contact'
          className="button button-flex"
          data-aos='fade-up'
          data-aos-duration='2000'>
          Say Hello<i className="ri-send-plane-line button-icon"></i>
        </a>
    </div>
  )
}

export default Data