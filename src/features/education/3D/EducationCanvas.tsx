import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas, Props } from '@react-three/fiber'
import SchoolModel from './SchoolModel'
import CanvasWrapper from '../../shared/components/CanvasWrapper';

export interface EducationCanvasProps {
    containerProps?: React.HTMLProps<HTMLDivElement>;
    canvasProps?: Props & React.RefAttributes<HTMLCanvasElement>
}

function EducationCanvas({ containerProps, canvasProps }: EducationCanvasProps) {

    return (
        <CanvasWrapper {...containerProps}>
            <Canvas camera={{ position: [0, 0, 1] }} {...canvasProps}>
                <ambientLight intensity={1} />
                <Environment preset="sunset" background />
                <OrbitControls />
                <group position={[0, -80, 0]} >
                    <SchoolModel />
                </group>
            </Canvas>
        </CanvasWrapper>
    )
}

export default EducationCanvas