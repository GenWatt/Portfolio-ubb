import { CardHeader, Typography, useTheme, Grid, GridProps } from '@mui/material'
import useTranslation from '../../shared/hooks/useTranslation'
import { EducationData } from '../../shared/hooks/useData'
import { AnimatedCard, SchoolLogo, DescriptionContainer, CurrentIndicator } from '../styles'
import { animated } from '@react-spring/web'

export interface EducationItemProps extends GridProps {
    education: EducationData
    style: any
}

function EducationItem({ education, ...rest }: EducationItemProps) {
    const theme = useTheme()
    const { t } = useTranslation()
    const currentYear = new Date().getFullYear()
    const AnimatedGrid = animated(Grid)

    return (
        <AnimatedGrid item xs={12} md={6} {...rest}>
            <a href={education.link} style={{ textDecoration: 'none' }}>
                <AnimatedCard>
                    <CardHeader
                        title={
                            <Typography variant="h6" fontWeight="700">
                                {education.schoolName}
                            </Typography>
                        }
                        subheader={
                            <Typography variant="body2" color="textSecondary">
                                {education.GPA} GPA | {education.title}
                            </Typography>
                        }
                    />

                    <Grid container justifyContent="center">
                        <SchoolLogo style={{
                            backgroundImage: `url(${education.image})`
                        }} />
                    </Grid>

                    <Grid sx={{ padding: theme.spacing(3) }}>
                        <Grid container alignItems="center" spacing={1}>
                            <Typography variant="subtitle2" fontWeight="500">
                                {t('universitySpecialization')}:
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="primary"
                                sx={{
                                    ml: 1,
                                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                            >
                                {education.specialization}
                            </Typography>
                        </Grid>

                        <DescriptionContainer>
                            <Typography
                                variant="body2"
                                sx={{ lineHeight: 1.7 }}
                            >
                                {education.description}
                            </Typography>
                        </DescriptionContainer>

                        <Grid container alignItems="center" spacing={1} mt={1}>
                            <Typography
                                variant="caption"
                                color="textSecondary"
                                sx={{ fontStyle: 'italic' }}
                            >
                                {education.startDate} - {education.endDate}
                            </Typography>
                            {+education.endDate >= currentYear && (
                                <>
                                    <CurrentIndicator />
                                    <Typography
                                        variant="caption"
                                        color="success.main"
                                        fontWeight="700"
                                    >
                                        {t('now')}
                                    </Typography>
                                </>
                            )}
                        </Grid>
                    </Grid>
                </AnimatedCard>
            </a>
        </AnimatedGrid>
    )
}

export default EducationItem