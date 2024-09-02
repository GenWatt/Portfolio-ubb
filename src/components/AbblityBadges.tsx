import { Star, StarHalf, StarOutline } from "@mui/icons-material"
import { Chip, Tooltip, Box, Typography } from "@mui/material"

export type BadgeData = {
    name: string
    level: string
    color: string
}

const badgesData: BadgeData[] = [
    {
        name: 'JavaScript',
        level: '80%',
        color: 'primary'
    },
    {
        name: 'React',
        level: '80%',
        color: 'secondary'
    },
    {
        name: 'Node.js',
        level: '70%',
        color: 'success'
    },
    {
        name: 'MongoDB',
        level: '60%',
        color: 'error'
    },
    {
        name: 'Python',
        level: '40%',
        color: 'warning'
    },
    {
        name: 'C#',
        level: '80%',
        color: 'warning'
    },
    {
        name: 'Docker',
        level: '60%',
        color: 'warning'
    },
    {
        name: 'Azure',
        level: '40%',
        color: 'warning'
    },
    {
        name: 'CI/CD',
        level: '50%',
        color: 'warning'
    },
    {
        name: 'Vue',
        level: '80%',
        color: 'warning'
    },
    {
        name: 'mySQL',
        level: '70%',
        color: 'warning'
    },
    {
        name: 'WPF',
        level: '40%',
        color: 'warning'
    }
]

function AbblityBadges() {
    // const sm = useMediaQuery('(min-width:600px)')

    return (
        <Box
            component='div'
            display={'flex'}
            flexWrap={'wrap'}
            gap={2}
            sx={{ overflow: 'hidden', justifyContent: 'center' }}>
            {/* <animated.div style={sm ? { display: 'flex', flexWrap: 'wrap' } : { ...styles1, display: 'flex', gap: 2 }}> */}
            {badgesData.map((badge, index) => (
                <AbblityBadge key={index} {...badge} />
            ))}
            {/* </animated.div> */}
        </Box>
    )
}

function BadgeContent({ data }: { data: BadgeData }) {
    const level = parseInt(data.level.replace('%', ''), 10)
    const fullStars = Math.floor(level / 20)
    const halfStars = level % 20 >= 10 ? 1 : 0
    const emptyStars = 5 - fullStars - halfStars

    return (
        <Box component='div' display={'flex'} flexDirection={"column"} padding={1}>
            <Box component='div' display="flex" alignItems="center">
                {[...Array(fullStars)].map((_, index) => (
                    <Star key={`full-${index}`} fontSize="small" sx={{ color: 'yellow' }} />
                ))}
                {halfStars === 1 && <StarHalf fontSize="small" sx={{ color: 'yellow' }} />}
                {[...Array(emptyStars)].map((_, index) => (
                    <StarOutline key={`empty-${index}`} fontSize="small" sx={{ color: 'yellow' }} />
                ))}
            </Box>
            <Typography textAlign={'center'} component="span" sx={{ marginLeft: '0.5rem' }}>
                {data.name}
            </Typography>
        </Box>
    )
}

function AbblityBadge(data: BadgeData) {
    return (
        <Tooltip title={`Proficiency: ${data.level}`} arrow>
            <Chip
                label={<BadgeContent data={data} />}
                color={data.color as any}
                variant="outlined"
                sx={{ fontSize: '1rem', padding: '1.5rem .5rem' }}
            />
        </Tooltip>
    )
}

export default AbblityBadges