import { Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import { ITechStackList } from '../../../pages/TechStackPage'
import { animated, useSpring, useTrail } from '@react-spring/web'
import StarIcon from '@mui/icons-material/Star'
import { StyledTechCard, ImageContainer, TechName, StarContainer } from '../styles'

export interface TechStackItemHtmlProps {
    tech: ITechStackList
    onItemEnter: (isHovered: boolean) => void
}

function TechStackItemHtml({ tech, onItemEnter }: TechStackItemHtmlProps) {
    const theme = useTheme()
    const [hovered, setHovered] = useState(false)

    const [spring] = useSpring(() => ({
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        config: { tension: 300, friction: 10 },
    }))

    const starTrail = useTrail(tech.stars, {
        opacity: hovered ? 1 : 0.6,
        transform: `scale(${hovered ? 1.2 : 1})`,
        config: { mass: 1, tension: 2000, friction: 200 },
    })

    const handleHover = (isHovered: boolean) => {
        setHovered(isHovered)
        onItemEnter(isHovered)
    }

    return (
        <StyledTechCard
            container
            item
            lg={12}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            style={spring}
            sx={{
                p: 4,
                m: 2,
                minHeight: 240,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <ImageContainer>
                <img
                    src={tech.image}
                    alt={tech.name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        filter: hovered ? 'drop-shadow(0 0 8px rgba(255,255,255,0.4))' : 'none',
                        transition: theme.transitions.create('filter'),
                    }}
                />
            </ImageContainer>

            <TechName variant="h6" align="center">
                {tech.name}
            </TechName>

            <Typography
                variant="body2"
                align="center"
                sx={{
                    mb: 2,
                    minHeight: 40,
                }}
            >
                {tech.description}
            </Typography>

            <StarContainer>
                {starTrail.map((style, i) => (
                    <animated.div key={i} style={style}>
                        <StarIcon sx={{ color: theme.palette.warning.main }} />
                    </animated.div>
                ))}
            </StarContainer>
        </StyledTechCard>
    )
}

export default TechStackItemHtml