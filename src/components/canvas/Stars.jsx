/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import {Canvas,useFrame} from '@react-three/fiber'
import {Points, PointMaterial , Preload } from '@react-three/drei'
import {useState,useRef,Suspense} from 'react'
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {

    const ref = useRef()

    const sphere = random.inSphere (new Float32Array(10000), {radius: 1.2})
    
    useFrame((state,delta) => {
      ref.current.rotation.y += 0.0001
      ref.current.rotation.x += 0.0002
    
      //or use detla / 10
    })
    
      return (
        <group rotation={[0,0,Math.PI / 4]}>
          <Points ref={ref} positions={sphere} strie = {3} frustumCulled {...props}>
            <PointMaterial color='#f272c8' transparent size={0.002} sizeAttenuation={true} depthWrite={false}/>
          </Points>
      
        </group>
      )
    }
    
    
    const StarsCanvas = () => {
      return (
        <div className='absolute inset-0 w-screen h-auto z-[-1]'>
          <Canvas camera={{position:[0,0,1]}}>
            <Suspense fallback={null}>
              <Stars />
            </Suspense>
            <Preload all />
    
          </Canvas>
    
        </div>
      )
    }
    
    export default StarsCanvas


