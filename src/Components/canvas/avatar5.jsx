import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Avatars5 = ({ }) => {
  const avatar = useGLTF('./avatar5/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor='black' />
      <pointLight intensity={10} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={avatar.scene}
        scale={3}
        position={[0, -2.5, 0]} // Adjusted position to push it down by 1 unit
        rotation={[0, 0, 0]} // Adjusted rotation to face the camera
      />
      
    </mesh>
  )
}

const Avatars5Canvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true,  alpha: true  }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Avatars5/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default Avatars5Canvas;
