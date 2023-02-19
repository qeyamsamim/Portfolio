import React from 'react';

import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const items = [
        {
            name: 'About',
            url: '#about'
        },
        {
            name: 'Services',
            url: '#services'
        },
        {
            name: 'Projects',
            url: '#portfolio'
        }
    ]
    return (
        <footer className="footer">
            <div className="footer-container container">
                <h1 className="footer-title">Ahmad Samim Qeyam</h1>
                <ul className="footer-list">
                    {
                        items.map(({name, url}, index) => {
                            return <a href={url} className='footer-link'>{name}</a>
                        })
                    }
                </ul>
                <div className="footer-social">
                    <a 
                        href="https://github.com/qeyamsamim"
                        className="footer-social-icon"
                        target='_blank'>
                        <i className="ri-github-fill"></i>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/ahmad-samim-qeyam/"
                        className="footer-social-icon"
                        target='_blank'>
                        <i className="ri-linkedin-box-fill"></i>
                    </a>
                    <a 
                        href="https://twitter.com/SamimQeyam"
                        className="footer-social-icon"
                        target='_blank'>
                        <i className="ri-twitter-fill"></i>
                    </a>
                </div>
                <span className="footer-copy">
                    Copyright &#169; {currentYear} - Ahmad Samim Qeyam. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer