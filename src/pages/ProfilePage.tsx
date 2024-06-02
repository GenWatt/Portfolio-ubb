import { Avatar, Grid, Typography, useTheme } from '@mui/material'
import Contact from '../components/Contact'
import useTranslation from '../hooks/useTranslation'

function ProfilePage() {
    const theme = useTheme()
    const { t } = useTranslation()

    return (
        <Grid container gap={3}>
            <Avatar sx={{ width: theme.spacing(12), height: theme.spacing(12) }}
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg" />
            <Grid item>
                <Typography variant="h4">Adrian Raszka</Typography>
                <Typography variant="h6">{t('softwareDdeveloper')}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    {t('profileDescription')}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Contact />
            </Grid>
        </Grid>
    )
}

export default ProfilePage