

export default function Plane() {
    // const [ref] = useplane(() => ({ rotation: [-Math.PI / 2, 0, 0] }))
    return (
        <mesh receiveShadow>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color="#a9c388" />
        </mesh>
    )
}