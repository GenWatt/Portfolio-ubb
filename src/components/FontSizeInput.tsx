import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import { Box, Divider, Grid, IconButton, useTheme } from '@mui/material'
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import useLocalStorage from '../hooks/useLocalStorage';
import { useEffect, useState } from 'react';

const MAX_FONT_SIZE = 24
const MIN_FONT_SIZE = 10
const STEP = 1

function FontSizeInput() {
    const theme = useTheme()
    const [currentFontSize, setCurrentFontSize] = useState(16)
    const { setLocalStorage, getLocalStorage } = useLocalStorage()

    useEffect(() => {
        const fontSize = getLocalStorage('fontSize') || '16'
        setCurrentFontSize(+fontSize)
        setFontSize(+fontSize)
    }, [])

    const setFontSize = (size: number) => {
        document.documentElement.style.fontSize = `${size}px`
        setCurrentFontSize(size)
        setLocalStorage('fontSize', size.toString())
    }

    const increaseFontSize = () => {
        const newFontSize = currentFontSize + STEP

        if (newFontSize <= MAX_FONT_SIZE) {
            setFontSize(newFontSize)
        }
    }

    const decreaseFontSize = () => {
        const newFontSize = currentFontSize - STEP

        if (newFontSize >= MIN_FONT_SIZE) {
            setFontSize(newFontSize)
        }
    }

    return (
        <Grid container alignItems={'center'}>
            <Box sx={{ display: 'flex', backgroundColor: theme.palette.background.default, borderRadius: theme.spacing(.4), gap: .5 }}>
                <IconButton onClick={increaseFontSize}>
                    <TextIncreaseIcon />
                </IconButton>
                <Divider orientation="vertical" variant="middle" flexItem />
                <IconButton onClick={decreaseFontSize}>
                    <TextDecreaseIcon />
                </IconButton>
            </Box>
        </Grid>
    )
}

export default FontSizeInput