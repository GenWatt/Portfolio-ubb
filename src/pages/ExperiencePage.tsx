import { Grid, Typography } from "@mui/material"
import { useTrail } from '@react-spring/web'
import useTranslation from "../hooks/useTranslation"
import ExpirenceCard from "../features/expirence/components/ExpirenceCard"


function ExperiencePage() {
    const { t } = useTranslation()
    const experiences = [
        {
            company: 'FSS sp. z o.o.',
            position: 'Frontend Developer',
            startDate: '02.2021',
            endDate: '01.2022',
            description: t('fssDescription'),
            link: 'https://fss.cc/about-us/',
            projects: [
                {
                    name: 'Yacht Information System',
                    link: 'https://fss.cc/projects/yis/'
                },
                {
                    name: 'Nowa Era - Games',
                    link: 'https://fss.cc/projects/nowa-era/'
                }
            ]
        },
        {
            company: 'Evatronix',
            position: 'Software Developer - Intern',
            startDate: '07.2024',
            endDate: '08.2024',
            description: t('intership'),
            link: 'https://evatronix.com/pl/',
            projects: [
                {
                    name: 'Evixscan-3d-suite',
                    link: 'https://evixscan3d.com/evixscan-3d-suite/'
                }
            ]
        },
    ]

    const trail = useTrail(experiences.length, {
        from: { opacity: 0, transform: 'translateY(3rem)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { tension: 300, friction: 30 },
        delay: 200,
    })

    return (
        <Grid container spacing={4} sx={{ px: 3, py: 8 }}>
            <Grid item xs={12}>
                <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center' }}>
                    {t('experience')}
                </Typography>
            </Grid>

            {trail.map((style, index) => {
                if (!experiences[index]) return null

                const exp = experiences[index]
                return <ExpirenceCard key={exp.company} exp={exp} style={style} />
            })}

            <Typography variant="h2" width={'100%'} textAlign={'center'} color="textSecondary" sx={{ mt: 4 }}>
                {t('comercialExperience')}
            </Typography>
        </Grid>
    )
}

export default ExperiencePage