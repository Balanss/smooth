import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import { useState, useRef, Suspense } from 'react'
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
  const ref = useRef()
  const { mouse } = useThree()

  const sphere = random.inSphere(new Float32Array(9000), { radius: 100})

  useFrame((state, delta) => {
    ref.current.rotation.y += 0.0001
    ref.current.rotation.x += 0.0002

    // Update the position of the particles to follow the mouse
    ref.current.position.x = mouse.x * 200
    ref.current.position.y = mouse.y * 200
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} strie={3} frustumCulled {...props}>
        <PointMaterial fog={true} attach="material" size={0.2} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  )
}

function randomColor() {
  const colors = ['#f272c8', '#f2a2c8', '#f2b2c8', '#f2c2c8', '#f2d2c8', '#f2e2c8']
  return colors[Math.floor(Math.random() * colors.length)]
}

const StarsCanvas = () => {
  return (
    <div className='absolute inset-0 w-screen h-auto z-[1000]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas