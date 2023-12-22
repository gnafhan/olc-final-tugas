import React, { useState, useEffect } from 'react'

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  useEffect(() => {
    // Check if dark mode is enabled in local storage
    const savedMode = localStorage.getItem('darkMode')
    setIsDarkMode(savedMode === 'true')
  }, [])

  useEffect(() => {
    // Update the CSS class when dark mode changes
    document.body.classList.toggle('dark', isDarkMode)
    // Save the current mode to local storage
    localStorage.setItem('darkMode', isDarkMode.toString())
  }, [isDarkMode])

  return (
    <button
      className="px-4 py-2 fixed right-4 bottom-5 bg-gray-800 text-white rounded"
      onClick={() => { setIsDarkMode(!isDarkMode) }}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
