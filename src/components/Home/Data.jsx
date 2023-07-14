import React from 'react'

const Data = () => {
  const isLarge = window.innerWidth >=768

  return (
    <div className="home-data">
        <h1 
            className="home-title" 
            data-aos={ isLarge ? 'fade-down' : 'flip-right' }
            data-aos-duration='2000'>Ahmad Samim Qeyam</h1>
        <h3 
          className="home-subtitle"
          data-aos={ isLarge ? 'fade-down' : 'flip-left' }
          data-aos-duration='2000'>Frontend Web Developer</h3>
        <p className="home-description">
          During my three years of professional work experience, I have built several
          high-impact web solutions for diverse industry organizations. I am skilled in
          designing, developing, and testing web-based applications incorporating a range
          of technologies. Currently, I am aspiring to combine my background with my
          strong technical skills to excel as a Frontend Developer.
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