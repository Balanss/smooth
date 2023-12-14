/* eslint-disable no-unused-vars */
import {motion} from 'framer-motion'
import {style} from '../style'
import { staggerContainer } from '../utils/Motion'

const  SectionWrapper = (Component,idName) => {

function HOC(){
    return (
        <motion.section 
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once: true,amount: 0.25}}
      
        id={idName}>
            <span className='hash-span' id ={idName}>
               &nbsp; 
            </span>
            <Component/>
        </motion.section>
    )
}
return HOC
}

export default SectionWrapper