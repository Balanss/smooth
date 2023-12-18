/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { VerticalTimeline } from "react-vertical-timeline-component"
import {VerticalTimelineElement} from "react-vertical-timeline-component"
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { style} from '../style'
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/Motion"
import { experiences } from "../constants/index"
import { Bike, Sunrise } from "../models"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Loader from "./Loader"
import { Tilt } from "react-tilt";




const ExperienceCard = ({experience}) => (

    <VerticalTimelineElement
    className="vertical-timeline-element--work xs:w-[80vw] lg:w-auto"
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    iconStyle={{background: experience.iconBg}}
    icon={   <div  className="flex justify-center items-center w-full h-full">  <img src={experience.icon} alt="icon" className="rounded-full "/></div>} > 
  <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold mt-0">{experience.company_name}</p>
    </div>
    

    <ul className="mt-5 list-disc ml-5 space-y-2">
    {experience.points.map((desc,index)=>(
      <li key={`expierence-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider font-semibold">{desc}</li>
    ))}
    </ul>
   
  </VerticalTimelineElement>
  

)
  

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    {/* <p className={style.sectionSubText}>Shreyaan Daga </p> */}
    <h1 className={style.sectionHeadText}>Life Journey</h1>
      </motion.div>

      <div className='mt-20 flex flex-col mb-10'>
         
            
        <VerticalTimeline>
          {experiences.map((experience, index) => (

           
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      
      <div className="inset-0 fixed w-screen min-h-[200vh] z-[-10000000000]">
        <Canvas camera={{ near: 0.1, far: 1000 }} >
        <Suspense fallback={<Loader />}>
          <Sunrise />
      
          <Bike />
         
        </Suspense>
      </Canvas>
      </div>
      
    </>
  )
}

export default SectionWrapper(Experience,'work')