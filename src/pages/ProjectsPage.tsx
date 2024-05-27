import { Grid } from '@mui/material'
import ProjectItem from '../components/projects/ProjectItem'
import { Project, Repository } from '../types'
import useGithub from '../hooks/useGithub'
import { useEffect, useState } from 'react'
import RegisterImage from '../assets/images/adrianAuthClient/Register.png'
import ConfirmEmailImage from '../assets/images/adrianAuthClient/Confirm email.png'

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

function ProjectsPage() {
    const { getRepos } = useGithub()
    const [repos, setRepos] = useState<Repository[]>([])

    async function init() {
        const repos = await getRepos(projects)
        if (!repos) return
        setRepos(repos)
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <Grid container spacing={3}>
            {repos.map(repo => (
                <ProjectItem key={repo.id} repo={repo} />
            ))}
        </Grid>
    )
}

export default ProjectsPage