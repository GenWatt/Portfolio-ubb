import { Card, CardHeader, Typography, useTheme, Grid } from '@mui/material'
import useTranslation from '../../hooks/useTranslation'
import { EducationData } from '../../pages/EducationPage'

export interface EducationItemProps {
    education: EducationData
}

function EducationItem({ education }: EducationItemProps) {
    const theme = useTheme()
    const { t } = useTranslation()

    return (
        <Grid item>
            <Card>
                <CardHeader title={education.schoolName} />

                <Grid display={'flex'} justifyContent={'center'}>
                    <img style={{ borderRadius: 5 }} width={theme.spacing(20)} height={theme.spacing(20)} src={education.image} />
                </Grid>

                <Grid sx={{ padding: 2 }}>
                    <Grid>
                        <Typography variant="subtitle2" component={'span'}>{t('universitySpecialization')}: </Typography>
                        <Typography variant="subtitle2" color={theme.palette.primary.main} component={'span'}>{education.specialization}</Typography>
                    </Grid>

                    <Grid>
                        <Typography variant="subtitle2" component={'span'}>{t('universityStart')}: </Typography>
                        <Typography variant="subtitle2" color={theme.palette.primary.main} component={'span'}>{education.start}</Typography>
                    </Grid>

                    <Grid>
                        <Typography variant="subtitle2" component={'span'}>{t('universityEnd')}: </Typography>
                        <Typography variant="subtitle2" color={theme.palette.primary.main} component={'span'}>{education.end}</Typography>
                    </Grid>
                </Grid>

            </Card>
        </Grid>
    )
}

export default EducationItem