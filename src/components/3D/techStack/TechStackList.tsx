import { useEffect, useRef } from 'react'
import TechStackItem from './TechStackItem'
import { ITechStackList } from '../../../pages/TechStackPage'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export interface TechStackListProps {
    techStack: ITechStackList[]
}

function TechStackList({ techStack }: TechStackListProps) {
    const groupRef = useRef<THREE.Group | null>(null);
    const { camera } = useThree();

    const positions: Array<[number, number, number]> = techStack.map((_, i) => {
        const radius = 7;
        const angle = (i / techStack.length) * Math.PI * 2;
        return [Math.cos(angle) * radius, Math.sin(angle) * radius, 0];
    });

    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.rotation.z = clock.getElapsedTime() / 5;
        }
    });

    useEffect(() => {
        camera.position.set(0, -4, 2);  // Adjust as necessary
        // camera.lookAt(0, 0, 0);  // Ensure it looks at the center of the group
    }, [camera]);

    return (
        <group ref={groupRef}>
            {techStack.map((tech, index) => (
                <TechStackItem key={index} tech={tech} index={index} positions={positions} />
            ))}
        </group>
    )
}

export default TechStackList