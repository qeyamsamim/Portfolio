import React from 'react'

const Social = () => {
  return (
    <div className="home-social">
        <a 
          href="https://github.com/qeyamsamim"
          className="home-social-icon"
          target='_blank'
          data-aos='fade-right'
          data-aos-duration='1500'
          data-aos-easing='ease-in-sine'>
            <i className="ri-github-fill"></i>
        </a>
        <a 
          href="https://www.linkedin.com/in/ahmad-samim-qeyam/"
          className="home-social-icon"
          target='_blank'
          data-aos='fade-right'
          data-aos-delay='400'
          data-aos-duration='1500'
          data-aos-easing='ease-in-sine'>
            <i className="ri-linkedin-box-fill"></i>
        </a>
        <a 
          href="https://twitter.com/SamimQeyam"
          className="home-social-icon"
          target='_blank'
          data-aos='fade-right'
          data-aos-delay='800'
          data-aos-duration='1500'
          data-aos-easing='ease-in-sine'>
            <i className="ri-twitter-fill"></i>
        </a>
    </div>
  )
}

export default Social