import React from 'react'

import './About.css'
import AboutImg from '../../assets/profile.JPG'
import Info from './Info'
import CV from '../../assets/samimqeyamcv.pdf'

const About = () => {
  return (
    <section className="about section" id="about">
        <h2
            className="section-title"
            data-aos='flip-right'
            data-aos-duration='2000'
            data-aos-easing='ease-out-cubic'>About Me</h2>
        <span className="section-subtitle">Introduction</span>
        <div className="about-container container grid">
            <img src={AboutImg} alt="" className="about-img" />
            <div className="about-data">
                <Info />

                <p className="about-description">
                    Hi, my name is Ahmad Samim Qeyam. I am a front-end web developer based in Bishkek,
                    Kyrgyzstan. I started my journey as a web developer since 2018 when I served as a 
                    web developer intern for a startup in India. Since then, I have collaborated with many 
                    local and international businesses and NGOs to create digital products in Afghanistan,
                    India, Kyrgyzstan, and Uzbekistan. I am quietly confident and naturally curious to learn
                    more about new technologies, creative coding, and clean design.
                </p>
                <a href={CV} download='Ahmad Samim Qeyam, CV.pdf' className="button button-flex">
                    Download CV
                    <i className="ri-download-line button-icon"></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default About