// src/context/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { lightTheme, darkTheme } from '../themes/themes';

// Create a Context
const ThemeContext = createContext();

// Create a Provider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Retrieve theme from local storage on initial render
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light'; // Default to 'light' if no saved theme
    });

    useEffect(() => {
        // Save theme to local storage whenever it changes
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const appliedTheme = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, appliedTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
    return useContext(ThemeContext);
};
