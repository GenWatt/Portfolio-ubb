import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas, Props } from '@react-three/fiber'
import TechStackList from './TechStackList'
import CanvasWrapper from '../../../features/shared/components/CanvasWrapper'
import { ITechStackList } from '../../shared/hooks/useData'

export interface TechStackListProps {
    techStack: ITechStackList[]
    speed: number
    canvasProps?: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLCanvasElement>>
    containerProps?: React.HTMLProps<HTMLDivElement>
}

function TechStackCanvas({ techStack, speed, canvasProps, containerProps }: TechStackListProps) {
    return (
        <CanvasWrapper {...containerProps}>
            <Canvas {...canvasProps} style={{ zIndex: 0 }}>
                <ambientLight intensity={1} />
                <Environment preset="studio" background />
                <OrbitControls />
                <TechStackList techStack={techStack} speed={speed} />
            </Canvas>
        </CanvasWrapper>
    )
}

export default TechStackCanvas