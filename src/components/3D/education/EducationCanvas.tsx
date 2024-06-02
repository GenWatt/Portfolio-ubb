import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import SchoolModel from './SchoolModel'

function EducationCanvas() {
    return (
        <Canvas camera={{ position: [0, 0, 1] }}>
            <ambientLight intensity={1} />
            <Environment preset="sunset" background />
            <OrbitControls />
            <group position={[0, -80, 0]} >
                <SchoolModel />
            </group>
        </Canvas>
    )
}

export default EducationCanvas