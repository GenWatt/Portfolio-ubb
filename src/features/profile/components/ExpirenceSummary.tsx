import { Grid, List, Typography } from '@mui/material'
import SummaryCard from '../../shared/components/SummaryCard'
import WorkIcon from '@mui/icons-material/Work';
import { useTrail } from 'react-spring';
import { trailConfig } from '../data';
import useData, { createSummaryFromExperience } from '../../shared/hooks/useData';
import useTranslation from '../../shared/hooks/useTranslation';

const experienceTrailConfig = {
    ...trailConfig,
    delay: 200
}

function ExperienceSummary() {
    const { experiences: experienceData } = useData()
    const experienceTrail = useTrail(experienceData.length, experienceTrailConfig)
    const experienceSummary = experienceData.map(createSummaryFromExperience)
    const { t } = useTranslation()

    return (
        <>
            <Grid container alignItems="center" gap={1}>
                <WorkIcon color='primary' />
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {t('experience')}
                </Typography>
            </Grid>

            <List>
                {experienceTrail.map((style, index) => {
                    const edu = experienceSummary[index]

                    return <SummaryCard key={edu.title} summary={edu} style={style} />
                })}
            </List>
        </>
    )
}

export default ExperienceSummary