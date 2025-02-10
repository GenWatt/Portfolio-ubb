import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Owner, Project, Repository } from '../types';

const baseUrl = "https://api.github.com";

const axiosInstance = axios.create({
    baseURL: baseUrl,
});

async function fetchRepo(project: Project): Promise<Repository> {
    console.log('fetching repo', project);
    const response = await axiosInstance.get<Repository>(`/repos/${project.username}/${project.repoName}`);
    response.data.project = project;
    return response.data;
}

async function fetchOwner(username: string): Promise<Owner> {
    console.log('fetching owner', username);
    const response = await axiosInstance.get<Owner>(`/users/${username}`);
    return response.data;
}

export const reposQueryKey = (projects: Project[]) => ['repos', projects];
export const ownersQueryKey = (usernames: string[]) => ['owners', usernames];

export function useRepos(projects: Project[]) {
    return useQuery({
        queryKey: reposQueryKey(projects),
        queryFn: () => Promise.all(projects.map(fetchRepo)),
        enabled: projects.length > 0,
    });
}

export function useOwners(usernames: string[]) {
    return useQuery({
        queryKey: ownersQueryKey(usernames),
        queryFn: () => Promise.all(usernames.map(fetchOwner)),
        enabled: usernames.length > 0,
    });
}