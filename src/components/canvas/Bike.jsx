/* eslint-disable react/no-unknown-property */
import {Suspense,useEffect,useState,useRef} from 'react';
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'
import { useFrame } from '@react-three/fiber';
import { SectionWrapper } from '../../hoc';
import { motion } from 'framer-motion';

const Bike = () => {

  const [isMobile,setIsMobile] = useState(false)

  useEffect(() => {
   
    if(window.innerWidth < 768){
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  ,[])


  const bike = useGLTF('./bike/scene.gltf')
  const bikeRef = useRef()




  useFrame(() => {
    if (bikeRef.current) {
      bikeRef.current.rotation.y += 0.001; // Adjust the speed of rotation as needed
    }
  });


  return (
    <mesh>
      <hemisphereLight intensity={1.15}  groundColor={'black'}/>
      <pointLight intensity={1}/>
      <ambientLight intensity={1.5}/>
      <spotLight position={[-20,50,10]} intensity={1} angle={0.12} penumbra={1} castShadow shadow-mapSize={1024}/>
      <primitive
       ref={bikeRef}
      scale={ isMobile ? 2 :4}
      position={[-25,-4.5,-10]}
      object={bike.scene}
      
      />
    
    </mesh>
  )
}

const BikeCanvas = () => {

  

  return(
    <motion.div
    className='relative w-[100vw] m-auto  h-[390px]'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 ,delay:0.5 }}
  >
    <Canvas
      frameLoop='demand'
      shadows
      camera={{position:[21,3,5],fov:15}}
      gl= {{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          maxPolarAngle={Math.PI/2}
          MinPolarAngle={Math.PI/2}
          autoRotate={false}
          enableZoom={true}
          zoomSpeed={1}
          maxDistance={5}
          rotateSpeed={0.005}
        />
        <Bike />
      </Suspense>
      <Preload all/>
    </Canvas>
  </motion.div>
  )

}

export default SectionWrapper(BikeCanvas,"Bike")