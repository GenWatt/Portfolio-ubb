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
import { animated, useTrail } from 'react-spring'
import RTSVideo from '../assets/videos/RTS.mp4'

const projects: Project[] = [
    {
        username: 'GenWatt',
        repoName: 'AdrianAuthClient',
        images: [RegisterImage, ConfirmEmailImage],
        videos: [],
        tags: ['React', 'Typescript', 'Tanstack Query', 'Docker']
    },
    {
        username: 'GenWatt',
        repoName: 'AdrianAuthServer',
        images: [],
        videos: [],
        tags: ['Node', 'JWT', 'MongoDb', 'Docker']
    },
    {
        username: 'GenWatt',
        repoName: 'TerrainGames',
        images: [],
        videos: [],
        tags: ['React Native', 'Typescript', 'Node', 'MongoDb', 'CQRS', 'mapbox']
    }, {
        username: 'GenWattStudent',
        repoName: 'RTS_SINGLE_PLAYER',
        images: [],
        videos: [RTSVideo],
        tags: ['Unity', 'C#', 'Multiplayer', 'RTS', 'Lobby', 'Unity Relay']
    },
    {
        username: 'GenWatt',
        repoName: 'AdrianTube2',
        images: [],
        videos: [],
        tags: ['Blazor Server', 'C#', 'MongoDb']
    },
    {
        username: 'GenWatt',
        repoName: 'Adriantify',
        images: [],
        videos: [],
        tags: ['Vue 3', 'Typescript', 'Node', 'MongoDb', 'Docker']
    },
    {
        username: 'GenWattStudent',
        repoName: 'Grafy',
        images: [],
        videos: [],
        tags: ['Python', 'Tkinter', 'Graphs']
    },
    {
        username: 'GenWattStudent',
        repoName: 'Todo',
        images: [],
        videos: [],
        tags: ['React', 'Nginx', 'Node', 'MongoDb', 'Docker', 'Typescript', 'Material UI', 'Docker Compose', 'Redux Toolkit']
    },
    {
        username: 'GenWattStudent',
        repoName: 'Wycieczki---ASP.NET',
        images: [],
        videos: [],
        tags: ['ASP.NET MVC', 'C#', 'MVC', 'Entity Framework', 'SQL Server', 'Bootstrap', 'JQuery', 'JavaScript', 'Redis', 'Azure', 'Three.js']
    }
]

const usernames = ['GenWatt', 'GenWattStudent']

function ProjectsPage() {
    const { getRepos, getOwners } = useGithub()
    const { t } = useTranslation()
    const trail = useTrail(projects.length, {
        from: { opacity: 0, transform: 'translate(0px,-60px)' },
        to: { opacity: 1, transform: 'translate(0px,0px)' },
        config: { duration: 300 },
        delay: 500
    });

    const [isLoading, setIsLoading] = useState(true)

    const [repos, setRepos] = useState<Repository[]>([])
    const [users, setUsers] = useState<Owner[]>([])

    async function getRepositores() {
        const repos = await getRepos(projects)
        console.log(repos)
        if (!repos) return
        setRepos(repos)
    }

    async function getUsers() {
        const owners = await getOwners(usernames)

        if (!owners) return
        setUsers(owners)
    }

    async function init() {
        setIsLoading(true)
        await getUsers()
        await getRepositores()
        setIsLoading(false)
    }

    useEffect(() => {
        init()
    }, [projects])

    const AnimatedGrid = animated(Grid)

    return (
        <Grid container>
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

                {isLoading && (new Array(7).fill(0).map((_, index) => (<ProjectItemSkeleton key={index} />)))}

                {!isLoading && trail.map((animation, index) => {
                    if (!repos[index]) return null

                    return (
                        <AnimatedGrid item xs={12} sm={6} md={4} lg={3} key={index} style={animation}>
                            <ProjectItem key={repos[index].id} repo={repos[index]} />
                        </AnimatedGrid>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default ProjectsPage