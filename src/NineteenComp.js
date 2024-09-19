//Nineteen Part
import React from 'react'
import { useTheme } from './ThemeContext'
import './styles/Nineteen.css'
import themeClass from './styles/Nineteen.css'

const NineteenComp = () => {
    const {isDarkMode,toggleTheme} = useTheme();
    const theme = isDarkMode ? 'dark-theme' : 'light-theme';
  return (
    <div className={`container ${themeClass}`}>
        <p>This component uses selected theme</p>
      
    </div>
  )
}

export default NineteenComp
