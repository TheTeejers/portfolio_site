import React, { useState, useEffect, useRef } from 'react'
import '../styles/ContentWindow.css'
import About from '../window_contents/About'
import Experience from '../window_contents/Experience'
import Education from '../window_contents/Education'
import Contact from '../window_contents/Contact'
import Bonus from '../window_contents/Bonus'
import Content from '../Content'

const ContentWindow = ({ contentSelected, setContentSelected }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [currentContent, setCurrentContent] = useState(contentSelected)
  const [isAnimating, setIsAnimating] = useState(false)
  const [titlePositions, setTitlePositions] = useState([])
  const animationRef = useRef(null)

  useEffect(() => {
    if (contentSelected !== currentContent) {
      // Start fade out animation
      setIsVisible(false)
      setIsAnimating(true)

      // Wait for fade out to complete, then change content and fade in
      const timer = setTimeout(() => {
        setCurrentContent(contentSelected)
        setIsVisible(true)
        
        // Scroll to top after content has actually changed
        window.scrollTo({ top: 0, behavior: 'smooth' })

        // Remove animation class after fade in completes
        const fadeInTimer = setTimeout(() => {
          setIsAnimating(false)
        }, 500)

        return () => clearTimeout(fadeInTimer)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [contentSelected, currentContent])

  const randomDelay = Math.random() * 1.5
  const rollThroughTitles = (title, index) => {
    
    return (
<h1
  className='work-title'
  key={index}
  data-text={title}
  style={{
    animation: `textGlow 1.5s ease-in forwards`, /* Added 'forwards' here */
    animationDelay: `${index * 0.1}s`,
    transition: `opacity ${0.2 + index * 0.6}s linear`,
  }}
>
  {title}
</h1>
    )
  }

  const getContent = () => {
    switch (currentContent) {
      case 'About':
        return (
          <div className='content-window'>
            <About setContentSelected={setContentSelected} />
          </div>
        )
      case 'Experience':
        return (
          <div className='content-window'>
            <Experience />
          </div>
        )
      case 'Education':
        return (
          <div className='content-window'>
            <Education />
          </div>
        )
      case 'Projects':
        return (
          <div className='content-window'>
            <h1>Projects</h1>
            <h2>Coming Soon!</h2>
          </div>
        )
      case 'Contact':
        return (
          <div className='content-window'>
            <Contact />
          </div>
        )
      case 'Bonus':
        return (
          <div className='content-window'>
            <Bonus />
          </div>
        )
      default:
        return (
          <div className='work-titles'>
            {Content().tableOfContents.workTitles.map(
              (title, index) => (
                rollThroughTitles(title, index)

              )
            )}
          </div>
        )
    }
  }

  const content = getContent()

  if (!content) return null

  // Clone the content element and add animation classes
  const animatedContent = React.cloneElement(content, {
    className: `${content.props.className} ${
      isVisible ? 'fade-in' : 'fade-out'
    }`
  })

  return animatedContent
}

export default ContentWindow
