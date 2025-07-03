import React, { useState, useEffect } from 'react';
import Content from '../Content';
// import '../styles/ContentWindow.css';

const contentData = Content().aboutMe;
console.log(contentData);

const About = ({ setContentSelected }) => {
  return (
    <div className='content-container'>
        <h1>{contentData.title}</h1>
        {contentData.aboutMeTopics.map((topic, index) => (
            <div key={index}>
                <h2>{Object.keys(topic)}</h2>
                <p>{Object.values(topic)}</p>
            </div>
        ))}
        <h3 className='bonus-link' onClick={() => setContentSelected('Bonus')}>bonus about me</h3>

    </div>
  );
};

export default About;