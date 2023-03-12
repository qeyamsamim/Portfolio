import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';

import './Portfolio.css'
import { Data } from './Data'


const Portfolio = () => {
    const isLarge = window.innerWidth >= 768

  return (
    <section className="portfolio container section" id='portfolio'>
        <h2 
            className="section-title"
            data-aos={isLarge ? 'fade-right' : 'zoom-in'}
            data-aos-duration='2000'>Portfolio</h2>
        <span 
            className="section-subtitle"
            data-aos={isLarge ? 'fade-left' : 'zoom-in'}
            data-aos-duration='2000'>My Recent Works</span>
        <Swiper 
            className="portfolio-container"
            grabCursor={true}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 15,
            }
            }}
            modules={[Pagination]}>
            {Data.map(({id, image, name, url, year, stack}) => {
                return (
                    <SwiperSlide className='portfolio-card' key={id}>
                        <img src={image} alt={name} className='portfolio-image' />
                        <div className="portfolio-card-text">
                            <h3 className="portfolio-name">{name}</h3>
                            <div className="project-year">
                                <p className="stack-title">Year:</p>
                                <p className='portfolio-details'>{year}</p>
                            </div>
                            <span className="stack-title">Stack:</span>
                            {stack.map((item, index) => {
                                return <span key={index} className='portfolio-details'>
                                    {item}{index != (stack.length-1) && <span>, </span>} </span>
                            })}
                            <br />
                            <div className="button-position">
                                <a 
                                    href={url} 
                                    target='_blank' 
                                    className='button button-flex'>
                                        Visit<i className="ri-arrow-right-line button-icon"></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Portfolio