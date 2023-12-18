import React from 'react'
import { BikeCanvas } from './canvas'
import Loader from './Loader'
import { Suspense } from 'react'
import SkillTitans from './SkillTitans'



export default function Footer() {
  return (
    <div className='relative w-full h-[500px] mx-auto bg-primary'>
      <div className=''>
      <SkillTitans />
      </div>

          <div className=' h-[390px] xs:hidden xl:block absolute top-0  m-auto '>
          
          <Suspense fallback={<Loader />}>
                    <BikeCanvas />
                    
                </Suspense>
              
          </div>
                    
    </div>
  )
}
