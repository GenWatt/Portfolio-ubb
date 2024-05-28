import { Skeleton, Grid, Box } from '@mui/material'

function GithubUserSkeleton() {
    return (
        <Grid item xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, paddingLeft: 2, paddingRight: 2 }}>
                <Skeleton variant='rectangular' width={60} height={60} />
                <Skeleton variant='rectangular' width={'100%'} height={60} />
            </Box>
        </Grid>
    )
}

export default GithubUserSkeleton