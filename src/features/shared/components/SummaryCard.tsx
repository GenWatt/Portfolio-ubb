import { Paper, ListItem, ListItemIcon, Typography, useTheme, Grid, Link } from "@mui/material"
import { animated } from "@react-spring/web"

import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Summary } from "../hooks/useData";

export interface SummaryCardProps {
    summary: Summary
    style: any
}

function SummaryCard({ summary, style }: SummaryCardProps) {
    const theme = useTheme()

    return (
        <animated.div style={style}>
            <Paper elevation={2} sx={{ mb: 1, p: .5 }}>
                <ListItem>
                    <ListItemIcon>
                        {summary.type === 'experience' ? <WorkHistoryIcon color="primary" /> : <SchoolIcon color="primary" />}
                    </ListItemIcon>

                    <Grid>
                        <Typography variant="h6" component="h3" fontWeight="600" color={theme.palette.primary.main}>
                            {summary.title}
                        </Typography>

                        <Link href={summary.link} target="_blank" rel="noopener">
                            <Typography variant="body1" component="span" color={theme.palette.text.secondary}>
                                {summary.subtitle}
                            </Typography>
                        </Link>

                        <div>
                            <CalendarMonthIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                            <Typography color={theme.palette.primary.light} variant="body1" component="span">{summary.date}</Typography>
                        </div>

                        <div style={{ marginTop: theme.spacing(.2) }}>
                            <LocationOnIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                            <Typography variant="body1" component="span">{summary.location}</Typography>
                        </div>
                    </Grid>
                </ListItem>
            </Paper>
        </animated.div>
    )
}

export default SummaryCard