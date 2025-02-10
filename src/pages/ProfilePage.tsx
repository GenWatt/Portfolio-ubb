import { Avatar, Grid, Typography, useTheme, List } from '@mui/material'
import Contact from '../components/contact/Contact'
import useTranslation from '../hooks/useTranslation'
import adrianek from '../assets/images/adrianek.jpg'
import ProfileCanvas from '../components/3D/profile/ProfileCanvas'
import AnimatedText from '../components/ui/AnimatedText'
import AbblityBadges from '../components/AbblityBadges'
import { useTrail } from '@react-spring/web'
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import UBB from '../assets/images/ubb.jpg'
import SummaryCard from '../features/shared/components/SummaryCard'


export interface Summary {
    type: 'experience' | 'education'
    title: string
    company: string
    location: string
    date: string
    image: string | null
    link: string
}

function ProfilePage() {
    const theme = useTheme()
    const { t } = useTranslation()

    const experiences: Summary[] = [
        {
            type: 'experience',
            title: 'Frontend Developer',
            company: 'FSS sp. z o.o.',
            location: 'Wapienica, Poland',
            date: '2020 - 2021',
            image: null,
            link: 'https://fss/about-us/'
        },
        {
            type: 'experience',
            title: 'Software Developer Intern',
            company: 'Evatronix',
            location: 'Bielsko-Biała, Poland',
            date: '2024',
            image: null,
            link: 'https://evatronix.com/pl/'
        }
    ]

    const education: Summary[] = [
        {
            type: 'education',
            title: t('softwareDeveloper'),
            company: t('university'),
            location: 'Bielsko-Biała, Poland',
            date: '2021 - 2025',
            link: 'https://ubb.edu.pl/',
            image: UBB,
        }
    ]

    const combined = [...experiences, ...education]

    const trail = useTrail(combined.length, {
        from: { opacity: 0, y: 20 },
        to: { opacity: 1, y: 0 },
        config: { mass: 1, tension: 2000, friction: 200 },
        delay: 500,
    })

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
                backgroundColor: theme.palette.secondary.dark,
                p: 2,
                borderRadius: 2,
                boxShadow: theme.shadows[2]
            }}>
                <AnimatedText text={t('profileDescription')} />
            </Grid>

            {/* Experience & Education Section */}
            <Grid container item spacing={4} xs={12}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                        <WorkHistoryIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                        {t('experience')}
                    </Typography>
                    <List>
                        {trail.slice(0, experiences.length).map((style, index) => {
                            const exp = experiences[index]

                            return <SummaryCard key={exp.company} expirence={exp} style={style} />
                        })}
                    </List>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                        <SchoolIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                        {t('education')}
                    </Typography>
                    <List>
                        {trail.slice(-education.length).map((style, index) => {
                            const edu = education[index]

                            return <SummaryCard key={edu.company} expirence={edu} style={style} />
                        })}
                    </List>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h4" textAlign="center" sx={{ fontWeight: 700 }}>
                    {t('comercialExperience')}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <AbblityBadges />
            </Grid>
            <Grid item xs={12}>
                <Contact />
            </Grid>
            <Grid item xs={12} height={400}>
                <ProfileCanvas />
            </Grid>
        </Grid>
    )
}

export default ProfilePage