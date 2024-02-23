
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { EffectComposer, SSAO, DepthOfField, ChromaticAberration, Vignette, Bloom, ToneMapping, Noise, HueSaturation, BrightnessContrast } from '@react-three/postprocessing'
import React from 'react'
import {style} from "../style"
import { Loader } from '@react-three/drei'
import Intro from './Intro'
import { useNavigate } from 'react-router-dom'


export default function IntroScene({setIntroScene}) {

  const navigate = useNavigate()

const name = `Shreyaan  Daga`.split("  ")

const title = "CEO and Founder of OLL  (Online Live Learning)"


const motionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: 0.25
    }
  };

  const handleGo = () => {
    navigate('/shreyaan')
  }

    return (
        <>
        <Suspense fallback={<Loader />}>
            <Canvas style={{ height: "100vh", width: "100%" }}>
                
                    <directionalLight position={[10, 10, 10]} intensity={2} />
                    <directionalLight position={[-0, -0, -0]} intensity={1} />
                    <ambientLight intensity={1.5} />
                    <pointLight position={[10, 5, 1]} intensity={2} />
                    <spotLight position={[0, 0, 10]} angle={0.15} penumbra={1} intensity={2} />
                    <hemisphereLight intensity={1} />
                    <Intro />
                    <EffectComposer>
                        <SSAO radius={1.6} intensity={1} bias={0.03} />
                        <DepthOfField focusDistance={0.624} />
                        <Noise opacity={0.04} />
                        <ChromaticAberration offset={[0.0732, 0.0732]} />
                        <Vignette offset={0.48} darkness={0.761} />
                        <Bloom threshold={0.099} intensity={2} radius={0.71} />
                        <ToneMapping averageLuminance={1.923} middleGrey={0.916} />
                        {/* <BrightnessContrast
    brightness={0} // brightness. min: -1, max: 1
    contrast={-0.1} // contrast: min -1, max: 1
  /> */}

                    </EffectComposer>
                
            </Canvas>
            </Suspense>

            <section className='absolute top-[120px] p-5 inset-0'>
            <div className="xs:block text-center">
            {name.map((el, i) => (
        <motion.span className={`${style.heroHeadText} text-white`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}

<motion.p 
  className={` ${style.heroSubText}  text-white-100 mt-2 `}
  {...motionProps}
  transition={{...motionProps.transition, delay: name.length / 10}}
>
  CEO and Founder of OLL  (Online Live Learning)
</motion.p>
         
         <motion.button className="bg-white text-black px-4 py-2 rounded-md mt-5"   whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }} onClick={() => handleGo()}>Explore</motion.button>
     </div>
            </section>


         </>
    )
}
