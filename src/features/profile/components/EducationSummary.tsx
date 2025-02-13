import { Grid, List, Typography } from '@mui/material'
import SummaryCard from '../../shared/components/SummaryCard'
import SchoolIcon from '@mui/icons-material/School';
import { useTrail } from 'react-spring';
import { trailConfig } from '../data';
import useData, { createSummaryFromEducation } from '../../shared/hooks/useData';
import useTranslation from '../../shared/hooks/useTranslation';

const educationTrailConfig = {
    ...trailConfig,
    delay: 400
}

function EducationSummary() {
    const { educationData } = useData()
    const educationTrail = useTrail(educationData.length, educationTrailConfig)
    const educationSummary = educationData.map(createSummaryFromEducation)
    const { t } = useTranslation()

    return (
        <>
            <Grid container alignItems="center" gap={1}>
                <SchoolIcon color='primary' />
                <Typography variant="h5" fontWeight={600}>
                    {t('education')}
                </Typography>
            </Grid>

            <List>
                {educationTrail.map((style, index) => {
                    const edu = educationSummary[index]

                    return <SummaryCard key={edu.title} summary={edu} style={style} />
                })}
            </List>
        </>
    )
}

export default EducationSummary