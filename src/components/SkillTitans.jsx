/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { VerticalTimeline } from "react-vertical-timeline-component"
import {VerticalTimelineElement} from "react-vertical-timeline-component"
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { style} from '../style'
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/Motion"
import { skillTitans } from "../constants/index"




const SkillTitansCard = ({experience}) => (

<div className="flex flex-col gap-4 justify-center bg-tertiary lg:w-[450px] w-[90%] border-b-2 border-blue-50 p-4 rounded-md">
    <img src={experience.icon} alt="experience" className="w-[100px] h-[100px] rounded-full" />
    <p className="text-secondary text-[16px] font-semibold mt-0">{experience.title}</p>
      <h3 className="text-white text-[14px] lg:w-[400px] font-bold">{experience.testimonial}</h3>
  
    </div>
    

  


  

)
  

const SkillTitans = () => {
  return (
    <>
     <motion.div className=' flex flex-col w-[80vw] m-auto  ' variants={textVariant()}>
         
          {skillTitans.map((experience, index) => (

           
            <SkillTitansCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}  
      </motion.div>

    </>
  )
}

export default SectionWrapper(SkillTitans,'work')