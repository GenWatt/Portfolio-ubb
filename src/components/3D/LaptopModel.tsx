import { useEffect, useRef } from 'react'
// @ts-ignore
import laptopModelUrl from '/mac-draco.glb'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Html } from '@react-three/drei'

export interface LaptopModelProps {
  groupProps: JSX.IntrinsicElements['group']
  children?: React.ReactNode
  isLoading: boolean
}

function LaptopModel({ groupProps, children, isLoading }: LaptopModelProps) {
  const group = useRef<THREE.Group | null>(null)
  const { nodes, materials } = useGLTF(laptopModelUrl)

  const wrapper = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    setTimeout(() => {
      if (wrapper.current) {
        wrapper.current.scrollTo({ left: 30 });
      }
    }, 1000);
  }

  useEffect(() => {
    if (!isLoading) {
      handleScroll()
    }
  }, [isLoading]);

  useFrame(() => {
    const targetY = -1.8

    if (group.current === null) return
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY, 0.1)
  })

  const htmlPosition: [number, number, number] = [0.55, 0.1, -0.5];

  return (
    <group ref={group} {...groupProps} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh geometry={nodes['Cube008_2'].geometry}>
            <Html ref={wrapper} className="content" rotation-x={-Math.PI / 2} position={htmlPosition} occlude transform>
              <div className='wrapper'>
                {children}
              </div>
            </Html>
          </mesh>
        </group>
      </group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  )
}

export default LaptopModel