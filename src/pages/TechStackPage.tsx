import { Grid, Slider } from '@mui/material'
import useHelper from '../features/shared/hooks/useHelper'
import { useEffect, useRef, useState } from 'react'
import TechStackCanvas from '../features/techStack/3D/TechStackCanvas'
import useData from '../features/shared/hooks/useData';

const MIN_SPEED = 0.0001;
const MAX_SPEED = 0.01;
const STEP_SPEED = 0.0001;

function TechStackPage() {
    const { viewWidth, viewHeight } = useHelper();
    const [totalHeight, setTotalHeight] = useState(0);

    const [speed, setSpeed] = useState(0.001);
    const sliderRef = useRef<HTMLDivElement>(null);
    const { techStack } = useData();

    const handleValueChange = (_1: Event, value: number | number[], _2: number) => {
        const newValue = Array.isArray(value) ? value[0] : value;
        setSpeed(newValue);
    }

    useEffect(() => {
        setTotalHeight(viewHeight - sliderRef.current!.clientHeight);
    }, [viewHeight]);

    return (
        <Grid container>
            <Grid ref={sliderRef} item xs={12} sm={4}>
                <span>Speed ({speed})</span>
                <Slider
                    value={speed}
                    onChange={handleValueChange}
                    min={MIN_SPEED}
                    max={MAX_SPEED}
                    step={STEP_SPEED} />
            </Grid>

            <Grid container>
                <TechStackCanvas
                    techStack={techStack}
                    speed={speed}
                    containerProps={{ style: { height: totalHeight, width: viewWidth } }} />
            </Grid>
        </Grid>
    );
}
export default TechStackPage