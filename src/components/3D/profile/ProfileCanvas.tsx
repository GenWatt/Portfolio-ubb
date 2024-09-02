import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import ProfileModel from "./ProfileModel"
import useHelper from "../../../hooks/useHelper";
import { useLayoutEffect, useState } from "react";

function ProfileCanvas() {
    const { getViewWidth } = useHelper();
    const [viewWidth, setViewWidth] = useState(0);

    const handleResize = () => {
        setViewWidth(getViewWidth());
    }

    useLayoutEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return (
        <Canvas style={{ width: viewWidth }}>
            <ambientLight intensity={1} />
            <OrbitControls />
            <ProfileModel scale={5} />
        </Canvas>
    )
}

export default ProfileCanvas