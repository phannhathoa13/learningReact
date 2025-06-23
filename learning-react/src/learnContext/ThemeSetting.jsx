import { useContext } from 'react'
import { themeContext } from './createContext'

export function ShowThemeSetting () {
  const { theme, setTheme } = useContext(themeContext)
  return (
    <div>
      <button onClick={() => setTheme(theme == 'Light' ? 'Dark' : 'Light')}>
        Current Theme: {theme}
        {console.log(useContext(themeContext))}
      </button>
    </div>
  )
}
