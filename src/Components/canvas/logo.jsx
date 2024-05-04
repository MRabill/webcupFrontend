import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Logos = ({}) => {
  const logo = useGLTF("./logo/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={10} groundColor="white" />
      <pointLight intensity={500} position={[0, 0, -10]} />
      <spotLight
        position={[0, 0, 0]}
        angle={Math.PI / 2}
        penumbra={0}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={logo.scene}
        scale={1}
        position={[0, 0, -2]} // Adjusted position to move it closer to the camera
        rotation={[0, 0, 0]} // Adjusted rotation to face the camera
      />
    </mesh>
  );
};

const LogosCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Logos />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default LogosCanvas;
