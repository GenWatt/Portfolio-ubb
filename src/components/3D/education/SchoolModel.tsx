import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';
import { useRef } from 'react';

export default function SchoolModel() {
    const { nodes, materials } = useGLTF('/school_building.glb')
    const model = useRef<THREE.Group | null>(null)

    useFrame(() => {
        if (model.current === null) return
        model.current.rotation.y += 0.005
    });

    return (
        <group ref={model} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={.1}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.lambert21SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.lambert25SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.lambert35SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.lambert38SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.lambert42SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.lambert44SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials.lambert47SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9.geometry}
                    material={materials.lambert48SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={materials.lambert51SG}
                />
            </group>
        </group>
    )
}