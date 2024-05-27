
import { Avatar, Button, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import Contact from '../components/Contact'

function Profile() {
    const theme = useTheme()
    return (
        <Grid container gap={3}>
            <Avatar sx={{ width: theme.spacing(12), height: theme.spacing(12) }}
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg" />
            <Grid item>
                <Typography variant="h4">Adrian Raszka</Typography>
                <Typography variant="h6">Software Developer</Typography>
            </Grid>
            <Typography>
                I am a software developer with a passion for creating software solutions. I have experience in a wide range of technologies and am always looking to learn more.
            </Typography>
            <Contact />
        </Grid>
    )
}

export default Profile