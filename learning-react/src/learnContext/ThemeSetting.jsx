import { useContext } from 'react'
import { ThemeContext } from './createContext'

export function ThemeSetting () {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div>
      <button onClick={() => setTheme(theme == 'Light' ? 'Dark' : 'Light')}>
        Change theme ( current: {theme})
      </button>
    </div>
  )
}
