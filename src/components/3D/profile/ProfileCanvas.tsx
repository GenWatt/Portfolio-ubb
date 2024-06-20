import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import ProfileModel from "./ProfileModel"


function ProfileCanvas() {
    return (
        <Canvas>
            <ambientLight intensity={1} />
            <OrbitControls />
            <ProfileModel scale={5} />
        </Canvas>
    )
}

export default ProfileCanvas