import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ITechStackList } from '../../../pages/TechStackPage'
import TechStackList from './TechStackList'


export interface TechStackListProps {
    techStack: ITechStackList[]
}

function TechStackCanvas({ techStack }: TechStackListProps) {
    return (
        <Canvas>
            <ambientLight intensity={1} />
            <Environment preset="studio" background />
            <OrbitControls />
            <TechStackList techStack={techStack} />
        </Canvas>
    )
}

export default TechStackCanvas