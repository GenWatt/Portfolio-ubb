import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';
import { useRef } from 'react';
// @ts-ignore
import schoolModel from '/school_building.glb'

export default function SchoolModel() {
    const { nodes, materials } = useGLTF(schoolModel)
    const model = useRef<THREE.Group | null>(null)

    useFrame(() => {
        if (model.current === null) return
        model.current.rotation.y += 0.005
    });

    return (
        <group ref={model} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={.1}>
                <mesh
                    geometry={(nodes.Object_2 as THREE.Mesh).geometry}
                    material={materials.lambert21SG}
                />
                <mesh
                    geometry={(nodes.Object_3 as THREE.Mesh).geometry}
                    material={materials.lambert25SG}
                />
                <mesh
                    geometry={(nodes.Object_4 as THREE.Mesh).geometry}
                    material={materials.lambert35SG}
                />
                <mesh
                    geometry={(nodes.Object_5 as THREE.Mesh).geometry}
                    material={materials.lambert38SG}
                />
                <mesh
                    geometry={(nodes.Object_6 as THREE.Mesh).geometry}
                    material={materials.lambert42SG}
                />
                <mesh
                    geometry={(nodes.Object_7 as THREE.Mesh).geometry}
                    material={materials.lambert44SG}
                />
                <mesh
                    geometry={(nodes.Object_8 as THREE.Mesh).geometry}
                    material={materials.lambert47SG}
                />
                <mesh
                    geometry={(nodes.Object_9 as THREE.Mesh).geometry}
                    material={materials.lambert48SG}
                />
                <mesh
                    geometry={(nodes.Object_10 as THREE.Mesh).geometry}
                    material={materials.lambert51SG}
                />
            </group>
        </group>
    )
}