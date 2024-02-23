import { useEffect, useRef,useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import intro from "../assets/3d/intro.glb";




 function Intro() {
  const introRef = useRef();


  

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(intro);

  // Get access to the animations for the intro
  const { actions } = useAnimations(animations, introRef);


useEffect(() => {
    actions["Animation"].play().setEffectiveTimeScale(0.05);
}, []);

  return (
    // to create and display 3D objects
      <mesh ref={introRef} position={[0,0,-50]}  >
      <primitive object={scene} 
      scale={10}
      position={[0,0,0]}
      rotation={[0,11,0]}   />
      
    </mesh>  


  );
}




export default Intro;