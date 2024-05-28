import axios from 'axios'
import { Owner, Project, Repository } from '../types'

const baseUrl = "https://api.github.com"

const axiosInstance = axios.create({
    baseURL: baseUrl
})

function useGithub() {
    async function getRepo(project: Project) {
        try {
            const response = await axiosInstance.get<Repository>(`/repos/${project.username}/${project.repoName}`)

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

    async function getOwner(username: string) {
        try {
            const response = await axiosInstance.get(`/users/${username}`)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    async function getOwners(usernames: string[]) {
        const promises = usernames.map(username => getOwner(username))
        const owners = await Promise.all(promises)
        return owners.filter(owner => owner !== undefined) as Owner[]
    }

    return { getRepo, getRepos, getOwner, getOwners }
}

export default useGithub