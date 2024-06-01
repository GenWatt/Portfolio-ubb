import { Grid, Typography, useTheme } from '@mui/material'
import { Html } from '@react-three/drei'
import { ITechStackList } from '../../../pages/TechStackPage'
import { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export interface TechStackItemProps {
    tech: ITechStackList
    index: number
    positions: Array<[number, number, number]>
}

function TechStackItem({ tech, index, positions }: TechStackItemProps) {
    const theme = useTheme()
    const meshRef = useRef<THREE.Group | null>(null);
    // const [ref, bounds] = useMeasure();

    // const { camera } = useThree();

    // function htmlToThreeDimensions(htmlWidth: number, htmlHeight: number, cameraZ: number) {
    //     const fov = 75; // Field of view of your camera
    //     const aspect = window.innerWidth / window.innerHeight;

    //     // Convert FOV to radians
    //     const fovRad = fov * (Math.PI / 180);

    //     // Calculate the height of the 3D space visible by the camera
    //     const spaceHeight = 2 * Math.tan(fovRad / 2) * cameraZ;

    //     // Calculate the width of the 3D space visible by the camera
    //     const spaceWidth = spaceHeight * aspect;

    //     // Convert HTML dimensions to Three.js world units
    //     const threeWidth = htmlWidth * (spaceWidth / window.innerWidth);
    //     const threeHeight = htmlHeight * (spaceHeight / window.innerHeight);

    //     return [threeWidth, threeHeight];
    // }

    // const [threeWidth, threeHeight] = htmlToThreeDimensions(bounds.width, bounds.height, camera.position.z);

    // Update the rotation of the 3D models to face the camera
    useFrame(({ clock }) => {
        if (meshRef.current) {
            // meshRef.current.lookAt(camera.position);

            // Rotate the models around the y-axis
            meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() / 2);
            meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() / 2);
        }
    });

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(tech.image);

    return (
        <group ref={meshRef} key={index} position={positions[index]}>
            <mesh position={[-2, 0, 0]} rotation={[1.1, 0, 1.5]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial map={texture} transparent opacity={1} />
            </mesh>
            <mesh>
                <Html position={[0, 0, 0.01]}>
                    <Grid container key={index} width={300} sx={{
                        backgroundColor: theme.palette.background.paper, borderRadius: .2
                    }}>
                        < Grid item p={4} >
                            <img src={tech.image} alt={tech.name} style={{ width: 100, height: 100 }} />
                            <Grid container>
                                <Grid>
                                    <Typography variant="h5" component="div">
                                        {tech.name}
                                    </Typography>

                                    <Typography variant="body2" color={theme.palette.secondary.main}>
                                        {tech.description}
                                    </Typography>
                                </Grid>
                                <Grid>
                                    {Array.from({ length: tech.stars }, (_, i) => (
                                        <span style={{ color: theme.palette.warning.main }} key={i}>★</span>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Html>
            </mesh >
        </group >
    )
}

export default TechStackItem