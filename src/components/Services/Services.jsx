import React, { useState } from 'react'

import './Services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const items = [
        {
            icon: 'ri-layout-grid-line services-icon',
            title1: 'Front-End',
            title2: 'Developer',
            desc: 'I turn a design into a functional and visually appealing website using React and other related technologies.',
            tasks: [
                'I design, develope, and implement the user interface of a website or a web application.',
                'I optimize website performance, including page load times, rendering speed, and overall user experience.',
                'I perform testing and quality assurance to ensure that my code is working as intended, and that it is compatible with a range of devices and browsers.',
                'I identify and fix bugs, errors, and other issues in the code.'
            ]
        },
        {
            icon: 'ri-edit-box-line services-icon',
            title1: 'Backend',
            title2: 'Developer',
            desc: 'I enjoy writing code to manage the exchange of data between a server and users.',
            tasks: [
                'I write clean, organized, and maintainable code using best practices and following coding standards.',
                'I am able to build and maintain APIs that allow front-end applications to communicate with backend servers and databases.',
                'I manage and store data in databases, such as MySQL and MongoDB.',
                'I optimize server-side architecture to handle large amounts of traffic and to scale the application as needed.'
            ]
        },
        {
            icon: 'ri-code-s-slash-line services-icon',
            title1: 'UI/UX',
            title2: 'Designer',
            desc: 'I value simple content structure, clean design patterns, and thoughtful interactions.',
            tasks: [
                'I conduct user research to understand the needs, preferences, and behaviors of the target audience.',
                'I create wireframes and prototypes to illustrate the layout, flow, and functionality of the product.',
                'I conduct usability testing to evaluate the user experience of the product and to identify areas for improvement.',
                'I create design guidelines and style guides that provide instructions for developers and other stakeholders on how to implement the design.'
            ]
        }
    ]

  return (
    <section className="services section" id="services">
        <h2 className="section-title">Services</h2>
        <span className="section-subtitle">What I Offer</span>
        <div className="services-container container grid">
            {
                items.map(({icon, title1, title2, desc, tasks}, index) => {
                    return <div className="services-content" key={index}>
                        <div>
                            <i className={icon}></i>
                            <h3 
                                className="services-title"
                                data-aos='zoom-in-left'
                                data-aos-duration='1500'>{title1} <br /> {title2}</h3>
                        </div>
                        <span
                            className="services-button" 
                            onClick={() => toggleTab(index+1)}
                            data-aos='zoom-in'
                            data-aos-duration='1500'>
                            View More <i className="ri-arrow-right-line services-button-icon"></i>
                        </span>
                        <div className={toggleState === index+1 ? 'services-modal active-modal' : 'services-modal'}>
                            <div className="services-modal-content">
                                <i onClick={() => toggleTab(0)} className="ri-close-line services-modal-close"></i>
                                <h3 className="services-modal-title">{title1} {title2}</h3>
                                <p className="services-modal-description">{desc}</p>
                                <ul className="services-modal-services grid">
                                    {
                                        tasks.map((task, index) => {
                                            return <li className="services-modal-service" key={index}>
                                                <i className="ri-checkbox-circle-line services-modal-icon"></i>
                                                <p className="services-modal-info">{task}</p>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                })
            } 
        </div>
    </section>
  )
}

export default Services