import { Grid, Paper, Typography, Chip, List, ListItem, ListItemIcon, ListItemText, Link } from '@mui/material'
import { animated } from 'react-spring'

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import CodeIcon from '@mui/icons-material/Code';
import useTranslation from '../../../hooks/useTranslation';

export interface ExpirenceCardProps {
    exp: {
        company: string,
        position: string,
        startDate: string,
        endDate: string,
        description: string,
        link: string,
        projects: {
            name: string,
            link: string
        }[]
    }
    style: any
}

function ExpirenceCard({ exp, style }: ExpirenceCardProps) {
    const { t } = useTranslation()

    return (
        <Grid item xs={12} md={6} key={exp.company}>
            <animated.div style={style}>
                <Paper elevation={3} sx={{
                    p: 4,
                    height: '100%',
                    transition: 'transform 0.3s',
                    '&:hover': {
                        transform: 'translateY(-5px)'
                    }
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                        <CorporateFareIcon color="primary" sx={{ fontSize: 40 }} />
                        <div>
                            <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                                <Link href={exp.link} target="_blank" rel="noopener" color="inherit">
                                    {exp.company}
                                </Link>
                            </Typography>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <WorkOutlineIcon color="action" fontSize="small" />
                                <Typography variant="subtitle1" color="text.secondary">
                                    {exp.position}
                                </Typography>
                            </div>
                        </div>
                    </div>

                    <Chip
                        label={`${exp.startDate} - ${exp.endDate}`}
                        icon={<CalendarTodayIcon fontSize="small" />}
                        variant="outlined"
                        sx={{ mb: 3 }}
                    />

                    <Typography paragraph sx={{ mb: 3 }}>
                        {exp.description}
                    </Typography>

                    <Typography variant="h6" component="h4" sx={{ mb: 2, fontWeight: 500 }}>
                        {t('keyProjects')}:
                    </Typography>

                    <List dense>
                        {exp.projects.map((project) => (
                            <ListItem key={project.name} sx={{ pl: 0 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <CodeIcon color="primary" fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener"
                                        sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                    >
                                        {project.name}
                                    </Link>
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </animated.div>
        </Grid>
    )
}

export default ExpirenceCard