import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Grid, ListItemAvatar, useTheme } from '@mui/material';
import { Owner } from '../../types';
import GithubUserSkeleton from './GithubUserSkeleton';

export interface GithubUsersProps {
    users: Owner[]
    isLoading: boolean
}

function GithubUsers({ users, isLoading }: GithubUsersProps) {
    const theme = useTheme()

    return (
        <Grid item xs={12}>
            <Grid container flexWrap='wrap' spacing={2}>
                {isLoading && new Array(3).fill(0).map((_, index) => (<GithubUserSkeleton key={index} />))}
                {!isLoading && users.map(user => (
                    <Grid item xs={12} md={12} lg={3} key={user.id}>
                        <ListItem sx={{ p: 0 }} key={user.id}>
                            <a href={user.html_url} target='blank' style={{ width: '100%', background: theme.palette.primary.dark, color: theme.palette.mode === 'light' ? theme.palette.text.secondary : 'inherit' }}>
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <img src={user.avatar_url} alt={user.login} style={{ width: 50, height: 50 }} />
                                    </ListItemAvatar>
                                    <ListItemText primary={user.login} />
                                </ListItemButton>
                            </a>
                        </ListItem>
                    </Grid>
                ))}
            </Grid>
        </Grid >
    )
}

export default GithubUsers