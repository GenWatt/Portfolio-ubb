import { Avatar, Grid, Typography, useTheme } from '@mui/material'
import Contact from '../components/contact/Contact'
import useTranslation from '../hooks/useTranslation'
import adrianek from '../assets/images/adrianek.jpg'
import ProfileCanvas from '../components/3D/profile/ProfileCanvas'
import AnimatedText from '../components/ui/AnimatedText'

function ProfilePage() {
    const theme = useTheme()
    const { t } = useTranslation()

    return (
        <Grid container gap={3}>
            <Avatar sx={{ width: theme.spacing(12), height: theme.spacing(12) }}
                alt={t('authorName')}
                src={adrianek} />
            <Grid item>
                <Typography variant="h4">{t('authorName')}</Typography>
                <Typography variant="h6">{t('softwareDdeveloper')}</Typography>
            </Grid>
            <Grid item xs={12} sx={{ backgroundColor: theme.palette.secondary.dark, p: 1, borderRadius: 1 }}>
                <AnimatedText text={t('profileDescription')} />
            </Grid>
            <Grid item xs={12}>
                <Contact />
            </Grid>
            <Grid item xs={12} height={400}>
                <ProfileCanvas />
            </Grid>
        </Grid >
    )
}

export default ProfilePage