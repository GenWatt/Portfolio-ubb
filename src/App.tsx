import { useEffect, useState } from 'react'
import './App.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { SelectChangeEvent } from '@mui/material'
import { ThemeProvider } from '@emotion/react'

import SideNav from './components/SideNav';
import { darkThemeBluePink, darkThemeGreenPurple, lightTheme } from './themes'
import useLocalStorage from './hooks/useLocalStorage'
import { useLanguage } from './context/LanguageContext'

const themes = [
  { label: 'Blue Pink', name: 'darkThemeBluePink', theme: darkThemeBluePink },
  { label: 'Green Purple', name: 'darkThemeGreenPurple', theme: darkThemeGreenPurple },
  { label: 'Light Theme', name: 'lightTheme', theme: lightTheme }
]

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setLocalStorage, getLocalStorage } = useLocalStorage()
  const { language } = useLanguage()

  const themeName = getLocalStorage('theme') || 'darkThemeBluePink'
  const [currentThemeName, setCurrentThemeName] = useState(themeName)
  const [theme, setTheme] = useState(getThemeByName(themeName));

  const handleThemeChange = (event: SelectChangeEvent) => {
    const value = event.target.value

    themes.forEach(theme => {
      if (theme.name === value) {
        setTheme(theme.theme)
        setCurrentThemeName(value)
        setLocalStorage('theme', value)
      }
    })
  }

  function getThemeByName(name: string) {
    let theme = darkThemeBluePink

    themes.forEach(t => {
      if (t.name === name) {
        theme = t.theme
      }
    })

    return theme
  }

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/profile')
    }
  }, [location]);

  useEffect(() => {
    document.documentElement.dir = language.langDirection
  }, [language]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SideNav handleThemeChange={handleThemeChange} currentTheme={currentThemeName} themes={themes} />
      </div>
    </ThemeProvider >
  )
}

export default App
