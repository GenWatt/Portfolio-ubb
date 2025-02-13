import { Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import { useSpring } from '@react-spring/web'
import { StyledTechCard, ImageContainer } from '../styles'
import { ITechStackList } from '../../shared/hooks/useData'
import { AbilityBadge } from '../../shared/components/AbilityBadges'
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
            {tech.image && <ImageContainer>
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
            </ImageContainer>}

            <Typography
                variant="body2"
                align="center"
                sx={{
                    my: 2,
                    minHeight: 40,
                }}
            >
                {tech.description}
            </Typography>

            <AbilityBadge data={tech} />
        </StyledTechCard>
    )
}

export default TechStackItemHtml