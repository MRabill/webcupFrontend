import React, { Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Avatars5 = ({}) => {
  const avatar = useGLTF('./avatar5/scene.gltf');
  const [position, setPosition] = useState([0, -2.5, 0]);

  // Function to animate the avatar's position
  const animateAvatar = (time) => {
    const xPos = Math.sin(time / 2000) * 0.25; // Decreased amplitude and speed of the animation
    const yPos = Math.sin(time / 1000) * 0.1; // Decreased amplitude and speed of the animation
    const zPos = Math.cos(time / 2000) * 0.25; // Decreased amplitude and speed of the animation
    setPosition([xPos, -2.4 + yPos, zPos]); // Decreased y-axis offset
  };

  // Use useFrame to animate the avatar
  useFrame(({ clock }) => {
    animateAvatar(clock.elapsedTime * 1000);
  });

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor="black" />
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
        position={position}
        rotation={[0, 0, 0]} // Adjusted rotation to face the camera
      />
    </mesh>
  );
};

const Avatars5Canvas = () => {
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
        <Avatars5 />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Avatars5Canvas;
