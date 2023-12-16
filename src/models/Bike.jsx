import { useEffect, useRef,useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import bike from "../assets/3d/bike.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bike-844ba0cf144a413ea92c779f18912042
export function Bike() {
  const bikeRef = useRef();

  const [isPlaying, setIsPlaying] = useState(true);
  

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(bike);

  // Get access to the animations for the bike
  const { actions } = useAnimations(animations, bikeRef);


useEffect(() => {
    if (isPlaying){
        actions["Take 001"].play();
    }
}, []);






  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [shouldAnimate2, setShouldAnimate2] = useState(false);
  const [shouldPause, setShouldPause] = useState(false);


  

  useEffect(() => {
    setTimeout(() => {
      setShouldAnimate(false);
      setShouldAnimate2(true);
    }, 15000);

    if (!shouldAnimate2 && shouldPause){
      setTimeout(() => {
        actions["Take 001"].paused = true;
       
    }
    , 10000);
    }

  }, [isPlaying, actions, shouldAnimate, shouldAnimate2]);



  useFrame((state, delta) => {
    if ( shouldAnimate) {
      bikeRef.current.position.x -= 0.04 * delta;
      bikeRef.current.position.y += 0.0052 * delta;
      
    }  if ( shouldAnimate2) {
     setTimeout(() => {
      bikeRef.current.position.x -= 0.04 * delta;
      bikeRef.current.position.y += 0.0052 * delta;
    setTimeout(() => {
      setShouldPause(true);
      setShouldAnimate2(false);
    }, 10000)
     }, 5000);
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
