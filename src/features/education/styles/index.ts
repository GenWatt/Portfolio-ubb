import { Card, styled } from '@mui/material'
import { animated } from '@react-spring/web'

export const AnimatedCard = styled(animated(Card))(({ theme }) => ({
    transition: 'transform 0.3s, box-shadow 0.3s',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${theme.palette.action.hover} 100%)`,
    borderRadius: '16px !important',
    overflow: 'hidden',
    '&:hover': {
        transform: 'translateY(-5px)'
    }
}))

export const SchoolLogo = styled('div')(({ theme }) => ({
    width: theme.spacing(20),
    height: theme.spacing(20),
    borderRadius: '.5rem',
    margin: theme.spacing(2),
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.1)'
    }
}))

export const DescriptionContainer = styled('div')(({ theme }) => ({
    margin: theme.spacing(1, 0),
    padding: theme.spacing(2),
    borderRadius: 10,
    background: theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, 0.05)'
        : 'rgba(0, 0, 0, 0.03)',
    backdropFilter: 'blur(4px)',
    border: `1px solid ${theme.palette.divider}`
}))

export const CurrentIndicator = styled('div')(({ theme }) => ({
    width: 10,
    height: 10,
    borderRadius: '50%',
    margin: theme.spacing(0, 1),
    animation: 'pulse 1.5s infinite',
    '@keyframes pulse': {
        '0%': { boxShadow: `0 0 0 0 ${theme.palette.success.main}80` },
        '70%': { boxShadow: `0 0 0 8px ${theme.palette.success.main}00` },
        '100%': { boxShadow: `0 0 0 0 ${theme.palette.success.main}00` }
    }
}))