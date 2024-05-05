import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const InfiniteStones = ({ }) => {
  const avatar = useGLTF('./infinitestones/scene.gltf')
  const [rotationX, setRotationX] = useState(0)
  const [rotationY, setRotationY] = useState(0)

  useEffect(() => {
    const updateRotation = () => {
      const speed = 0.02; // Adjust the speed of rotation as needed
      setRotationX(rotationX + speed)
      setRotationY(rotationY + speed)
    }

    const frameId = requestAnimationFrame(updateRotation)

    return () => {
      cancelAnimationFrame(frameId)
    }
  }, [rotationX, rotationY])

  return (
    <mesh rotation={[rotationX, rotationY, 0]}>
      <hemisphereLight intensity={10} groundColor='blue' />
      <pointLight intensity={10} />
      <spotLight
        position={[0, 0, 10]}
        angle={0.12}
        penumbra={1}
        intensity={100}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={avatar.scene}
        scale={0.15}
        position={[0, -2.5, 0]} // Adjusted position to push it down by 1 unit
        rotation={[0, 0, 0]} // Adjusted rotation to face the camera
      />
    </mesh>
  )
}

const InfiniteStonesCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <InfiniteStones />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default InfiniteStonesCanvas;
