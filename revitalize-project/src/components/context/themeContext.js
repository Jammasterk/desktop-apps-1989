import React, { useState } from 'react'
const ThemeContext = React.createContext()



console.log(ThemeContext)

function ThemeContextProvider(){
	const [theme, setTheme] = useState('dark')
	function toggleTheme(){
		setTheme(prevTheme => prevTheme === "dark" ? "dark" : "light")
	}
	return(
		<ThemeContext.Provider value={{theme, setTheme}}>
			{props.children}
		</ThemeContext.Provider>
	)
}

export {ThemeContext, ThemeContextProvider}
