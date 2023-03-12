import React from 'react'

const Social = () => {
  const isLarge = window.innerWidth >= 768
  const items = [
    {
      href: 'https://github.com/qeyamsamim',
      delayLarge: 0,
      delayNotLarge: 800,
      icon: 'ri-github-fill'
    },
    {
      href: 'https://www.linkedin.com/in/ahmad-samim-qeyam/',
      delayLarge: 400,
      delayNotLarge: 400,
      icon: 'ri-linkedin-box-fill'
    },
    {
      href: 'https://twitter.com/SamimQeyam',
      delayLarge: 800,
      delayNotLarge: 0,
      icon: 'ri-twitter-fill'
    }
  ]
  return (
    <div className="home-social">
        {
          items.map((item, index) => {
            return (
              <a 
                key={index}
                href={item.href}
                className="home-social-icon"
                target='_blank'
                data-aos={ isLarge ? 'fade-right' : 'fade-down'}
                data-aos-delay={ isLarge ? item.delayLarge : item.delayNotLarge }
                data-aos-duration='1500'
                data-aos-easing='ease-in-sine'>
                  <i className={item.icon}></i>
            </a>
            )
          })
        }
    </div>
  )
}

export default Social