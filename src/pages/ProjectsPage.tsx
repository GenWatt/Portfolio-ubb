import { Grid, Typography } from '@mui/material'
import ProjectItem from '../components/projects/ProjectItem'

import ProjectItemSkeleton from '../components/projects/ProjectItemSkeleton'
import GithubUsers from '../components/githubUsers/GithubUsers'
import useTranslation from '../hooks/useTranslation'
import { animated, useTrail } from 'react-spring'
import { useOwners, useRepos } from '../hooks/useGithub'
import GithubUserSkeleton from '../components/githubUsers/GithubUserSkeleton'
import { projects } from '../features/projects/data'

const usernames = ['GenWatt', 'GenWattStudent']

const trailOptions = {
    from: { opacity: 0, transform: 'translate(0px,-60px)' },
    to: { opacity: 1, transform: 'translate(0px,0px)' },
    config: { duration: 300 },
    delay: 500
}

function ProjectsPage() {
    const { data: repos, isLoading: isReposLoading } = useRepos(projects);
    const { data: users, isLoading: isUsersLoading } = useOwners(usernames)
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
            </Grid>
        </Grid>
    )
}

export default ProjectsPage