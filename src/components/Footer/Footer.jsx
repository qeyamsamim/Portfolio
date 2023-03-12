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

    const socialItems = [
        {
            href: 'https://github.com/qeyamsamim',
            icon: 'ri-github-fill'
        },
        {
            href: 'https://www.linkedin.com/in/ahmad-samim-qeyam/',
            icon: 'ri-linkedin-box-fill'
        },
        {
            href: 'https://twitter.com/SamimQeyam',
            icon: 'ri-twitter-fill'
        }
        
    ]
    return (
        <footer className="footer">
            <div className="footer-container container">
                <h1 className="footer-title">Ahmad Samim Qeyam</h1>
                <ul className="footer-list">
                    {
                        items.map(({name, url}, index) => {
                            return <a href={url} className='footer-link' key={index}>{name}</a>
                        })
                    }
                </ul>
                <div className="footer-social">
                    {
                        socialItems.map(({ href, icon }, index) => {
                            return <a
                                key={index}
                                href={href}
                                className="footer-social-icon"
                                target='_blank'>
                                <i className={icon}></i>
                            </a>        
                        })
                    }
                </div>
                <span className="footer-copy">
                    Copyright &#169; {currentYear} - Ahmad Samim Qeyam. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer