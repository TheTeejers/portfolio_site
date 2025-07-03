import React, { useState, useEffect, useRef } from 'react'
import Content from '../Content'
import mailIcon from '../assets/icons/mail.svg'
import phoneIcon from '../assets/icons/phone.svg'
import gitHubIcon from '../assets/icons/github.svg'
import linkedInIcon from '../assets/icons/linkedin.svg'
import faceBookIcon from '../assets/icons/facebook.svg'
import instagramIcon from '../assets/icons/instagram.svg'
import websiteIcon from '../assets/icons/website.svg'
import youtubeIcon from '../assets/icons/youtube.svg'
const contentData = Content().contact

const Contact = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const timeoutRef = useRef(null)

  const handleIconHover = icon => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    // Reset fade state and set new icon
    setIsFadingOut(false)
    setHoveredIcon(icon)
  }

  const handleIconLeave = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Set new timeout for fade out
    timeoutRef.current = setTimeout(() => {
      setIsFadingOut(true)
      timeoutRef.current = setTimeout(() => {
        setHoveredIcon(null)
        setIsFadingOut(false)
        timeoutRef.current = null
      }, 500)
    }, 3500)
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div className='contact-container'>
      <h1>{contentData.title}</h1>
      <h2>Inquiries for my tech work</h2>
      <div className='contact-icons'>
        <a
          href={`mailto:${contentData.email}?subject=Portfolio Contact`}
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={() => handleIconHover(contentData.email)}
          onMouseLeave={handleIconLeave}
        >
          <img src={mailIcon} alt='mail' className='icon' />
        </a>
        <a
          href={`tel:${contentData.phone}`}
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={() => handleIconHover(contentData.phone)}
          onMouseLeave={handleIconLeave}
        >
          <img src={phoneIcon} alt='phone' className='icon' />
        </a>
        <a
          href={contentData.gitHub}
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={() => handleIconHover(contentData.gitHub)}
          onMouseLeave={handleIconLeave}
        >
          <img src={gitHubIcon} alt='gitHub' className='icon' />
        </a>
        <a
          href={contentData.linkedIn}
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={() => handleIconHover(contentData.linkedIn)}
          onMouseLeave={handleIconLeave}
        >
          <img src={linkedInIcon} alt='linkedIn' className='icon' />
        </a>
        {/* <a
          href={contentData.faceBook}
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={() => handleIconHover(contentData.faceBook)}
          onMouseLeave={handleIconLeave}
        >
          <img src={faceBookIcon} alt='faceBook' className='icon' />
        </a> */}
      </div>

      <h2>Inquiries for my woodworking work</h2>
      <div className='contact-icons'>
        <a
          href={`mailto:${contentData.woodworkingEmail}?subject=Portfolio Contact`}
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={() => handleIconHover(contentData.woodworkingEmail)}
          onMouseLeave={handleIconLeave}
        >
          <img src={mailIcon} alt='mail' className='icon' />
        </a>
        <a
          href={contentData.woodworkingInstagram}
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={() => handleIconHover(contentData.woodworkingInstagram)}
          onMouseLeave={handleIconLeave}
        >
          <img src={instagramIcon} alt='instagram' className='icon' />
        </a>
        <a
          href={contentData.woodworkingWebsite}
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={() => handleIconHover(contentData.woodworkingWebsite)}
          onMouseLeave={handleIconLeave}
        >
          <img src={websiteIcon} alt='website' className='icon' />
        </a>
        <a
          href={contentData.woodworkingYouTube}
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={() => handleIconHover(contentData.woodworkingYouTube)}
          onMouseLeave={handleIconLeave}
        >
          <img src={youtubeIcon} alt='youtube' className='icon' />
        </a>
      </div>
      <div className={`contact-text ${isFadingOut ? 'fade-out' : ''}`}>
        <h2>{hoveredIcon}</h2>
      </div>
    </div>
  )
}

export default Contact
