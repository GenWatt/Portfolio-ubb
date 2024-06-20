import { Typography, TypographyProps } from '@mui/material'
import { useState, useEffect } from 'react'

export interface AnimatedTextProps extends TypographyProps {
    text: string
    delay?: number
}

function AnimatedText({ text, delay = 200, ...props }: AnimatedTextProps) {
    const [newText, setNewText] = useState('')

    function calulateDelayBasedOnLength(text: string, delay: number) {
        return delay / text.length
    }

    useEffect(() => {
        let i = 0

        const interval = setInterval(() => {
            setNewText(text.slice(0, i))
            i++
            if (i > text.length) {
                clearInterval(interval)
            }
        }, calulateDelayBasedOnLength(text, delay))

        return () => {
            clearTimeout(interval)
        }
    }, [text, delay])

    return (
        <Typography {...props}>{newText}</Typography>
    )
}

export default AnimatedText