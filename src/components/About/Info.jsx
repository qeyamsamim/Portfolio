import React from 'react'

const Info = () => {

  const isLarge = window.innerWidth >= 768

  const items = [
    {
      delayLarge: 0,
      delayNotLearge: 0,
      duLarge: 1500,
      icon: 'ri-award-line about-icon',
      title: 'Experience',
      subtitle: '3 Years Working'
    },
    {
      delayLarge: 500,
      delayNotLearge: 0,
      duLarge: 1700,
      icon: 'ri-briefcase-3-line about-icon',
      title: 'Completed',
      subtitle: '+20 Projects'
    },
    {
      delayLarge: 1000,
      delayNotLearge: 0,
      duLarge: 1900,
      icon: 'ri-headphone-fill about-icon',
      title: 'Support',
      subtitle: 'Online 24/7'
    }
  ]

  return (
    <div className="about-info grid">
      {
        items.map((item, index) => {
          return (
            <div
              key={index}
              className="about-box"
              data-aos={ isLarge ? 'fade-left' : 'zoom-in' }
              data-aos-delay={ isLarge ? item.delayLarge : item.delayNotLearge }
              data-aos-duration={ isLarge ? item.duLarge : '2000' }>
                <i className={item.icon}></i>
                <h3 className="about-title">{item.title}</h3>
                <span className="about-subtitle">{item.subtitle}</span>
            </div>    
          )
        })
      }
    </div>
  )
}

export default Info