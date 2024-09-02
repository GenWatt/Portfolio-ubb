export function Cube({ position, color }: any) {
    // const [ref] = useSphere(() => ({ mass: 1, position }))
    return (
        <mesh castShadow position={position}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}

export function PlayerUnits() {
    return (
        <>
            <Cube position={[-2, 0.5, 0]} color="blue" />
            <Cube position={[0, 0.5, 2]} color="blue" />
            <Cube position={[2, 0.5, -1]} color="blue" />
        </>
    )
}

export function EnemyUnits() {
    return (
        <>
            <Cube position={[-5, 0.5, 0.5]} color="red" />
            <Cube position={[5, 0.5, 0.5]} color="red" />
            <Cube position={[0, 0.5, 0.5]} color="red" />
        </>
    )
}