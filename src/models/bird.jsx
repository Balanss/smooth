import { useEffect, useRef,useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import birdScene from "../assets/3d/bird.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Bird() {
  const birdRef = useRef();
  const { mouse } = useThree();

  const [isPlaying, setIsPlaying] = useState(true);

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(birdScene);

  // Get access to the animations for the bird
  const { actions } = useAnimations(animations, birdRef);


useEffect(() => {
    actions["CINEMA_4D_Principal"].play();

},[] );

useFrame(() => {
    if (birdRef.current) {
      birdRef.current.position.x = mouse.x *  + 20 +2;
      birdRef.current.position.y = mouse.y *  + 20 +2;
    }
  });


  return (
    // to create and display 3D objects
      <mesh ref={birdRef} position={[10, 1, 3]}>
        <hemisphereLight intensity={0.15}  groundColor={'white'}/>
      <pointLight intensity={1}/>
      <directionalLight position={[-1,10,6]} intensity={1}/>
      <ambientLight intensity={1.5}/>
      <spotLight position={[-20,50,10]} intensity={1} angle={0.12} penumbra={1} castShadow shadow-mapSize={1024}/>
      <primitive object={scene} 
      scale={0.24}
      position={[0, 0 , -30.0]}
      rotation={[-0.0, -1.50 , 0.02]}  />
      
    </mesh>  


  );
}
