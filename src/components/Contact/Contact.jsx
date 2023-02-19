import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css'

const Contact = () => {
    const form = useRef();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [project, setProject] = useState('')

    const items = [
        {
            icon: 'ri-mail-line contact-card-icon',
            name: 'Email',
            contact: 'ahmad.qeyam@gmail.com',
            url: 'mailto:ahmad.qeyam@gmail.com'
        },
        {
            icon: 'ri-whatsapp-line contact-card-icon',
            name: 'WhatsApp',
            contact: '996999899400',
            url: 'https://web.whatsapp.com/send?phone=996999899400'
        },
        {
            icon: 'ri-telegram-line contact-card-icon',
            name: 'Telegram',
            contact: '@samimqeyam',
            url: 'https://telegram.me/samimqeyam'
        }
    ]

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const projectChangeHandler = (event) => {
        setProject(event.target.value)
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_3efq46t',
            'template_jl44rfh',
            form.current,
            'zuQPgNfI0wdURnp8y'
        )
        .then(() => {
            setName('')
            setEmail('')
            setProject('')
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <section className="contact" id="contact">
        <h2 className="section-title">Get in touch</h2>
        <span className="section-subtitle">Contact Me</span>
        <div className="contact-container container grid">
            <div className="contact-content">
                <h3 className="contact-title">Talk to me</h3>
                <div className="contact-info">
                    {
                        items.map(({icon, name, contact, url}, index) => {
                            return <div
                                className="contact-card"
                                data-aos='fade-up'
                                data-aos-duration='1500'
                                key={index}>
                                <i className={icon}></i>
                                <h3 className="contact-card-title">{name}</h3>
                                <span className="contact-card-data">{contact}</span>
                                <a href={url} className="contact-button" target='_blank'>
                                    Write me <i className="ri-arrow-right-line contact-button-icon"></i>
                                </a>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="contact-content">
                <h3 className="contact-title">Write me your projects</h3>
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="contact-form-div">
                        <label className="contact-form-tag">Name</label>
                        <input 
                            type="text"
                            name='name'
                            value={name}
                            onChange={nameChangeHandler}
                            className='contact-form-input'
                            placeholder='Insert Your Name...'
                            required />
                    </div>
                    <div className="contact-form-div">
                        <label className="contact-form-tag">Email</label>
                        <input 
                            type="email"
                            name='email'
                            value={email}
                            onChange={emailChangeHandler}
                            className='contact-form-input'
                            placeholder='Insert Your Email...'
                            required />
                    </div>
                    <div className="contact-form-div contact-form-area">
                        <label className="contact-form-tag">Project</label>
                        <textarea 
                            name="project"
                            value={project} 
                            onChange={projectChangeHandler}
                            cols="30" 
                            rows="10"
                            className='contact-form-input'
                            placeholder='Write Your Project'
                            required></textarea>
                    </div>
                    <button 
                        href="" 
                        className="button button-flex"
                        data-aos='fade-left'
                        data-aos-duration='2000'>Send Message<i className="ri-send-plane-line button-icon"></i></button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact