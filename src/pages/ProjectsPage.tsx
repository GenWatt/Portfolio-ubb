import { Grid, Typography } from '@mui/material'
import ProjectItem from '../features/projects/components/ProjectItem'

import ProjectItemSkeleton from '../features/projects/components/ProjectItemSkeleton'
import GithubUsers from '../features/projects/components/GithubUsers'
import useTranslation from '../features/shared/hooks/useTranslation'
import { animated, useTrail } from '@react-spring/web'
import { useOwners, useRepos } from '../features/projects/hooks/useGithub'
import GithubUserSkeleton from '../features/projects/components/GithubUserSkeleton'
import { projects } from '../features/projects/data'

const usernames = ['GenWatt', 'GenWattStudent']

const trailOptions = {
    from: { opacity: 0, transform: 'translate(0px,-60px)' },
    to: { opacity: 1, transform: 'translate(0px,0px)' },
    config: { duration: 300 },
    delay: 500
}

function ProjectsPage() {
    const { data: repos, isLoading: isReposLoading, error: repoError } = useRepos(projects);
    const { data: users, isLoading: isUsersLoading, error: userError } = useOwners(usernames)
    const { t } = useTranslation()
    const trail = useTrail(projects.length, trailOptions);

    const AnimatedGrid = animated(Grid)

    const areReposAvaliable = !isReposLoading && repos && repos.length > 0

    return (
        <Grid container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h4'>{t('myAccounts')}</Typography>
                </Grid>
                {isUsersLoading && <GithubUserSkeleton count={3} />}
                {users && <GithubUsers users={users} isLoading={isUsersLoading} />}
                {userError && <Typography variant='h6'>{t('errorLoadingUsers')}</Typography>}
            </Grid>

            <Grid container spacing={2} mt={0} p={0}>
                <Grid item xs={12}>
                    <Typography variant='h4'>{t('myProjects')}</Typography>
                </Grid>

                {isReposLoading && <ProjectItemSkeleton count={7} />}

                {areReposAvaliable && trail.map((animation, index) => {
                    if (!repos[index]) return null

                    return (
                        <AnimatedGrid item xs={12} md={6} lg={4} key={index} style={animation}>
                            <ProjectItem key={repos[index].id} repo={repos[index]} />
                        </AnimatedGrid>
                    )
                })}

                {repoError && <Typography variant='h6'>{t('errorLoadingProjects')}</Typography>}
            </Grid>
        </Grid>
    )
}

export default ProjectsPage