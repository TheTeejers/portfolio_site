import React, { useState, useEffect, useRef } from 'react'
import Content from '../Content'
import me_in_the_woodshop from '../assets/images/me.png'
const contentData = Content().bonus

const Bonus = () => {
  return (
    <div className='content-container'>
      <h1 className='content-title'>{contentData.title}</h1>
      <div className='bonus-container'>
        <div className='bonus-text'>
          {contentData.paragraphs.map((paragraph, index) => (
            <div key={index}>
              <p>{paragraph}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='bonus-image'>
        <img src={me_in_the_woodshop} alt='me in the woodshop' />
      </div>
    </div>
  )
}

export default Bonus
