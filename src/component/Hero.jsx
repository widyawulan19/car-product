import React from 'react'
import '../style/HeroStyle.css'
import heroImg from '../assets/tesla1.png'
import { useInView } from 'react-intersection-observer'


function Hero() {
    //animate for img
    const {ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });


  return (
    <div className="hero">
        <div className="hero-text">
            <h1>DRIVE GREEN <br /><span>LIVE CLEAN</span></h1>
            <p>Experience the perfect blend of luxury, performance, and sustainability with our cutting-edge electric vehicles. Designed to minimize your carbon footprint while delivering unparalleled driving pleasure, our cars are the ideal choice for those who care about the planet and their driving experience.</p>
            <button>EXPLORE</button>
        </div>
        <div className={`hero-img ${inView ? 'animate' : ''}`} ref={ref}>
            <img src={heroImg} alt="Hero Car" />
        </div>
    </div>
  )
}

export default Hero