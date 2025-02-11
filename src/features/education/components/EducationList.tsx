import { useTrail } from '@react-spring/web'
import { EducationData } from '../../shared/hooks/useData'
import EducationItem from './EducationItem'
import { Grid } from '@mui/material'

export interface EducationListProps {
    educationList: EducationData[]
}

const trailOptions = {
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { mass: 1, tension: 210, friction: 20 },
    delay: 300
}

function EducationList({ educationList }: EducationListProps) {
    const trail = useTrail(educationList.length, trailOptions)

    return (
        <Grid container spacing={3}>
            {trail.map((style, index) => (
                <EducationItem key={index} education={educationList[index]} style={style} />
            ))}
        </Grid>
    )
}

export default EducationList