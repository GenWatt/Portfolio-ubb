import { useThree } from "@react-three/fiber"
import { useEffect, useState } from "react"
import { Cube } from "./Units"
import * as THREE from 'three'

export default function PlayerUnits() {
    const [units, setUnits] = useState([
        { id: 1, position: [-2, 0.5, 0] },
        { id: 2, position: [0, 0.5, 2] },
        { id: 3, position: [2, 0.5, -1] },
    ])
    const { camera, raycaster, scene } = useThree()

    const handleRightClick = (event: any) => {
        event.preventDefault()
        const { clientX, clientY } = event

        // Calculate mouse position in normalized device coordinates
        const mouse = {
            x: (clientX / window.innerWidth) * 2 - 1,
            y: -(clientY / window.innerHeight) * 2 + 1,
        }

        const vector2 = new THREE.Vector2(mouse.x, mouse.y)

        // Update the picking ray with the camera and mouse position
        raycaster.setFromCamera(vector2, camera)

        // Calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObjects(scene.children)

        if (intersects.length > 0) {
            const newPosition = intersects[0].point
            setUnits(units.map(unit => ({
                ...unit,
                position: [newPosition.x, newPosition.y, 0]
            })))
        }

        return false
    }

    useEffect(() => {
        window.addEventListener('contextmenu', handleRightClick)

        return () => {
            window.removeEventListener('contextmenu', handleRightClick)
        }
    }, [units])

    return (
        <group>
            {units.map(unit => (
                <Cube key={unit.id} position={unit.position} color="blue" />
            ))}
        </group>
    )
}