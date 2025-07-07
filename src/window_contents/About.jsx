import React, { useState, useEffect } from 'react'
import Content from '../Content'
import me_being_professional from '../assets/images/me-prof-2.png'

const contentData = Content().aboutMe
console.log(contentData)

const About = ({ setContentSelected }) => {
  return (

    
    <div className='content-container'>
    <h1 className='content-title'>{contentData.title}</h1>
      <div className='about-me-container'>
        <div className='about-me-text'>
          {contentData.aboutMeTopics.map((topic, index) => (
            <div key={index}>
              <h2>{Object.keys(topic)}</h2>
              <p>{Object.values(topic)}</p>
            </div>
          ))}
          <h3
            className='bonus-link'
            onClick={() => setContentSelected('Bonus')}
          >
            bonus about me
          </h3>
        </div>
      </div>
      <div className='about-me-image'>
        <img src={me_being_professional} alt='me being professional' />
      </div>
    </div>

  )
}

export default About
