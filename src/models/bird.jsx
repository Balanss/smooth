import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import birdScene from "../assets/3d/bird.glb";

export function Bird() {
  const birdRef = useRef();
  const { camera } = useThree();

  const [isPlaying, setIsPlaying] = useState(true);

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(birdScene);

  // Get access to the animations for the bird
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["CINEMA_4D_Principal"].play();
  }, []);

  useFrame(({ clock }) => {
    if (birdRef.current) {
      const viewportWidthAtDepth = Math.tan((camera.fov * Math.PI) / 180 / 2) * 2 * camera.position.z * camera.aspect;
      birdRef.current.position.x = -viewportWidthAtDepth / 2 + (clock.getElapsedTime() % (viewportWidthAtDepth + 1));
    }
  });

  return (
    <mesh ref={birdRef} position={[-camera.aspect * camera.position.z, 1, 3]} rotation={[0, 0, 0]}>
      <hemisphereLight intensity={0.15} groundColor={'white'} />
      <pointLight intensity={1} />
      <directionalLight position={[-1, 10, 6]} intensity={1} />
      <ambientLight intensity={1.5} />
      <spotLight position={[-20, 50, 10]} intensity={1} angle={0.12} penumbra={1} castShadow shadow-mapSize={1024} />
      <primitive object={scene}
        scale={0.1}
        position={[0, -10, -30.0]}
        rotation={[-0.0, -0.5, 0.02]} />
    </mesh>
  );
}