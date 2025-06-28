import React, { useState, useEffect } from 'react';
import '../styles/ContentWindow.css';
import Content from '../Content';

const contentData = Content();
const { tableOfContents } = contentData;


const ContentWindow = ({ contentSelected }) => {
    switch (contentSelected) {
        case 'About':
            return (
                <div className='content-window'>
                    <h1>About</h1>
                </div>
            )
        case 'Experience':
            return (
                <div className='content-window'>
                    <h1>Experience</h1>
                </div>
            )
        case 'Education':
            return (
                <div className='content-window'>
                    <h1>Education</h1>
                </div>
            )
        case 'Projects':
            return (
                <div className='content-window'>
                    <h1>Projects</h1>
                </div>
            )
        case 'Contact':
            return (
                <div className='content-window'>
                    <h1>Contact</h1>
                </div>
            )
    }

}

export default ContentWindow;