import { Paper, ListItem, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material"
import { animated } from "react-spring"
import { Summary } from "../../../pages/ProfilePage"

import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export interface SummaryCardProps {
    expirence: Summary
    style: any
}

function SummaryCard({ expirence, style }: SummaryCardProps) {
    const theme = useTheme()

    return (
        <animated.div style={style}>
            <Paper elevation={2} sx={{ mb: 2, p: 2 }}>
                <ListItem>
                    <ListItemIcon>
                        {expirence.type === 'experience' ? <WorkHistoryIcon color="primary" /> : <SchoolIcon color="primary" />}
                    </ListItemIcon>
                    <ListItemText
                        primary={expirence.title}
                        secondary={
                            <>
                                <Typography variant="body1" component="span">
                                    {expirence.company}
                                </Typography>

                                <div style={{ marginTop: theme.spacing(.3) }}>
                                    <CalendarMonthIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                                    {expirence.date}
                                </div>

                                <div style={{ marginTop: theme.spacing(.3) }}>
                                    <LocationOnIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                                    {expirence.location}
                                </div>
                            </>
                        }
                    />
                </ListItem>
            </Paper>
        </animated.div>
    )
}

export default SummaryCard