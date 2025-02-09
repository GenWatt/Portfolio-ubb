import { Grid, Typography, useTheme } from '@mui/material'
import { Html } from '@react-three/drei'
import { ITechStackList } from '../../../pages/TechStackPage'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export interface TechStackItemProps {
    tech: ITechStackList
    index: number
    positions: Array<[number, number, number]>
    radius: number
    onItemEnter: (isHovered: boolean) => void
}

function TechStackItem({ tech, index, positions, radius, onItemEnter }: TechStackItemProps) {
    const theme = useTheme()
    const meshRef = useRef<THREE.Group | null>(null);
    const [hovered, setHovered] = useState(false);

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

    const handleHover = () => {
        setHovered(true);
        onItemEnter(true);
    }

    const handleUnhover = () => {
        setHovered(false);
        onItemEnter(false);
    }

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
                    <Grid
                        onMouseEnter={handleHover}
                        onMouseLeave={handleUnhover}
                        container
                        key={index}
                        width={Math.max(280, window.innerWidth / 6)}
                        sx={{
                            backgroundColor: theme.palette.background.paper, borderRadius: .2, transform: `scale(${hovered ? 1.4 : 1})`,
                            transition: 'transform .3s ease-in-out',
                            zIndex: theme.zIndex.drawer - 1,
                        }}>
                        <Grid item p={4}>
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
            </mesh>
        </group>
    )
}

export default TechStackItem