import { useState } from 'react'
import { themeContext } from './createContext'

export function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState('Light')
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  )
}
