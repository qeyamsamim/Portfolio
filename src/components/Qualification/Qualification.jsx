import React, { useState } from 'react'

import './Qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="qualification section" id='qualification'>
            <h2
                className="section-title"
                data-aos='zoom-in-down'
                data-aos-duration='1500'
                data-aos-easing="ease-out-cubic">Qualification</h2>
            <span
                className="section-subtitle"
                data-aos='zoom-in-up'
                data-aos-duration='1500'
                data-aos-easing="ease-out-cubic">My Personal Journey</span>
            <div className="qualification-container container">
                <div className="qualification-tabs">
                    <div 
                        className={
                            toggleState === 1 
                                ? 'qualification-button qualification-active button-flex'
                                : 'qualification-button button-flex'
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="ri-file-list-3-line qualification-icon"></i>Education
                    </div>
                    <div
                        className={
                            toggleState === 2
                                ? 'qualification-button qualification-active button-flex'
                                : 'qualification-button button-flex'
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="ri-briefcase-line qualification-icon"></i>Experience
                    </div>
                </div>
                <div className="qualification-sections">
                    <div className={
                        toggleState === 1 
                            ? 'qualification-content qualification-content-active'
                            : 'qualification-content'
                    }>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">MA in Business Administration</h3>
                                <div className="education-info">
                                    <i className="ri-community-line education-icon"></i>
                                    <p className="services-modal-info">American University of Central Asia</p>
                                </div>
                                <div className="education-info">
                                    <i className="ri-map-pin-line education-icon"></i>
                                    <p className="services-modal-info">Bishkek, Kyrgyzstan</p>
                                </div>
                                <div className="education-info">
                                    <i className="ri-calendar-todo-fill education-icon"></i>
                                    <p className="services-modal-info">SEP 2021 - PRESENT</p>
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>
                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title">Bachelor of Software Engineering</h3>
                                <div className="education-info">
                                    <i className="ri-community-line education-icon"></i>
                                    <p className="services-modal-info">American University of Central Asia</p>
                                </div>
                                <div className="education-info">
                                    <i className="ri-map-pin-line education-icon"></i>
                                    <p className="services-modal-info">Bishkek, Kyrgyzstan</p>
                                </div>
                                <div className="education-info">
                                    <i className="ri-calendar-todo-fill education-icon"></i>
                                    <p className="services-modal-info">SEP 2016 - MAY 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={
                        toggleState === 2
                            ? 'qualification-content qualification-content-active'
                            : 'qualification-content'
                    }>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Front-End Web Developer</h3>
                                <div className="education-info">
                                    <i className="ri-community-line education-icon"></i>
                                    <p className="services-modal-info">Technical School of Innovation AUCA</p>
                                </div>
                                <div className="education-info">
                                    <i className="ri-map-pin-line education-icon"></i>
                                    <p className="services-modal-info">Bishkek, Kyrgyzstan</p>
                                </div>
                                <div className="education-info">
                                    <i className="ri-calendar-todo-fill education-icon"></i>
                                    <p className="services-modal-info">OCT 2021 - PRESENT</p>
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>
                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title">Front-End Web Developer</h3>
                                <div className="education-info">
                                    <i className="ri-community-line education-icon"></i>
                                    <p className="services-modal-info">Fanoos Accounting Services</p>
                                </div>
                                <div className="education-info">
                                    <i className="ri-map-pin-line education-icon"></i>
                                    <p className="services-modal-info">Kabul, Afghanistan</p>
                                </div>
                                <div className="education-info">
                                    <i className="ri-calendar-todo-fill education-icon"></i>
                                    <p className="services-modal-info">JUN 2021 - AUG 2021</p>
                                </div>
                            </div>
                        </div>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Full Stack Web Developer </h3>
                                <div className="education-info">
                                    <i className="ri-community-line education-icon"></i>
                                    <p className="services-modal-info">Civil Society and Human Rights Network</p>
                                </div>
                                <div className="education-info">
                                    <i className="ri-map-pin-line education-icon"></i>
                                    <p className="services-modal-info">Kabul, Afghanistan</p>
                                </div>
                                <div className="education-info">
                                    <i className="ri-calendar-todo-fill education-icon"></i>
                                    <p className="services-modal-info">JUN 2020 - MAY 2021</p>
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>
                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title">Web Developer Intern</h3>
                                <div className="education-info">
                                    <i className="ri-community-line education-icon"></i>
                                    <p className="services-modal-info">Kateb University</p>
                                </div>
                                <div className="education-info">
                                    <i className="ri-map-pin-line education-icon"></i>
                                    <p className="services-modal-info">Kabul, Afghanistan</p>
                                </div>
                                <div className="education-info">
                                    <i className="ri-calendar-todo-fill education-icon"></i>
                                    <p className="services-modal-info">JUN 2019 - AUG 2019</p>
                                </div>
                            </div>
                        </div>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Web Developer Intern</h3>
                                <div className="education-info">
                                    <i className="ri-community-line education-icon"></i>
                                    <p className="services-modal-info">DAVAY Digital Media LLP</p>
                                </div>
                                <div className="education-info">
                                    <i className="ri-map-pin-line education-icon"></i>
                                    <p className="services-modal-info">Uttarakhand, India</p>
                                </div>
                                <div className="education-info">
                                    <i className="ri-calendar-todo-fill education-icon"></i>
                                    <p className="services-modal-info">JUN 2018 - AUG 2018</p>
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification