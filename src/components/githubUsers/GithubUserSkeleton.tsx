import { Skeleton, Grid } from '@mui/material'

export interface GithubUserSkeletonProps {
    count: number
}

function GithubUserSkeleton({ count }: GithubUserSkeletonProps) {
    return (
        <>
            {Array.from({ length: count }).map((_, index) =>
                <Grid key={index} item xs={12} md={12} lg={3}>
                    <Grid sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Skeleton variant='rectangular' width={60} height={60} />
                        <Skeleton variant='rectangular' width={'100%'} height={60} />
                    </Grid>
                </Grid>
            )}
        </>
    )
}

export default GithubUserSkeleton