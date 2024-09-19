//CONTEXT PROVIDER THAT LET USERS TO SWITCH BETWEEN LIGHT AND DARK THEMES
import React, { createContext, useContext, useState, useTheme } from 'react';

const ThemeContext = createContext();

const Nineteen = () => {
    const {isDarkMode,toggleTheme} = useTheme();
  return (
    <div>
     <label> 
        <input type='checkbox' checkled={isDarkMode} onChange={toggleTheme}/>
        DARK  MODE
     </label>
    </div>
  )
}

export default Nineteen
