import React, { useState, useEffect } from 'react'
import '../styles/Header.css'

const Header = ({ contentSelected, setContentSelected }) => {
  console.log(contentSelected)
  // Array of texts to cycle through for the h2 element
  const texts = [
    'Software Engineer',
    'Support Engineer',
    'Web Developer',
    'Woodworker'
  ]

  // State to keep track of the current text index
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  // State to control the visibility of the text for fading effect
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // This effect runs whenever currentTextIndex or isVisible changes

    let timeout1 // Timeout for fading out
    let timeout2 // Timeout for fading in the next text

    if (isVisible) {
      // If the text is currently visible, set a timeout to fade it out
      // after 2 seconds (2000 ms). This is when the text is displayed.
      timeout1 = setTimeout(() => {
        setIsVisible(false) // Start fading out
      }, 2000) // Display each text for 2 seconds
    } else {
      // If the text is currently invisible (faded out), set a timeout
      // to change the text and fade in the new one.
      // This timeout (500 ms) should match the CSS transition duration
      // to ensure the text changes only after it's fully faded out.
      timeout2 = setTimeout(() => {
        // Move to the next text in the array.
        // Use modulo operator to cycle back to the beginning after the last text.
        setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length)
        setIsVisible(true) // Fade in the new text
      }, 500) // Wait for the fade-out transition to complete (500ms from CSS)
    }

    // Cleanup function: Clear timeouts when the component unmounts
    // or before the effect re-runs. This prevents memory leaks and
    // ensures timeouts don't fire unexpectedly if the component is removed.
    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
    }
  }, [currentTextIndex, isVisible, texts.length]) // Dependencies for useEffect

  return (
    <header className='header-container'>
      <div className='header-left'>
        <h1>TJ Loughry</h1>
        <h2 className={isVisible ? 'fade-in' : 'fade-out'}>
          {texts[currentTextIndex]}
        </h2>
      </div>
      <div className='navigation-div'>
        <span onClick={() => setContentSelected('About')}>About</span>
        <span onClick={() => setContentSelected('Experience')}>Experience</span>
        <span onClick={() => setContentSelected('Education')}>Education</span>
        <span onClick={() => setContentSelected('Projects')}>Projects</span>
        <span onClick={() => setContentSelected('Contact')}>Contact</span>
      </div>
    </header>
  )
}

export default Header
