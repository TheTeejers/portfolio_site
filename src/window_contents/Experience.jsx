import React, { useState, useEffect } from 'react'
import Content from '../Content'
// import '../styles/ContentWindow.css';

const contentData = Content().experience

const Experience = () => {
  return (
    <div>
      <h1 className='content-title'>{contentData.title}</h1>
      <div className='content-container'>
        <div className='text'>
          {contentData.experiences.map((experience, index) => (
            <div key={index}>
              {experience.company && (
                <h2 className='company-name'>
                  <a
                    href={experience.website}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {experience.company}
                  </a>
                </h2>
              )}
              <div className='title-dates'>
                <h3 className='experience-title'>{experience.title}</h3>
                <h4>{experience.dates}</h4>
              </div>
              <ul>
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
