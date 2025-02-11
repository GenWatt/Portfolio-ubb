import { OrbitControls } from "@react-three/drei"
import { Canvas, Props } from "@react-three/fiber"
import ProfileModel from "./ProfileModel"
import CanvasWrapper from "../../../features/shared/components/CanvasWrapper";

export interface ProfileCanvasProps {
    containerProps?: React.HTMLProps<HTMLDivElement>;
    canvasProps?: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLCanvasElement>>
}

function ProfileCanvas({ containerProps, canvasProps }: ProfileCanvasProps) {
    return (
        <CanvasWrapper {...containerProps}>
            <Canvas style={{ position: 'absolute', top: 0, left: 0 }} {...canvasProps}>
                <ambientLight intensity={1} />
                <OrbitControls />
                <ProfileModel scale={5} />
            </Canvas>
        </CanvasWrapper>
    )
}

export default ProfileCanvas

