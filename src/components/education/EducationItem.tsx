import { Card, CardHeader, Box, Typography, useTheme, Grid } from '@mui/material'
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

                <Box display={'flex'} justifyContent={'center'}>
                    <img style={{ borderRadius: 5 }} width={theme.spacing(20)} height={theme.spacing(20)} src={education.image} />
                </Box>

                <Box sx={{ padding: 2 }}>
                    <Box>
                        <Typography variant="subtitle2" component={'span'}>{t('universitySpecialization')}: </Typography>
                        <Typography variant="subtitle2" color={theme.palette.primary.main} component={'span'}>{education.specialization}</Typography>
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" component={'span'}>{t('universityStart')}: </Typography>
                        <Typography variant="subtitle2" color={theme.palette.primary.main} component={'span'}>{education.start}</Typography>
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" component={'span'}>{t('universityEnd')}: </Typography>
                        <Typography variant="subtitle2" color={theme.palette.primary.main} component={'span'}>{education.end}</Typography>
                    </Box>
                </Box>

            </Card>
        </Grid>
    )
}

export default EducationItem