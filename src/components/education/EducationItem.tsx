import { Card, CardHeader, Typography, useTheme, Grid, styled } from '@mui/material'
import useTranslation from '../../hooks/useTranslation'
import { EducationData } from '../../pages/EducationPage'

export interface EducationItemProps {
    education: EducationData
}

const DescriptionContainer = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.secondary.dark,
    padding: theme.spacing(1),
    borderRadius: 5
}))

function EducationItem({ education }: EducationItemProps) {
    const theme = useTheme()
    const { t } = useTranslation()
    const currentYear = new Date().getFullYear()

    return (
        <Grid item xs={12} md={6} flexWrap={'wrap'}>
            <a href={education.url}>
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

                        <DescriptionContainer>
                            {education.description}
                        </DescriptionContainer>

                        <Grid container alignItems={'center'} gap={1}>
                            <Typography variant="subtitle2" color={theme.palette.text.disabled} component={'span'}>
                                {education.start} - {education.end}
                            </Typography>
                            {+education.end >= currentYear && (
                                <>
                                    <div style={{ backgroundColor: theme.palette.primary.main }} className='pulse'></div>
                                    <Typography variant="caption" color={theme.palette.primary.main} component={'span'}>
                                        {t('now')}
                                    </Typography>
                                </>
                            )}
                        </Grid>
                    </Grid>

                </Card>
            </a>
        </Grid>
    )
}

export default EducationItem