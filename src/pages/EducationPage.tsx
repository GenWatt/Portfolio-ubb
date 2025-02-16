import { Grid, Typography } from "@mui/material"
import EducationList from "../features/education/components/EducationList"
import EducationCanvas from "../features/education/3D/EducationCanvas"
import useHelper from "../features/shared/hooks/useHelper"
import useData from "../features/shared/hooks/useData"
import useTranslation from "../features/shared/hooks/useTranslation"

function EducationPage() {
    const { viewWidth } = useHelper()
    const { educationData } = useData()
    const { t } = useTranslation()

    return (
        <Grid container spacing={3}>
            <Grid item>
                <EducationList educationList={educationData} />
            </Grid>

            <Grid container item>
                <Typography variant='h4' textAlign={'center'} width="100%" color='primary' fontWeight={600}>
                    {t('noneComersialExperience')}
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <EducationCanvas containerProps={{ style: { height: 400, width: viewWidth } }} />
            </Grid>
        </Grid>
    )
}

export default EducationPage