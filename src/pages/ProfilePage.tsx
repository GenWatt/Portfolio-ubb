import { Avatar, Grid, Typography, useTheme } from '@mui/material'
import Contact from '../features/contact/components/Contact'
import useTranslation from '../features/shared/hooks/useTranslation'
import adrianek from '../assets/images/adrianek.jpg'
import AnimatedText from '../components/ui/AnimatedText'
import AbblityBadges from '../features/shared/components/AbilityBadges'

import EducationSummary from '../features/profile/components/EducationSummary'
import ExperienceSummary from '../features/profile/components/ExpirenceSummary'
import ProfileCanvas from '../features/profile/3D/ProfileCanvas'
import useData from '../features/shared/hooks/useData'

function ProfilePage() {
    const theme = useTheme()
    const { t } = useTranslation()
    const { techStack } = useData()

    return (
        <Grid container gap={3}>
            <Grid container item alignItems="center" gap={3}>
                <Avatar
                    sx={{
                        width: theme.spacing(12),
                        height: theme.spacing(12),
                        boxShadow: theme.shadows[4]
                    }}
                    alt={t('authorName')}
                    src={adrianek}
                />
                <Grid item>
                    <Typography variant="h4" fontWeight={700}>{t('authorName')}</Typography>
                    <Typography variant="h6" color="text.secondary">{t('softwareDeveloper')}</Typography>
                </Grid>
            </Grid>

            {/* Animated Description */}
            <Grid item xs={12} sx={{
                backgroundColor: theme.palette.primary.dark,
                p: 2,
                borderRadius: 2,
                boxShadow: theme.shadows[2]
            }}>
                <AnimatedText text={t('profileDescription')} color={'text.primary'} />
            </Grid>

            {/* Experience & Education Section */}
            <Grid container item spacing={2} xs={12}>
                <Grid item xs={12} md={6}>
                    <ExperienceSummary />
                </Grid>

                <Grid item xs={12} md={6}>
                    <EducationSummary />
                </Grid>
            </Grid>

            <Grid container item xs={12}>
                <Grid item xs={12} md={6} px={1}>
                    <Typography variant="h6" textAlign="center" color={'primary'} fontWeight={600}>
                        {t('comercialExperience')}
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6} px={1}>
                    <Typography variant="h6" textAlign="center" color={'primary'} fontWeight={600}>
                        {t('noneComersialExperience')}
                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <AbblityBadges data={techStack} />
            </Grid>
            <Grid item xs={12}>
                <Contact />
            </Grid>
            <Grid item xs={12}>
                <ProfileCanvas containerProps={{ style: { height: 400 } }} />
            </Grid>
        </Grid>
    )
}

export default ProfilePage