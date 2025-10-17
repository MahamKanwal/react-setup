// step 1 create a context
// step 2 create a conext provider
// step 3 return with wraped children
// step 4 add a value in context provider prop
// step 5 wrap app with this provider
// step 6 create a useConetxt custom function

import { createContext, useContext, useEffect, useState } from "react";

const themeContext = createContext();

const ThemeProvider = ({ children }) => {
    const getThemeValue = () => {
        console.log(localStorage.getItem("darkMode"))
        return localStorage.getItem("darkMode") || false;
    }

    const [darkMode, setDarkMode] = useState(getThemeValue);

    const toggleTheme = () => {
        localStorage.setItem("darkMode", !darkMode);
        setDarkMode(!darkMode);

    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    const themeContextValue = {
        darkMode,
        toggleTheme
    }


    return (
        <themeContext.Provider value={themeContextValue}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider;


// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(themeContext);

