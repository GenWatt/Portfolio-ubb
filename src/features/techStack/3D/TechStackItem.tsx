import { Html } from '@react-three/drei'
import { ITechStackList } from '../../../pages/TechStackPage'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import TechStackItemHtml from '../components/TechStackItemHtml'

export interface TechStackItemProps {
    tech: ITechStackList
    index: number
    positions: Array<[number, number, number]>
    radius: number
    onItemEnter: (isHovered: boolean) => void
}

function TechStackItem({ tech, index, positions, radius, onItemEnter }: TechStackItemProps) {
    const meshRef = useRef<THREE.Group | null>(null);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() / 2);
            meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() / 2);
        }
    });

    const [texture, setTexture] = useState<THREE.Texture>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(tech.image, (texture) => {
            setTexture(texture);
            setLoading(false);
        });
    }, [tech.image]);


    if (loading) {
        return null;
    }

    return (
        <group ref={meshRef} key={index} position={positions[index]}>
            <mesh position={[-2, 0, 0]} rotation={[1.1, 0, 1.5]}>
                <sphereGeometry args={[radius / 9, 32, 32]} />
                <meshStandardMaterial map={texture} transparent opacity={1} />
            </mesh>
            <mesh>
                <Html position={[0, 0, 0.01]}>
                    <TechStackItemHtml tech={tech} index={index} onItemEnter={onItemEnter} />
                </Html>
            </mesh>
        </group>
    )
}

export default TechStackItem