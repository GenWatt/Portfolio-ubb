import { Box, Card, CardHeader, CardMedia, Grid, Typography, useTheme } from "@mui/material"
import useTranslation from "../hooks/useTranslation"
import UBB from '../assets/images/ubb.jpg'

function EducationPage() {
    const { t } = useTranslation()
    const theme = useTheme()

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant='h4'>{t('technicalSchool')}</Typography>
            </Grid>
            <Grid item>
                <Card>
                    <CardHeader title={t('university')} />

                    <Box display={'flex'} justifyContent={'center'}>
                        <img style={{ borderRadius: 5 }} width={100} height={100} src={UBB} />
                    </Box>

                    <Box sx={{ padding: 2 }}>
                        <Box>
                            <Typography variant="subtitle2" component={'span'}>{t('universitySpecialization')}: </Typography>
                            <Typography variant="subtitle2" color={theme.palette.primary.main} component={'span'}>{t('softwareDdeveloper')}</Typography>
                        </Box>

                        <Box>
                            <Typography variant="subtitle2" component={'span'}>{t('universityStart')}: </Typography>
                            <Typography variant="subtitle2" color={theme.palette.primary.main} component={'span'}>{t('universityStartData')}</Typography>
                        </Box>

                        <Box>
                            <Typography variant="subtitle2" component={'span'}>{t('universityEnd')}: </Typography>
                            <Typography variant="subtitle2" color={theme.palette.primary.main} component={'span'}>{t('universityEndData')}</Typography>
                        </Box>
                    </Box>

                </Card>
            </Grid>
        </Grid>
    )
}

export default EducationPage