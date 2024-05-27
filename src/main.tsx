import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2bff64',
      light: '#03bf0050',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>,
)
