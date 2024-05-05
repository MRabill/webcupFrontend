import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const InfiniteStones = () => {
  const stones = useGLTF('./gauntlet/scene.gltf');

  return (
    <mesh > {/* Adjusted rotation to rotate on z-axis */}
      <hemisphereLight intensity={3} groundColor='white' />
      <pointLight intensity={10} position={[0, 0, -10]} />
      <spotLight
        position={[0, 0, 0]}
        angle={Math.PI / 2}
        penumbra={0}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
       
      />

      <primitive
        object={stones.scene}
        scale={4}
        position={[0, -2, 0]} // Adjusted position to move it closer to the camera
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

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
  );
};

export default InfiniteStonesCanvas;
