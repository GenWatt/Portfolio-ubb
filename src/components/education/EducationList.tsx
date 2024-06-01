import EducationItem from './EducationItem'
import { EducationData } from '../../pages/EducationPage'
import { Grid } from '@mui/material'

export interface EducationListProps {
    educationList: EducationData[]
}

function EducationList({ educationList }: EducationListProps) {
    return (
        <Grid container spacing={3}>
            {educationList.map((education, index) => (
                <EducationItem key={index} education={education} />
            ))}
        </Grid>
    )
}

export default EducationList