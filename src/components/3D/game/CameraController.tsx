import { useThree, useFrame } from '@react-three/fiber'
import React, { useState } from 'react'
import * as THREE from 'three'

function CameraController() {
    const { camera } = useThree()
    const [cameraPosition, setCameraPosition] = useState([0, 10, 100])

    useFrame((_) => {
        camera.position.lerp(new THREE.Vector3(...cameraPosition), 0.1)
        camera.rotation.x = 0.5
        // camera.lookAt(0, 0, 0)
    })

    const handleKeyDown = (event: any) => {
        const speed = 2
        switch (event.key) {
            case 'w':
            case 'ArrowUp':
                setCameraPosition([cameraPosition[0], cameraPosition[1] + speed, cameraPosition[2]])
                break
            case 's':
            case 'ArrowDown':
                setCameraPosition([cameraPosition[0], cameraPosition[1] - speed, cameraPosition[2]])
                break
            case 'a':
            case 'ArrowLeft':
                setCameraPosition([cameraPosition[0] - speed, cameraPosition[1], cameraPosition[2]])
                break
            case 'd':
            case 'ArrowRight':
                setCameraPosition([cameraPosition[0] + speed, cameraPosition[1], cameraPosition[2]])
                break
        }
    }

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [cameraPosition])

    return null
}

export default CameraController