import { Grid, Typography } from '@mui/material'
import ProjectItem from '../components/projects/ProjectItem'
import { Owner, Project, Repository } from '../types'
import useGithub from '../hooks/useGithub'
import { useEffect, useState } from 'react'
import RegisterImage from '../assets/images/adrianAuthClient/Register.png'
import ConfirmEmailImage from '../assets/images/adrianAuthClient/Confirm email.png'
import ProjectItemSkeleton from '../components/projects/ProjectItemSkeleton'
import GithubUsers from '../components/githubUsers/GithubUsers'
import useTranslation from '../hooks/useTranslation'

const projects: Project[] = [
    {
        username: 'GenWatt',
        repoName: 'AdrianAuthClient',
        images: [RegisterImage, ConfirmEmailImage],
        tags: ['React', 'Typescript', 'Tanstack Query']
    },
    {
        username: 'GenWatt',
        repoName: 'AdrianAuthServer',
        images: [],
        tags: ['Node', 'JWT', 'MongoDb']
    }
]

const usernames = ['GenWatt', 'GenWattStudent']
const MAX_TIME_LOADING = 100

function ProjectsPage() {
    const { getRepos, getOwners } = useGithub()
    const { t } = useTranslation()

    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingTooLong, setIsLoadingTooLong] = useState(false)

    const [repos, setRepos] = useState<Repository[]>([])
    const [users, setUsers] = useState<Owner[]>([])

    async function getRepositores() {
        const repos = await getRepos(projects)

        if (!repos) return
        setRepos(repos)
    }

    async function getUsers() {
        const owners = await getOwners(usernames)

        if (!owners) return
        setUsers(owners)
    }

    async function init() {
        const time0 = performance.now()

        setIsLoading(true)
        await getUsers()
        await getRepositores()
        setIsLoading(false)

        const time1 = performance.now()

        if (time1 - time0 > MAX_TIME_LOADING) {
            setIsLoadingTooLong(true)
        }
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <Grid container>
            {isLoadingTooLong && <Typography gutterBottom color={'error'}>{t('loadingIsTakingTooLong') + " "} {MAX_TIME_LOADING}ms</Typography>}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h4'>{t('myAccounts')}</Typography>
                </Grid>
                <GithubUsers users={users} isLoading={isLoading} />
            </Grid>

            <Grid container spacing={2} mt={0} p={0}>
                <Grid item xs={12}>
                    <Typography variant='h4'>{t('myProjects')}</Typography>
                </Grid>

                {isLoading && new Array(7).fill(0).map((_, index) => (
                    <ProjectItemSkeleton key={index} />
                ))}

                {!isLoading && repos.map(repo => (
                    <ProjectItem key={repo.id} repo={repo} />
                ))}
            </Grid>
        </Grid>
    )
}

export default ProjectsPage