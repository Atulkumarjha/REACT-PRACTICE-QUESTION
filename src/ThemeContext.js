//Nineteen Part
import React from 'react'

const ThemeContext = React.createContext()

const ThemeProvider = ({children}) => {
    const [isDark,setDarkMode] = React.useState(false);

    const toggleTheme = () =>{
        setDarkMode((prevMode)=>!prevMode)
    };

    return(
        <ThemeContext.Provider value={{isDark,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};


const useTheme = () => {
    return React.useContext(ThemeContext)
}

export {useTheme,ThemeProvider}