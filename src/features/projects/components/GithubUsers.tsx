import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Grid, ListItemAvatar, useTheme } from '@mui/material';
import { Owner } from '../../../types';
import { animated, useTrail } from '@react-spring/web';

export interface GithubUsersProps {
    users: Owner[]
    isLoading: boolean
}

const trailOptions = {
    from: { opacity: 0, transform: 'translate(0px,-20px)' },
    to: { opacity: 1, transform: 'translate(0px,0px)' },
    config: { duration: 300 },
    delay: 500
}

function GithubUsers({ users, isLoading }: GithubUsersProps) {
    const theme = useTheme()
    const trail = useTrail(users.length, trailOptions);

    const AnimatedGrid = animated(Grid)

    return (
        <Grid item xs={12}>
            <Grid container flexWrap='wrap' spacing={2}>
                {!isLoading && trail.map((animation, index) => (
                    <AnimatedGrid item xs={12} md={12} lg={3} key={users[index].id} style={animation}>
                        <ListItem sx={{ p: 0 }} key={users[index].id}>
                            <a href={users[index].html_url} target='blank' style={{ width: '100%', background: theme.palette.primary.dark, color: theme.palette.mode === 'light' ? theme.palette.text.secondary : 'inherit' }}>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <img src={users[index].avatar_url} alt={users[index].login} style={{ width: 50, height: 50 }} />
                                    </ListItemAvatar>
                                    <ListItemText primary={users[index].login} />
                                </ListItemButton>
                            </a>
                        </ListItem>
                    </AnimatedGrid>
                ))}
            </Grid>
        </Grid >
    )
}

export default GithubUsers