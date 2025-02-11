import { Grid, Typography } from "@mui/material"
import { useTrail } from '@react-spring/web'
import useTranslation from "../features/shared/hooks/useTranslation"
import ExpirenceCard from "../features/expirence/components/ExpirenceCard"
import useData from "../features/shared/hooks/useData"

const trailConfig = {
    from: { opacity: 0, transform: 'translateY(3rem)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 300, friction: 30 },
    delay: 200
}

function ExperiencePage() {
    const { t } = useTranslation()
    const { experiences } = useData()
    const trail = useTrail(experiences.length, trailConfig)

    return (
        <Grid container spacing={4} sx={{ px: 3, py: 8 }}>
            {trail.map((style, index) => {
                if (!experiences[index]) return null
                const exp = experiences[index]
                return <ExpirenceCard key={exp.company} exp={exp} style={style} />
            })}

            <Typography variant="h2" width={'100%'} textAlign={'center'} color="textSecondary" sx={{ mt: 4 }}>
                {t('comercialExperience')}
            </Typography>
        </Grid>
    )
}

export default ExperiencePage