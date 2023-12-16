/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {style} from '../style'
import { fadeIn,textVariant} from "../utils/Motion"
import { SectionWrapper } from '../hoc'
import Story from './Story'


const About = () => {
  return (
  <>
  {/* <motion.div
  variants={textVariant()} className='mt-[200px] relative max-w-7xl z-0 mx-auto'>
    <p className={style.sectionSubText}>Lorem ipsum dolor</p>
    <h1 className={style.sectionHeadText}>Lorem ipsum dolor</h1>
  </motion.div >
  <motion.p 
  variants={fadeIn("","",0.1,1)}
  className='mt-0 text-secondary text-[17px] max-w-3wl leading-[30px] relative max-w-7xl z-1 mx-auto'>
  Lorem ipsum dolor sit amet, mollitia dicta tempore et fugit amet, suscipit doloribus. Exercitationem, rerum.
  </motion.p> */}

<div className='mt-20 w-screen  flex  items-start justify-center flex-wrap gap-10'>
     <Story />
      </div>
   

  </>
  )
}

export default SectionWrapper(About,"about") 