import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile_img from '../../assets/about_profile.svg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        {/* <div className="about-left">
            <img src={about_profile_img} alt="" />
        </div> */}
        <div className="about-right">
            <div className="about-para">
                <p>I am an passionate Web Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations and Projects, contributing to their success and growth.</p>
                <p>My passion for Full Stack Development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"85%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>Mongo DB</p><hr style={{width:"100%"}} /></div>
                <div className="about-skill"><p>Express js</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>Node js</p><hr style={{width:"80%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE IN WEB DEVELOPMENT</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Grand Finalist</h1>
            <p>SMART INDIA HACKATHON </p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>SDE Intern</h1>
            <p>Shipsy</p>
        </div>
      </div>
    </div>
  )
}

export default About
