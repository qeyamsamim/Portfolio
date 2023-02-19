import React, { useState } from 'react'

import './Header.css'

const Header = () => {

    const [toggle, setToggle] = useState(false)
    const [activeNav, setActiveNav] = useState('#home')
    const items = [
        {
            href: '#home',
            icon: 'ri-home-5-line nav-icon',
            title: 'Home'
        },
        {
            href: '#about',
            icon: 'ri-user-line nav-icon',
            title: 'About'
        },
        {
            href: '#skills',
            icon: 'ri-code-s-slash-line nav-icon',
            title: 'Skills'
        },
        {
            href: '#services',
            icon: 'ri-briefcase-line nav-icon',
            title: 'Services'
        },
        {
            href: '#qualification',
            icon: 'ri-profile-line nav-icon',
            title: 'Qualification'
        },
        {
            href: '#portfolio',
            icon: 'ri-file-text-line nav-icon',
            title: 'Portfolio'
        }
    ]

  return (
    <header className="header">
        <nav className="nav container">
            <a href="" className="nav-logo">Ahmad Samim Qeyam</a>
            <div className={toggle ? 'nav-menu show-menu' : 'nav-menu'}>
                <ul className="nav-list">
                    {
                        items.map(({href, icon, title}, index) => {
                            return <li className="nav-item" key={index}>
                                <a 
                                    href={href} 
                                    onClick={() => setActiveNav({href})}
                                    className={ activeNav === href ? 
                                        'nav-link active-link' :
                                        'nav-link'
                                    }>
                                    <i className={icon}></i> {title}
                                </a>
                            </li>
                        })
                    }
                </ul>
                <i className="ri-close-line nav-close" onClick={() => setToggle(!toggle)}></i>
            </div>
            <div className="nav-toggle" onClick={() => setToggle(!toggle)}>
                <i className="ri-apps-line"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header