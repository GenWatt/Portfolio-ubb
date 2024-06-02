import { Grid, LinearProgress, LinearProgressProps, Typography } from "@mui/material";

export default function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Grid item xs={12} display={'flex'}>
            <Grid display={'flex'} width={'100%'} alignItems={'center'} gap={1}>
                <LinearProgress style={{ width: '100%' }} variant="determinate" {...props} />
                <Grid>
                    <Typography variant="body2" color="text.secondary">{`${Math.round(
                        props.value,
                    )}%`}</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}
