import { useEffect, useRef, useState } from 'react'
import TechStackItem from './TechStackItem'
import { ITechStackList } from '../../../pages/TechStackPage'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export interface TechStackListProps {
    techStack: ITechStackList[]
    speed?: number
}

function TechStackList({ techStack, speed = 0.001 }: TechStackListProps) {
    const groupRef = useRef<THREE.Group | null>(null);
    const [radius, setRadius] = useState(0);
    const [hovered, setHovered] = useState(false);
    const { camera } = useThree();

    useEffect(() => {
        const screenWidth = window.innerWidth;
        const itemWidth = 280;
        const padding = 50;
        const maxRadius = 600;
        const calculatedRadius = Math.min(Math.max(screenWidth / 2, itemWidth + padding), maxRadius);
        setRadius(calculatedRadius);
    }, []);

    const positions: Array<[number, number, number]> = techStack.map((_, i) => {
        const angle = (i / techStack.length) * Math.PI * 2;
        return [Math.cos(angle) * radius, Math.sin(angle) * radius, 0];
    });

    const onItemEnter = (isHovered: boolean) => {
        setHovered(isHovered);
    }

    useFrame(() => {
        if (groupRef.current && !hovered) {
            groupRef.current.rotation.z += speed;
        }
    });

    useEffect(() => {
        camera.position.set(0, -4, 2);  // Adjust as necessary
    }, [camera]);

    return (
        <group ref={groupRef}>
            {techStack.map((tech, index) => (
                <TechStackItem key={index} tech={tech} index={index} positions={positions} radius={radius} onItemEnter={onItemEnter} />
            ))}
        </group>
    )
}

export default TechStackList