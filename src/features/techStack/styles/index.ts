import { Grid, Typography, styled } from '@mui/material'
import { animated } from '@react-spring/web'

export const StyledTechCard = styled(animated(Grid))(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius * 2,
    overflow: 'hidden',
    width: 300,
    cursor: 'pointer',
    transition: theme.transitions.create(['transform', 'box-shadow'], {
        duration: theme.transitions.duration.shorter,
    }),
    '&:hover': {
        boxShadow: theme.shadows[6],
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        background: `linear-gradient(${theme.palette.background.default}, ${theme.palette.primary.dark})`,
        opacity: .7,
    },
}))

export const ImageContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    width: 100,
    height: 100,
    margin: '0 auto',
    '&::after': {
        content: '""',
        position: 'absolute',
        top: '-5%',
        left: '-5%',
        right: '-5%',
        bottom: '-5%',
        borderRadius: '50%',
        background: `radial-gradient(circle at 50% 50%, ${theme.palette.primary.main} 0%, transparent 70%)`,
        opacity: 0,
        transition: theme.transitions.create('opacity'),
    },
    '&:hover::after': {
        opacity: 0.3,
    },
}))

export const TechName = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    letterSpacing: 1,
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: theme.typography.h6.fontSize,
}))

export const StarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    gap: 4,
})
