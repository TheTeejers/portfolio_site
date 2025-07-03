import React, { useState, useEffect, useRef } from 'react'
import '../styles/Header.css'
import Content from '../Content'

const Header = ({ contentSelected, setContentSelected }) => {
  // console.log(contentSelected)
  // Array of texts to cycle through for the h2 element
  const texts = Content().tableOfContents.workTitles

  // State to keep track of the current text index
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  // State to control the visibility of the text for fading effect
  const [isVisible, setIsVisible] = useState(true)
  // Hamburger menu state
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const hamburgerRef = useRef(null)

  // Accessibility: close menu on Escape, trap focus
  useEffect(() => {
    if (!menuOpen) {
      document.body.classList.remove('menu-open')
      return
    }
    document.body.classList.add('menu-open')
    const handleKeyDown = e => {
      if (e.key === 'Escape') setMenuOpen(false)
      // Trap focus inside menu
      if (e.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])'
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  // Close menu on navigation
  const handleNav = section => {
    setContentSelected(section)
    setMenuOpen(false)
  }

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return
    const handleClick = e => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [menuOpen])

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
        <h1 className='header-name' onClick={() => setContentSelected(null)}>
          {Content().tableOfContents.myName}
        </h1>
        {/* <h2 className={isVisible ? 'fade-in' : 'fade-out'}>
          {texts[currentTextIndex]}
        </h2> */}
      </div>
      {/* Desktop Navigation */}
      <div className='navigation-div'>
        <span
          onClick={() => setContentSelected('About')}
          className={contentSelected === 'About' ? 'active' : 'inactive'}
        >
          About Me
        </span>
        <span
          onClick={() => setContentSelected('Experience')}
          className={contentSelected === 'Experience' ? 'active' : 'inactive'}
        >
          Experience
        </span>
        <span
          onClick={() => setContentSelected('Education')}
          className={contentSelected === 'Education' ? 'active' : 'inactive'}
        >
          Education
        </span>
        {/* <span onClick={() => setContentSelected('Projects')} className={contentSelected === 'Projects' ? 'active' : 'inactive'}>Projects</span> */}
        <span
          onClick={() => setContentSelected('Contact')}
          className={contentSelected === 'Contact' ? 'active' : 'inactive'}
        >
          Contact
        </span>
      </div>
      {/* Hamburger Icon (mobile only) */}
      <button
        className='hamburger-btn'
        ref={hamburgerRef}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-controls='mobile-menu'
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(open => !open)}
        tabIndex={0}
      >
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          aria-hidden='true'
          focusable='false'
        >
          <rect y='7' width='32' height='3' rx='1.5' fill='currentColor' />
          <rect y='15' width='32' height='3' rx='1.5' fill='currentColor' />
          <rect y='23' width='32' height='3' rx='1.5' fill='currentColor' />
        </svg>
      </button>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav
          id='mobile-menu'
          className='mobile-nav-dropdown'
          ref={menuRef}
          aria-label='Mobile Navigation'
        >
          <ul style={{ overflowY: 'auto', maxHeight: '60vh', width: '100%' }}>
            <li>
              <button
                onClick={() => handleNav('About')}
                className={contentSelected === 'About' ? 'active' : ''}
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav('Experience')}
                className={contentSelected === 'Experience' ? 'active' : ''}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav('Education')}
                className={contentSelected === 'Education' ? 'active' : ''}
              >
                Education
              </button>
            </li>
            {/* <li><button onClick={() => handleNav('Projects')} className={contentSelected === 'Projects' ? 'active' : ''}>Projects</button></li> */}
            <li>
              <button
                onClick={() => handleNav('Contact')}
                className={contentSelected === 'Contact' ? 'active' : ''}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
