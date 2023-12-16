import React from 'react'
import { BikeCanvas } from './canvas'
import Loader from './Loader'
import { Suspense } from 'react'



export default function Footer() {
  return (
    <div className='relative w-full h-[430px] mx-auto bg-primary'>
 
          <div className=' h-[390px] m-auto '>
          <Suspense fallback={<Loader />}>
                    <BikeCanvas />
                    
                </Suspense>
              
          </div>
                    
    </div>
  )
}
