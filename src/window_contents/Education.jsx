import React, { useState, useEffect } from 'react'
import Content from '../Content'

const contentData = Content().education

const Education = () => {
  return (
    <div>
      <h1 className='content-title'>{contentData.title}</h1>
      <div className='content-container'>
        <div className='text'>
          {contentData.institutions.map((institution, index) => (
            <div className='institution-container' key={index}>
              <div className='institution-info'>
                <h2 className='institution-name'>
                  <a
                    href={institution.website}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {institution.school}
                  </a>
                </h2>

                {institution.degree ? (
                  <h4 className='institution-degree'> {institution.degree} </h4>
                ) : null}
              </div>
              <h4 className='institution-location'> {institution.location} </h4>

              <p>{institution.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
