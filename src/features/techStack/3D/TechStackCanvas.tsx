import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas, Props } from '@react-three/fiber'
import { ITechStackList } from '../../../pages/TechStackPage'
import TechStackList from './TechStackList'
import CanvasWrapper from '../../../features/shared/components/CanvasWrapper'

export interface TechStackListProps {
    techStack: ITechStackList[]
    speed: number
    canvasProps?: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLCanvasElement>>
    containerProps?: React.HTMLProps<HTMLDivElement>
}

function TechStackCanvas({ techStack, speed, canvasProps, containerProps }: TechStackListProps) {
    return (
        <CanvasWrapper {...containerProps}>
            <Canvas {...canvasProps}>
                <ambientLight intensity={1} />
                <Environment preset="studio" background />
                <OrbitControls />
                <TechStackList techStack={techStack} speed={speed} />
            </Canvas>
        </CanvasWrapper>
    )
}

export default TechStackCanvas