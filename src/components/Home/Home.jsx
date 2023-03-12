import React from 'react'

import Social from './Social'
import './Home.css'
import Data from './Data'
import ScrollDown from './ScrollDown'

const Home = () => {
  const isLarge = window.innerWidth > 576

  return (
    <section className="home section" id="home">
        <div className="home-container container grid">
            <div className="home-content grid">
                <Social />
                <div 
                  className="home-img"
                  data-aos={ isLarge ? 'fade-left' : 'zoom-in'}
                  data-aos-duration='1500'>

                </div>
                <Data />
            </div>
            <ScrollDown />
        </div>
    </section>
  )
}

export default Home