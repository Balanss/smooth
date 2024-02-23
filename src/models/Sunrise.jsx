import { useEffect, useRef,useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import sunScene from "../assets/3d/sun.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Sunrise() {
  const birdRef = useRef();

  const [isPlaying, setIsPlaying] = useState(true);

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(sunScene);

  // Get access to the animations for the bird
  const { actions } = useAnimations(animations, birdRef);


useEffect(() => {
    if (isPlaying){
        actions["Animation"].play();

        // Stop the animation after 13 seconds
        setTimeout(() => {
  
            actions["Animation"].paused = true;
          }, 13000);
    }
}, [isPlaying, actions]);






  return (
    // to create and display 3D objects
      <mesh ref={birdRef} position={[10, 1, 3]}>
        <hemisphereLight intensity={20.15}  groundColor={'yellow'}/>
      <pointLight intensity={10}/>
      <directionalLight position={[-1,10,6]} intensity={10}/>
      <ambientLight intensity={2.5}/>
      <spotLight position={[-20,50,10]} intensity={2} angle={0.12} penumbra={1} castShadow shadow-mapSize={1024}/>
      <primitive object={scene} 
      scale={1}
      position={[0, -4 ,6]}
      rotation={[-0.0, -1.50 , 0.02]}  />   
    </mesh>  


  );
}
