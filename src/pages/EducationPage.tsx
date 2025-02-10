import { Grid } from "@mui/material"
import useTranslation from "../hooks/useTranslation"
import EducationList from "../components/education/EducationList"
import UBB from '../assets/images/ubb.jpg'
import zseeim from '../assets/images/zseeim.jpg'
import EducationCanvas from "../components/3D/education/EducationCanvas"
import useHelper from "../hooks/useHelper"
import { useEffect, useState } from "react"

export interface EducationData {
    schoolName: string
    specialization: string
    start: string
    end: string
    image?: string
    url: string
    description: string
}

function EducationPage() {
    const { t } = useTranslation()
    const { getViewWidth } = useHelper()
    const [viewWidth, setViewWidth] = useState(0)

    const educationData: EducationData[] = [{
        schoolName: t('technicalSchool'),
        specialization: t('mechatronics'),
        start: "2016",
        end: "2020",
        image: zseeim,
        url: 'https://zseeim.edu.pl/',
        description: t('technicalSchoolDescription')
    }, {
        schoolName: t('university'),
        specialization: t('softwareDeveloper'),
        start: "2021",
        end: "2025",
        image: UBB,
        url: 'https://ubb.edu.pl/',
        description: t('universityDescription')
    }]

    function handleResize() {
        setViewWidth(getViewWidth())
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <Grid container spacing={3}>
            <Grid item>
                <EducationList educationList={educationData} />
            </Grid>

            <Grid item xs={12} width={viewWidth} height={600}>
                <EducationCanvas />
            </Grid>
        </Grid>
    )
}

export default EducationPage