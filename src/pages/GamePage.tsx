import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import Scene from '../components/3D/game/Scene'

import { useState, useLayoutEffect } from 'react';
import useHelper from '../hooks/useHelper';

function GamePage() {
    const { getViewHeight, getViewWidth } = useHelper();
    const [viewHeight, setViewHeight] = useState(0);
    const [viewWidth, setViewWidth] = useState(0);

    const handleResize = () => {
        setViewHeight(getViewHeight());
        setViewWidth(getViewWidth());
    }

    useLayoutEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);
    return (
        <div style={{ width: viewWidth, height: viewHeight }}>
            <Canvas>
                <Physics>
                    <Scene />
                </Physics>
            </Canvas>
        </div>
    )
}

export default GamePage