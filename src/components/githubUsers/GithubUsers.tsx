import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Grid, ListItemAvatar, useTheme } from '@mui/material';
import { Owner } from '../../types';

export interface GithubUsersProps {
    users: Owner[]
}

function GithubUsers({ users }: GithubUsersProps) {
    const theme = useTheme()
    return (
        <Grid item xs={12}>
            <List>
                {users.map(user => (
                    <ListItem key={user.id}>
                        <a href={user.html_url} target='blank' style={{ width: '100%', background: theme.palette.primary.dark, color: theme.palette.mode === 'light' ? theme.palette.text.secondary : 'inherit' }}>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <img src={user.avatar_url} alt={user.login} style={{ width: 50, height: 50 }} />
                                </ListItemAvatar>
                                <ListItemText primary={user.login} />
                            </ListItemButton>
                        </a>
                    </ListItem>
                ))}
            </List>
        </Grid>
    )
}

export default GithubUsers