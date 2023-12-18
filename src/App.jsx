/* eslint-disable no-unused-vars */
import './App.css'
 import { BrowserRouter } from 'react-router-dom';

import { About,Hero,Navbar, StarsCanvas } from './components'
import Footer from './components/Footer';
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from './components/Loader'
import { Bird } from './models/Bird'




function App() {
return (
  <>
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
      <div className='absolute xs:bottom-10 inset-0 z-10   w-screen h-[1000px] bg-cover bg-no-repeat bg-center  xs:hidden lg:block  '>
   <Canvas camera={{ near: 0.1, far: 2000 }} >
        <Suspense fallback={<Loader />}>
        <Bird />
        </Suspense>
      </Canvas>
   </div>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
 
     <div className='relative z-[-1]'>
          <About />  
          </div >

          {/* <div className='relative z-0'>
          <Footer /> 
          </div> */}

          
      </div>

    
 
    </BrowserRouter>
  </>
)

}

export default App
