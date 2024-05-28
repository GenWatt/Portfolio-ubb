import { Grid, Typography } from '@mui/material'
import ProjectItem from '../components/projects/ProjectItem'
import { Owner, Project, Repository } from '../types'
import useGithub from '../hooks/useGithub'
import { useEffect, useState } from 'react'
import RegisterImage from '../assets/images/adrianAuthClient/Register.png'
import ConfirmEmailImage from '../assets/images/adrianAuthClient/Confirm email.png'
import ProjectItemSkeleton from '../components/projects/ProjectItemSkeleton'
import GithubUsers from '../components/githubUsers/GithubUsers'
import GithubUserSkeleton from '../components/githubUsers/GithubUserSkeleton'
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

function ProjectsPage() {
    const { getRepos, getOwners } = useGithub()
    const { t } = useTranslation()

    const [isRepoLoading, setIsRepoLoading] = useState(false)
    const [isUserLoading, setIsUserLoading] = useState(true)

    const [repos, setRepos] = useState<Repository[]>([])
    const [users, setUsers] = useState<Owner[]>([])

    async function getRepositores() {
        setIsRepoLoading(true)
        const repos = await getRepos(projects)
        setIsRepoLoading(false)

        if (!repos) return
        setRepos(repos)
    }

    async function getUsers() {
        setIsUserLoading(true)
        const owners = await getOwners(usernames)
        setIsUserLoading(false)

        if (!owners) return
        setUsers(owners)
    }

    async function init() {
        await getUsers()
        await getRepositores()
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <Grid container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h4'>{t('myAccounts')}</Typography>
                </Grid>
                {isUserLoading && new Array(3).fill(0).map((_, index) => (<GithubUserSkeleton key={index} />))}
                {!isUserLoading && <GithubUsers users={users} />}
            </Grid>

            <Grid container spacing={3} marginTop={1}>
                <Grid item xs={12}>
                    <Typography variant='h4'>{t('myProjects')}</Typography>
                </Grid>
                {isRepoLoading && new Array(7).fill(0).map((_, index) => (
                    <ProjectItemSkeleton key={index} />
                ))}

                {!isRepoLoading && repos.map(repo => (
                    <ProjectItem key={repo.id} repo={repo} />
                ))}
            </Grid>
        </Grid>
    )
}

export default ProjectsPage