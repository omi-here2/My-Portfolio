import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Omi Vaish</span> </h1>
      <p>A Full Stack developer With a solid educational background in Computer Science from the Indian Institute of Information Technology, Kottayam.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        {/* <div className="hero-resume">My resume</div> */}
        <a 
  href="https://drive.google.com/file/d/1cuaAzG4eRlqtaH3-gscfLQPLminW3hs6/view?usp=drive_link" 
  target="_blank" 
  rel="noopener noreferrer"
  className="hero-resume-button"
>
  <div className="hero-resume">My Resume</div>
</a>
      </div>
    </div>
  )
}

export default Hero
