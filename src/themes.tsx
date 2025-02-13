import { createTheme } from "@mui/material"

export const darkThemeBluePink = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
            light: '#a6d4fa',
        },
        secondary: {
            main: '#f48fb1',
            light: '#f8bbd0',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#e8eaf6',
            // secondary: '#90caf9',
        },
    },
    //@ts-ignore
    // shadows: ['none', '2px 2px 25px rgba(144, 202, 249, 0.1)', '2px 2px 20px rgba(144, 202, 249, 0.1)', '0 8px 16px 0 rgba(0,0,0,0.2)', '0 16px 32px 0 rgba(0,0,0,0.2)', '0 32px 64px 0 rgba(0,0,0,0.2)'],
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(27, 22, 22, 0.5)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    border: '1px solid rgba(144, 202, 249, 0.2)',
                    boxShadow: '1px 1px 25px rgba(144, 202, 249, 0.1), -1px -1px 25px rgba(144, 202, 249, 0.1)',
                },
            },
        },
        MuiModal: {
            styleOverrides: {
                root: {
                    backdropFilter: 'blur(10px)',
                    zIndex: 9999999,
                },
            }
        }
    },
})

export const darkThemeGreenPurple = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#a5d6a7',
            light: '#c8e6c9',
        },
        secondary: {
            main: '#ce93d8',
            light: '#e1bee7',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#e8eaf6',
            // secondary: '#90caf9',
        },
    },
    //@ts-ignore
    // shadows: ['none', '5px 5px 25px rgba(165, 214, 167, 0.1)', '2px 2px 20px rgba(165, 214, 167, 0.1)', '0 8px 16px 0 rgba(0,0,0,0.2)', '0 16px 32px 0 rgba(0,0,0,0.2)', '0 32px 64px 0 rgba(0,0,0,0.2)'],
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '5px 5px 15px rgba(77, 77, 77, 0.1), -5px -5px 20px rgba(77, 77, 77, 0.15)',
                },
            },
        },
        MuiModal: {
            styleOverrides: {
                root: {
                    backdropFilter: 'blur(2px)',
                    zIndex: 9999999,
                },
            }
        }
    },
})

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#599cde',
            light: '#7bb4ed',
            dark: '#3399ff',

        },
        secondary: {
            main: '#dc004e',
            light: '#e33371',
        },
        background: {
            default: '#f5f5f5',
            paper: '#fff',
        },
        text: {
            primary: '#333',
            secondary: '#333333',
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 0, 0, 0.2)',
                    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 20px rgba(0, 0, 0, 0.15)',
                },
            },
        },
        MuiModal: {
            styleOverrides: {
                root: {
                    backdropFilter: 'blur(10px)',
                    zIndex: 9999999,
                },
            }
        }
    },
})