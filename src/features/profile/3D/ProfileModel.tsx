import { useGLTF } from '@react-three/drei'
// @ts-ignore
import adrianek_model from '/adrianek_model.glb'

export interface ProfileModelProps {
    groupProps?: JSX.IntrinsicElements['group']
}

function ProfileModel({ ...groupProps }) {
    const { nodes } = useGLTF(adrianek_model)

    return (
        <group {...groupProps} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
            />
        </group>
    )
}

export default ProfileModel