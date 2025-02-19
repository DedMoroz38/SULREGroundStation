import { Canvas, useFrame } from 'react-three-fiber'
import { Group } from 'three'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useRef } from 'react'

export const RocketWrapper = () => {
  return (
    <div>
      <Canvas style={{ height: '100vh', width: '100vw' }}>
        <RocketWithAxis />
        <ambientLight />
        <PerspectiveCamera position={[5, 5, 10]} makeDefault />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

function RocketWithAxis() {
  const rocketRef = useRef<Group | null>(null)

  useFrame(() => {
    if (rocketRef.current) {
      rocketRef.current.rotation.z += 0.001
      rocketRef.current.rotation.x += 0.001
    }
  })

  return (
    <group ref={rocketRef}>
      <Rocket />
      <Axes />
    </group>
  )
}

function Rocket() {
  return (
    <group position={[0, 0, 0]}>
      {/* Rocket Body */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 3, 32]} />
        <meshStandardMaterial color="silver" />
      </mesh>

      {/* Rocket Nose Cone */}
      <mesh position={[0, 2, 0]}>
        <coneGeometry args={[0.22, 1, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Rocket Fins */}
      <mesh position={[0, -1.2, 0.28]} rotation={[0, 0, -Math.PI / 1]}>
        <boxGeometry args={[0.05, 0.5, 0.3]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh position={[0.2, -1.2, 0.28]} rotation={[0, 1.5, -Math.PI / 1]}>
        <boxGeometry args={[0.05, 0.5, 0.3]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh position={[0, -1.2, 0.28]} rotation={[Math.PI / 1.2, 0, 0]}>
        <boxGeometry args={[0.05, 0.5, 0.3]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh position={[0, -1.2, -0.28]} rotation={[-Math.PI / 1.2, 0, 0]}>
        <boxGeometry args={[0.05, 0.5, 0.3]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </group>
  )
}

function Axes() {
  return (
    <group>
      {/* X Axis Arrow */}
      <mesh position={[1, -0.06, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[2, -0.05, 0]} rotation={[0, 0, -1.5]}>
        <coneGeometry args={[0.1, 0.2, 11]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Y Axis Arrow */}

      <mesh position={[0, 0, 1]} rotation={[1.5, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh position={[0, 0.05, 2]} rotation={[1.5, 0, 0]}>
        <coneGeometry args={[0.1, 0.2, 11]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      {/* Z Axis Arrow */}
      <mesh position={[0, 2, 0]} rotation={[Math.PI / 1, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0, 3, 0]}>
        <coneGeometry args={[0.1, 0.2, 8]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  )
}
