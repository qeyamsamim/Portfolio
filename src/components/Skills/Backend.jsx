import React from 'react'

const Backend = () => {

    const skillsSet1 = [
        {
            name: 'Node.js',
            level: 'Intermediate'
        },
        {
            name: 'Express.js',
            level: 'Intermediate'
        },
        {
            name: 'MongoDB',
            level: 'Intermediate'
        }
    ]

    const skillsSet2 = [
        {
            name: 'MySQL',
            level: 'Intermediate'
        },
        {
            name: 'REST APIs',
            level: 'Intermediate'
        },
        {
            name: 'Firebase',
            level: 'Intermediate'
        }
    ]

  return (
    <div 
        className="skills-content"
        data-aos='fade-up-left'
        data-aos-duration='2000'>
        <h3 className="skills-title">Backend Development</h3>
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

export default Backend