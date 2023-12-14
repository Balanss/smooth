/* eslint-disable no-unused-vars */

import {motion} from 'framer-motion'
import {style} from "../style"

export default function Hero() {
  return (
    <section className='relative w-full h-screen '>
 <div className={`absolute inset-0 top-[120px] max-w-7xl flex mx-auto flex-row items-start gap-5`}>
   <div className='flex flex-col justify-center items-center mt-5'>
 <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
 <div className='w-1 sm:h-80 h-40 violet-gradient'/>
     </div>
 
     <div>
       <h1 className={`${style.heroHeadText} text-white`}>
       Lorem ipsum  <span className='text-[#915eff]'> dolor </span>
      
       </h1>
       <p className={` ${style.heroSubText} text-white-100 mt-2`} >
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         </p>
     </div>
   
 
 </div>
   <div className='absolute xs:bottom-10 bottom-32 flex w-full justify-center items-center '>
 <a href='#HorizonalText'>

 </a>
   </div>
    </section>
   )
}
