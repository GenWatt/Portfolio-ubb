import useTranslation from './useTranslation'
import UBB from '../../../assets/images/ubb.jpg'
import zseeim from '../../..//assets/images/zseeim.jpg'
import REACT from '../../../assets/images/react.png'
import VUE from '../../../assets/images/vue.png'
import NODE from '../../../assets/images/node.png'
import MONGODB from '../../../assets/images/mongoDb.png'
import SQL from '../../../assets/images/SQL.png'
import UNITY from '../../../assets/images/unity.png'
import PYTHON from '../../../assets/images/python.jpg'
import DOTNET from '../../../assets/images/.Net.png'
import AZURE from '../../../assets/images/azure.jfif'
import CICD from '../../../assets/images/ci-cd.png'

export interface ITechStackList {
    name: string
    description: string
    image?: string | null
    level: string
}

export interface EducationData {
    schoolName: string
    specialization: string
    startDate: string
    endDate: string
    image?: string
    link: string
    description: string
    location: string
    GPA: number
    title: string
}

export interface ExperienceData {
    company: string
    position: string
    startDate: string
    endDate: string
    description: string
    link: string
    projects: { name: string, link: string }[]
    location: string
}

export interface Summary {
    type: 'experience' | 'education'
    title: string
    subtitle: string
    location: string
    date: string
    image?: string | null
    link: string
}

export type BadgeData = {
    name: string
    level: string
    color: string
}

export const createSummaryFromExperience = (exp: ExperienceData): Summary => ({
    type: 'experience',
    title: exp.position,
    subtitle: exp.company,
    location: exp.location,
    date: `${exp.startDate} - ${exp.endDate}`,
    link: exp.link
})

export const createSummaryFromEducation = (edu: EducationData): Summary => ({
    type: 'education',
    title: edu.specialization,
    subtitle: edu.schoolName,
    location: edu.location,
    date: `${edu.startDate} - ${edu.endDate}`,
    image: edu.image,
    link: edu.link
})

function useData() {
    const { t } = useTranslation()

    const experiences: ExperienceData[] = [
        {
            company: 'FSS sp. z o.o.',
            position: 'Frontend Developer',
            startDate: '02.2021',
            endDate: '01.2022',
            description: t('fssDescription'),
            link: 'https://fss.cc/about-us/',
            projects: [
                {
                    name: 'Yacht Information System',
                    link: 'https://fss.cc/projects/yis/'
                },
                {
                    name: 'Nowa Era - Games',
                    link: 'https://fss.cc/projects/nowa-era/'
                }
            ],
            location: 'Wapienica, Poland'
        },
        {
            company: 'Evixscan 3D',
            position: 'Software Developer - Intern',
            startDate: '07.2024',
            endDate: '08.2024',
            description: t('intership'),
            link: 'https://evatronix.com/pl/',
            projects: [
                {
                    name: 'Evixscan-3d-suite',
                    link: 'https://evixscan3d.com/evixscan-3d-suite/'
                }
            ],
            location: 'Bielsko-Biała, Poland'
        }
    ]

    const educationData: EducationData[] = [{
        schoolName: t('technicalSchool'),
        specialization: t('mechatronics'),
        startDate: "2016",
        endDate: "2020",
        image: zseeim,
        link: 'https://zseeim.edu.pl/',
        description: t('technicalSchoolDescription'),
        location: 'Bielsko-Biała, Poland',
        GPA: 4.4,
        title: t('technicalTitle')
    }, {
        schoolName: t('university'),
        specialization: t('softwareDeveloper'),
        startDate: "2021",
        endDate: "2025",
        image: UBB,
        link: 'https://ubb.edu.pl/',
        description: t('universityDescription'),
        location: 'Bielsko-Biała, Poland',
        GPA: 4.64,
        title: t('universityTitle')
    }]

    const techStack: ITechStackList[] = [
        { name: 'React', description: t('reactDescription'), image: REACT, level: '80%' },
        { name: 'Vue', description: t('vueDescription'), image: VUE, level: '80%', },
        { name: 'Node', description: t('nodeDescription'), image: NODE, level: '70%', },
        { name: 'MongoDB', description: t('mongoDescription'), image: MONGODB, level: '60%', },
        { name: 'SQL', description: t('sqlDescription'), image: SQL, level: '70%', },
        { name: 'CI/CD', description: t('cicdDescription'), image: CICD, level: '40%' },
        { name: '.NET', description: t('netDescription'), image: DOTNET, level: '80%', },
        { name: 'Python', description: t('pythonDescription'), image: PYTHON, level: '40%', },
        { name: 'Unity', description: t('unityDescription'), image: UNITY, level: '60%', },
        { name: 'Azure', description: t('azureDescription'), image: AZURE, level: '40%', }
    ];

    return { experiences, educationData, techStack }
}

export default useData