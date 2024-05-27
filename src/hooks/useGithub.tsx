import axios from 'axios'
import { Project, Repository } from '../types'

const baseUrl = "https://api.github.com/repos"

const axiosInstance = axios.create({
    baseURL: baseUrl
})

function useGithub() {
    async function getRepo(project: Project) {
        try {
            const response = await axiosInstance.get<Repository>(`/${project.username}/${project.repoName}`)

            response.data.project = project
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    async function getRepos(projects: Project[]): Promise<Repository[]> {
        const promises = projects.map(project => getRepo(project))
        const repositories = await Promise.all(promises)
        return repositories.filter(repository => repository !== undefined) as Repository[]
    }

    return { getRepo, getRepos }
}

export default useGithub