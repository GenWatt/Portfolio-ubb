
import useTranslation from './useTranslation'
import UBB from '../../../assets/images/ubb.jpg'
import zseeim from '../../..//assets/images/zseeim.jpg'

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
            company: 'Evatronix',
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
        },
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
        GPA: 4.5
    }, {
        schoolName: t('university'),
        specialization: t('softwareDeveloper'),
        startDate: "2021",
        endDate: "2025",
        image: UBB,
        link: 'https://ubb.edu.pl/',
        description: t('universityDescription'),
        location: 'Bielsko-Biała, Poland',
        GPA: 4.64
    }]

    const badgesData: BadgeData[] = [
        {
            name: 'JavaScript',
            level: '80%',
            color: 'primary'
        },
        {
            name: 'React',
            level: '80%',
            color: 'secondary'
        },
        {
            name: 'Node.js',
            level: '70%',
            color: 'success'
        },
        {
            name: 'MongoDB',
            level: '60%',
            color: 'error'
        },
        {
            name: 'Python',
            level: '40%',
            color: 'warning'
        },
        {
            name: 'C#',
            level: '80%',
            color: 'warning'
        },
        {
            name: 'Docker',
            level: '60%',
            color: 'warning'
        },
        {
            name: 'Azure',
            level: '40%',
            color: 'warning'
        },
        {
            name: 'CI/CD',
            level: '50%',
            color: 'warning'
        },
        {
            name: 'Vue',
            level: '80%',
            color: 'warning'
        },
        {
            name: 'mySQL',
            level: '70%',
            color: 'warning'
        },
        {
            name: 'WPF',
            level: '40%',
            color: 'warning'
        }
    ]

    return { experiences, educationData, badgesData }
}

export default useData