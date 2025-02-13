import { Star, StarHalf, StarOutline } from "@mui/icons-material"
import { Chip, Tooltip, Box, Typography, useTheme, useMediaQuery } from "@mui/material"
import { animated, useTrail, useSpring, config } from '@react-spring/web'
import { useState } from "react"
import { ITechStackList } from "../hooks/useData"

export interface AbilityBadgesProps {
    data: ITechStackList[]
}

function AbilityBadges({ data }: AbilityBadgesProps) {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const trail = useTrail(data.length, {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: config.wobbly,
        delay: 200,
    })

    return (
        <Box
            component='div'
            display={'flex'}
            flexWrap={'wrap'}
            gap={2}
            justifyContent="center"
            sx={{
                padding: 2,
                background: theme.palette.background.paper,
                borderRadius: 4,
                boxShadow: theme.shadows[2]
            }}
        >
            {trail.map((style, index) => (
                <animated.div key={index} style={{ width: isMobile ? '100%' : 'auto', ...style }}>
                    <AbilityBadge data={data[index]} />
                </animated.div>
            ))}
        </Box>
    )
}

function BadgeContent({ data }: { data: ITechStackList }) {
    const theme = useTheme()
    const level = parseInt(data.level.replace('%', ''), 10)
    const fullStars = Math.floor(level / 20)
    const halfStars = level % 20 >= 10 ? 1 : 0
    const emptyStars = 5 - fullStars - halfStars

    const starSprings = useTrail(5, {
        from: { scale: 0 },
        to: { scale: 1 },
        config: config.stiff,
    })

    return (
        <Box component='div' display={'flex'} flexDirection="column" alignItems="center" >
            <Box component='div' display="flex" alignItems="center" mb={1}>
                {[...Array(fullStars)].map((_, i) => (
                    <animated.div key={`full-${i}`} style={starSprings[i]}>
                        <Star fontSize="small" sx={{ color: theme.palette.warning.main }} />
                    </animated.div>
                ))}
                {[...Array(halfStars)].map((_, i) => (
                    <animated.div key={`half-${i}`} style={starSprings[fullStars + i]}>
                        <StarHalf fontSize="small" sx={{ color: theme.palette.warning.main }} />
                    </animated.div>
                ))}
                {[...Array(emptyStars)].map((_, i) => (
                    <animated.div key={`empty-${i}`} style={starSprings[fullStars + halfStars + i]}>
                        <StarOutline fontSize="small" sx={{ color: theme.palette.text.disabled }} />
                    </animated.div>
                ))}
            </Box>

            <Box
                component='div'
                width="100%"
                height={1.6}
                bgcolor={theme.palette.primary.main}
                mb={.8}
            >
            </Box>
            <Typography
                variant="subtitle2"
                fontWeight="bold"
                sx={{
                    color: theme.palette.getContrastText(theme.palette.background.paper),
                    textTransform: 'uppercase',
                    letterSpacing: 1
                }}
            >
                {data.name}
            </Typography>
        </Box>
    )
}

export function AbilityBadge({ data }: { data: ITechStackList }) {
    const theme = useTheme()
    const [hovered, setHovered] = useState(false)

    const hoverAnim = useSpring({
        transform: hovered ? 'scale(1.05) rotate(1deg)' : 'scale(1) rotate(0deg)',
        boxShadow: hovered ? theme.shadows[6] : theme.shadows[2],

        config: config.gentle
    })

    return (
        <Tooltip title={`Proficiency: ${data.level}`} arrow>
            <animated.div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{ ...hoverAnim, borderRadius: theme.spacing(2.8) }}
            >
                <Chip
                    label={<BadgeContent data={data} />}
                    variant="filled"
                    sx={{
                        border: `2px solid ${theme.palette.primary.main}`,
                        background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${theme.palette.action.hover} 100%)`,
                        transition: 'all 0.3s ease',
                        padding: '2rem',
                        width: "100%",
                        '& .MuiChip-label': {
                            padding: '0 1rem'
                        }
                    }}
                />
            </animated.div>
        </Tooltip>
    )
}

export default AbilityBadges