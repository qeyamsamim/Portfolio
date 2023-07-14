import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'

import './Skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 
          className="section-title"
          data-aos='zoom-in'
          data-aos-duration='2000'>Skills</h2>
        <span className="section-subtitle">My Technical Skills</span>
        <div className="skills-container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills