import { Grid, Skeleton } from '@mui/material'

function ProjectItemSkeleton() {
    return (
        <Grid item xs={12} md={6}>
            <Grid sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Skeleton variant="circular" width={60} height={60} />
                <Skeleton variant="rectangular" width={'100%'} height={60} />
            </Grid>

            <Skeleton variant="rectangular" width={'100%'} height={120} sx={{ marginTop: 2 }} />
            <Skeleton variant="rectangular" width={'100%'} height={60} sx={{ marginTop: 2 }} />
            <Skeleton variant="rectangular" width={'100%'} height={60} sx={{ marginTop: 2 }} />

            <Grid sx={{ display: 'flex', alignItems: 'center', gap: 2, marginTop: 2 }}>
                <Skeleton variant="rectangular" width={70} height={30} sx={{ borderRadius: 5 }} />
                <Skeleton variant="rectangular" width={70} height={30} sx={{ borderRadius: 5 }} />
                <Skeleton variant="rectangular" width={70} height={30} sx={{ borderRadius: 5 }} />
            </Grid>

            <Grid sx={{ display: 'flex', alignItems: 'center', gap: 2, marginTop: 2 }}>
                <Skeleton variant="rectangular" width={120} height={30} sx={{ borderRadius: 5 }} />
                <Skeleton variant="circular" width={30} height={30} sx={{ borderRadius: 5 }} />
                <Skeleton variant="circular" width={30} height={30} sx={{ borderRadius: 5 }} />
                <Skeleton variant="circular" width={30} height={30} sx={{ borderRadius: 5 }} />
            </Grid>
        </Grid>
    )
}

export default ProjectItemSkeleton