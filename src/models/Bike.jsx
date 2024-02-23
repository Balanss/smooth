import { useEffect, useRef,useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import bike from "../assets/3d/bike.glb";
import * as THREE from "three";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bike-844ba0cf144a413ea92c779f18912042
export function Bike() {
  const bikeRef = useRef();

  const [isPlaying, setIsPlaying] = useState(true);
  

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(bike);

  // Get access to the animations for the bike
  const { actions } = useAnimations(animations, bikeRef);

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [shouldPause, setShouldPause] = useState(false);


useEffect(() => {
  let timeoutId = null;
  window.scrollTo(0, 0);
  const handleScroll = () => {
    // Clear any existing timeout
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    // Start the animation only if the user has scrolled more than 100px
    if (window.scrollY > 100) {
      setShouldAnimate(true);

      // Set a timeout to stop the animation after 2 seconds of no scrolling
      timeoutId = setTimeout(() => {
        setShouldAnimate(false);
        const action = actions["Take 001"];
        action.stop();
      }, 800);
    }
  };

  window.addEventListener('wheel', handleScroll);

  return () => {
    window.removeEventListener('wheel', handleScroll);

    // Clear the timeout when the component unmounts
    if (timeoutId !== null) {
      clearTimeout(timeoutId);

    }
  };
}, []);

useFrame((state, delta) => {
  if (shouldAnimate) {
    bikeRef.current.position.x -= 0.08 * delta;
    bikeRef.current.position.y += 0.012 * delta;
    const action = actions["Take 001"];
    action.play();
    

    // Stop the animation when the bike is out of screen view
    if (bikeRef.current.position.x  < 1) {
      setShouldAnimate(false);
      setShouldPause(true);
      const action = actions["Take 001"];
      action.stop();
    }
  }
});

  return (
    // to create and display 3D objects
      <mesh ref={bikeRef} position={[10.59, 0.92, 2.8 ]}  >
        <hemisphereLight intensity={0.15}  groundColor={'white'}/>
      <pointLight intensity={0.5}/>
      <directionalLight position={[-1,10,6]} intensity={0}/>
      <ambientLight intensity={0.5}/>
      <spotLight position={[-20,10,10]} intensity={0.1} angle={0.12} penumbra={1} castShadow shadow-mapSize={1024}/>
      <primitive object={scene} 
      scale={0.20}
      position={[-10.89, -0.83 ,0]}
      rotation={[-0.10, 3.5 , 0.09]}   />
      
    </mesh>  


  );
}
