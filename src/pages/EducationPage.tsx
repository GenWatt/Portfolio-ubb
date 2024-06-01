import { Grid, Typography } from "@mui/material"
import useTranslation from "../hooks/useTranslation"
import EducationList from "../components/education/EducationList"
import UBB from '../assets/images/ubb.jpg'
import zseeim from '../assets/images/zseeim.jpg'


export interface EducationData {
    schoolName: string
    specialization: string
    start: string
    end: string
    image?: string
}


function EducationPage() {
    const { t } = useTranslation()

    const educationData: EducationData[] = [{
        schoolName: t('technicalSchool'),
        specialization: t('mechatronics'),
        start: t('technicalSchoolStart'),
        end: t('technicalSchoolEnd'),
        image: zseeim
    }, {
        schoolName: t('university'),
        specialization: t('softwareDdeveloper'),
        start: t('universityStart'),
        end: t('universityEnd'),
        image: UBB
    }]

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant='h4'>{t('technicalSchool')}</Typography>
            </Grid>
            <Grid item>
                <EducationList educationList={educationData} />
            </Grid>
        </Grid>
    )
}

export default EducationPage