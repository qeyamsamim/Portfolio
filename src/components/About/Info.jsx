import React from 'react'

const Info = () => {
  return (
    <div className="about-info grid">
        <div
          className="about-box"
          data-aos='fade-left'
          data-aos-duration='1500'>
            <i className="ri-award-line about-icon"></i>
            <h3 className="about-title">Experience</h3>
            <span className="about-subtitle">+2.5 Years Working</span>
        </div>
        <div
          className="about-box"
          data-aos='fade-left'
          data-aos-delay='500'
          data-aos-duration='1700'>
            <i className="ri-briefcase-3-line about-icon"></i>
            <h3 className="about-title">Completed</h3>
            <span className="about-subtitle">+10 Projects</span>
        </div>
        <div 
          className="about-box"
          data-aos='fade-left'
          data-aos-delay='1000'
          data-aos-duration='1900'>
            <i className="ri-headphone-fill about-icon"></i>
            <h3 className="about-title">Support</h3>
            <span className="about-subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info