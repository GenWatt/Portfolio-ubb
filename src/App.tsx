import { useEffect, useState } from 'react'
import './App.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { Box, IconButton, SelectChangeEvent, Theme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import SideNav from './features/sidenav/components/SideNav';
import { darkThemeBluePink, darkThemeGreenPurple, lightTheme } from './themes'
import useLocalStorage from './features/shared/hooks/useLocalStorage'
import { useLanguage } from './context/LanguageContext'
import { Mail } from '@mui/icons-material'
import ModalContact from './features/contact/components/ModalContact'

import SchoolIcon from '@mui/icons-material/School';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HandymanIcon from '@mui/icons-material/Handyman';
import Person2Icon from '@mui/icons-material/Person2';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const navRoutes = [
  { text: 'Profile', path: '/profile', icon: <Person2Icon /> },
  { text: 'Contact', path: '/contact', icon: <PhoneIcon /> },
  { text: 'Projects', path: '/projects', icon: <HandymanIcon /> },
  { text: 'Education', path: '/education', icon: <SchoolIcon /> },
  { text: 'Resume', path: '/resume', icon: <PictureAsPdfIcon /> },
  { text: 'TechStack', path: '/stack', icon: <JavascriptIcon /> },
  { text: 'Experience', path: '/experience', icon: <KeyboardArrowUpIcon /> },
  // { text: 'Game', path: '/game', icon: <SportsEsportsIcon />, inProgress: true },
]

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
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  function changeCssVariables(theme: Theme) {
    document.documentElement.style.setProperty('--scrollbar-thumb-color', theme.palette.primary.main);
    document.documentElement.style.setProperty('--scrollbar-track-color', theme.palette.background.paper);
  }

  const handleThemeChange = (event: SelectChangeEvent) => {
    const value = event.target.value

    themes.forEach(theme => {
      if (theme.name === value) {
        setTheme(theme.theme)
        setCurrentThemeName(value)
        setLocalStorage('theme', value)
        changeCssVariables(theme.theme)
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
    changeCssVariables(theme)
  }, [location]);

  useEffect(() => {
    document.documentElement.dir = language.langDirection
  }, [language]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SideNav handleThemeChange={handleThemeChange} currentTheme={currentThemeName} themes={themes} navRoutes={navRoutes} />
        <Box component='div' position={'fixed'} right={10} bottom={65} bgcolor={theme.palette.primary.main} borderRadius={1}>
          <IconButton onClick={handleClick}>
            <Mail />
          </IconButton>
        </Box>

        <ModalContact anchorEl={anchorEl} handleClose={handleClose} />
      </div>
    </ThemeProvider>
  )
}

export default App