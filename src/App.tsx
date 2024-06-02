import { useEffect, useState } from 'react'
import './App.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { Box, Button, FormControl, FormHelperText, Grid, IconButton, Input, InputLabel, Modal, SelectChangeEvent, TextField, Theme, Typography } from '@mui/material'
import { ThemeProvider } from '@emotion/react'

import SideNav from './components/SideNav';
import { darkThemeBluePink, darkThemeGreenPurple, lightTheme } from './themes'
import useLocalStorage from './hooks/useLocalStorage'
import { useLanguage } from './context/LanguageContext'
import { Mail } from '@mui/icons-material'

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
    document.documentElement.style.setProperty('--scrollbar-track-color', theme.palette.background.default);
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

  const open = Boolean(anchorEl);
  const popoverId = open ? 'contact mail popover' : undefined;

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SideNav handleThemeChange={handleThemeChange} currentTheme={currentThemeName} themes={themes} />
        <Box component='div' position={'absolute'} right={10} bottom={10} bgcolor={theme.palette.primary.main} borderRadius={1}>
          <IconButton aria-describedby={popoverId} onClick={handleClick}>
            <Mail />
          </IconButton>
        </Box>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box component='div' sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4
          }}>
            <Grid container p={2} direction={'column'}>
              <Typography variant='h4'>Contact Me</Typography>
              <form style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing(2) }}>
                <FormControl>
                  <InputLabel htmlFor="my-input">Email address</InputLabel>
                  <Input id="my-input" aria-describedby="my-helper-text" />
                  <FormHelperText id="my-helper-text">I'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="my-input">Email address</InputLabel>
                  <TextField multiline id="my-input" aria-describedby="my-helper-text" />
                  <FormHelperText id="my-helper-text">I'll never share your email.</FormHelperText>
                </FormControl>
                <Button variant='contained' color='primary'>Send</Button>
              </form>
            </Grid>
          </Box>
        </Modal>
      </div>
    </ThemeProvider >
  )
}

export default App
