import React from 'react'
import {motion} from 'framer-motion'

export default function Loading() {


const words = 'I left home with a cycle, but I returned with a vision.'
const words2 = 'I decided to help teachers share their knowledge and skills with the world, because I believe that learning never stops." - Daga, 15';

  return (
    <div className='w-screen h-screen bg-primary flex justify-center items-end bg-bike bg-center bg-no-repeat'>
      <span className="loader relative -top-40"></span>
    </div>
  )
}
