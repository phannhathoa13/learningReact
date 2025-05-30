import { useState } from 'react'
import { ThemeContext } from './createContext'

function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState('Light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider }
