import React from 'react'

const Frontend = () => {

    const isLarge = window.innerWidth >= 768

    const skillsSet1 = [
        {
            name: 'JavaScript',
            level: 'Advanced'
        },
        {
            name: 'React.js',
            level: 'Advanced'
        },
        {
            name: 'Redux',
            level: 'Advanced'
        },
        {
            name: 'TypeScript',
            level: 'Intermediate'
        }
    ]

    const skillsSet2 = [
        {
            name: 'HTML5',
            level: 'Advanced'
        },
        {
            name: 'CSS',
            level: 'Advanced'
        },
        {
            name: 'Bootstrap',
            level: 'Advanced'
        },
        {
            name: 'Git',
            level: 'Intermediate'
        }
    ]

  return (
    <div 
        className="skills-content"
        data-aos={ isLarge ? 'fade-up-right' : 'fade-up'}
        data-aos-duration='2000'>
        <h3 className="skills-title">Frontend Development</h3>
        <div className="skills-box">
            <div className="skills-group">
                {
                    skillsSet1.map(({name, level}, index) => {
                        return <div className="skills-data" key={index}>
                            <i className="ri-award-fill"></i>
                            <div>
                                <h3 className="skills-name">{name}</h3>
                                <span className="skills-level">{level}</span>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="skills-group">
                {
                    skillsSet2.map(({name, level}, index) => {        
                        return <div className="skills-data" key={index}>
                            <i className="ri-award-fill"></i>
                            <div>
                                <h3 className="skills-name">{name}</h3>
                                <span className="skills-level">{level}</span>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Frontend