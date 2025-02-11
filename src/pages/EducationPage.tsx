import { Grid } from "@mui/material"
import EducationList from "../features/education/components/EducationList"
import EducationCanvas from "../features/education/3D/EducationCanvas"
import useHelper from "../features/shared/hooks/useHelper"
import useData from "../features/shared/hooks/useData"

function EducationPage() {
    const { viewWidth } = useHelper()
    const { educationData } = useData()

    return (
        <Grid container spacing={3}>
            <Grid item>
                <EducationList educationList={educationData} />
            </Grid>

            <Grid item xs={12}>
                <EducationCanvas containerProps={{ style: { height: 600, width: viewWidth } }} />
            </Grid>
        </Grid>
    )
}

export default EducationPage